// SELL — the RHF showcase page (portal g): required fields, positive price,
// minimum description length. Also handles UPDATE: pick a listing of yours,
// the form prefills via reset(), and submit PUTs instead of POSTs.
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchMine, fetchProducts, createProduct, updateProduct, deleteProduct } from '../slices/productsSlice';

export default function Sell() {
  const dispatch = useDispatch();
  const { mine, loading, error } = useSelector((s) => s.products);
  const [editingId, setEditingId] = useState(null);
  const [confirmDel, setConfirmDel] = useState(null); // two-click delete (destructive, so first click only arms it)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { title: '', description: '', price: '', category: '', image: '' },
  });

  useEffect(() => {
    dispatch(fetchMine());
  }, [dispatch]);

  const onSubmit = async (values) => {
    const payload = { ...values, price: Number(values.price) }; // price must BE a number, not a string
    try {
      if (editingId) {
        await dispatch(updateProduct({ id: editingId, ...payload })).unwrap();
      } else {
        await dispatch(createProduct(payload)).unwrap();
      }
      reset(); setEditingId(null);
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

          <input type="url" placeholder="Image URL (optional)"
            {...register('image', { pattern: { value: /^https?:\/\//, message: 'Image must be a URL (http…)' } })} />
          {errors.image && <p className="error">{errors.image.message}</p>}

          <button className="btn" disabled={loading}>
            {editingId ? 'Save changes' : 'Add listing'}
          </button>
          {editingId && (
            <button className="btn btn-ghost" type="button" onClick={() => { setEditingId(null); reset(); }}>
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
            <div>
              <strong>{p.title}</strong>
              {p.isSold && <span className="sold-badge">SOLD</span>}
              <p className="price">₹ {p.price}</p>
            </div>
            <div>
              <button className="btn btn-sm" onClick={() => {
                setEditingId(p._id);
                reset({ title: p.title, description: p.description, price: p.price, category: p.category, image: p.image });
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
