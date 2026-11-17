// SELL — the RHF showcase page (portal g): required fields, positive price,
// minimum description length, and a real image upload from the machine (pending 5).
// Also handles UPDATE: pick a listing of yours, the form prefills via reset(), and submit PUTs.
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchMine, fetchProducts, createProduct, updateProduct, deleteProduct } from '../slices/productsSlice';
import { fileUrl } from '../api';

const MAX_MB = 2;

export default function Sell() {
  const dispatch = useDispatch();
  const { mine, loading, error } = useSelector((s) => s.products);
  const [editingId, setEditingId] = useState(null);
  const [editingImage, setEditingImage] = useState(''); // keeps the old photo when no new file is picked
  const [confirmDel, setConfirmDel] = useState(null); // two-click delete (destructive, so first click only arms it)
  const [formKey, setFormKey] = useState(0); // remount clears the native file input (reset() cannot)

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: { title: '', description: '', price: '', category: '', imageUrl: '' },
  });

  // A picked file becomes a local preview URL; revoke it when it changes or on unmount (else it leaks).
  const pickedFile = watch('image')?.[0];
  const preview = useMemo(() => (pickedFile ? URL.createObjectURL(pickedFile) : ''), [pickedFile]);
  const imageUrl = watch('imageUrl'); // the link is the fallback when no file is picked
  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  useEffect(() => {
    dispatch(fetchMine());
  }, [dispatch]);

  const onSubmit = async (values) => {
    // multipart/form-data: text fields + the file in one body. axios sets the boundary itself.
    const fd = new FormData();
    fd.append('title', values.title);
    fd.append('description', values.description);
    fd.append('price', values.price);
    fd.append('category', values.category);

    // Photo priority: a picked file beats a pasted link, and both beat the previous photo on an edit.
    const file = values.image?.[0];
    if (file) fd.append('image', file);
    else if (values.imageUrl) fd.append('image', values.imageUrl);
    else if (editingImage) fd.append('image', editingImage);

    try {
      if (editingId) {
        await dispatch(updateProduct({ id: editingId, body: fd })).unwrap();
      } else {
        await dispatch(createProduct(fd)).unwrap();
      }
      reset(); setEditingId(null); setEditingImage(''); setFormKey((k) => k + 1);
    } catch (err) {
      // slice already holds the error text from the server
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProduct(id)).unwrap();
      dispatch(fetchProducts({})); // a deleted unsold ad must also leave the public listing
    } catch (err) {
      // 403/404 message already in the slice → shown under the form
    } finally {
      setConfirmDel(null); // whether it worked or not, the delete is no longer armed
    }
  };

  return (
    <div className="sell-layout">
      <div className="auth-card">
        <h2>{editingId ? 'Update listing' : 'Add a listing'}</h2>
        <form key={formKey} onSubmit={handleSubmit(onSubmit)} noValidate>
          <input placeholder="Title" {...register('title', { required: 'Title is required' })} />
          {errors.title && <p className="error">{errors.title.message}</p>}

          <textarea placeholder="Description (min 10 chars)" rows="3"
            {...register('description', { required: 'Description is required', minLength: { value: 10, message: 'Min 10 characters' } })} />
          {errors.description && <p className="error">{errors.description.message}</p>}

          <input type="number" placeholder="Price (₹)"
            {...register('price', {
              required: 'Price is required',
              min: { value: 1, message: 'Price must be positive' },
              validate: { numeric: (v) => !isNaN(v) || 'Price must be a number' },
            })} />
          {errors.price && <p className="error">{errors.price.message}</p>}

          <select {...register('category', { required: 'Category is required' })}>
            <option value="">Select category</option>
            {['Phones', 'Electronics', 'Vehicles', 'Furniture', 'Other'].map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.category && <p className="error">{errors.category.message}</p>}

          <label className="file-label">
            Photo from your computer (optional, max {MAX_MB} MB)
            <input type="file" accept="image/*"
              {...register('image', {
                validate: (files) => {
                  const f = files?.[0];
                  if (!f) return true; // optional — a listing without a photo is still valid
                  if (!f.type.startsWith('image/')) return 'Images only (jpg, png, webp…)';
                  if (f.size > MAX_MB * 1024 * 1024) return `Keep it under ${MAX_MB} MB`;
                  return true;
                },
              })} />
          </label>
          {errors.image && <p className="error">{errors.image.message}</p>}

          <input type="url" placeholder="…or paste an image link (https://…)"
            {...register('imageUrl', { pattern: { value: /^https?:\/\//, message: 'Link must start with http:// or https://' } })} />
          {errors.imageUrl && <p className="error">{errors.imageUrl.message}</p>}

          {(preview || imageUrl || (editingId && editingImage)) && (
            <img className="preview" src={preview || imageUrl || fileUrl(editingImage)} alt="Listing preview" />
          )}

          <button className="btn" disabled={loading}>
            {editingId ? 'Save changes' : 'Add listing'}
          </button>
          {editingId && (
            <button className="btn btn-ghost" type="button" onClick={() => { setEditingId(null); setEditingImage(''); reset(); setFormKey((k) => k + 1); }}>
              Cancel edit
            </button>
          )}
        </form>
        {error && <p className="error">{error}</p>}
      </div>

      <div className="mine-list">
        <h3>Your listings</h3>
        {mine.length === 0 && <p className="msg">Nothing listed yet.</p>}
        {mine.map((p) => (
          <div className="card card-row" key={p._id}>
            {p.image && <img className="thumb" src={fileUrl(p.image)} alt={p.title} />}
            <div>
              <strong>{p.title}</strong>
              {p.isSold && <span className="sold-badge">SOLD</span>}
              <p className="price">₹ {p.price}</p>
            </div>
            <div>
              <button className="btn btn-sm" onClick={() => {
                setEditingId(p._id);
                setEditingImage(p.image || '');
                reset({
                  title: p.title, description: p.description, price: p.price, category: p.category,
                  // only prefill the link box when the stored image IS a link (uploads stay in editingImage)
                  imageUrl: p.image && !p.image.startsWith('/uploads') ? p.image : '',
                });
              }}>Edit</button>
              {/* Two-click delete: first click arms ("Sure?"), second confirms — destructive action, no blind deletes */}
              <button className="btn btn-sm btn-danger" style={{ marginLeft: 8 }}
                onClick={() => (confirmDel === p._id ? handleDelete(p._id) : setConfirmDel(p._id))}>
                {confirmDel === p._id ? 'Sure?' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
