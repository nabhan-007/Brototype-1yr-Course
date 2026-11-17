// PRODUCTS — the public listing. Data comes from Redux (productsSlice), loaded by
// fetchProducts with query parameters (server-side filtering — the portal allows either).
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';
import { addItem } from '../slices/cartSlice';
import { fileUrl } from '../api';
import { useNavigate, Link } from 'react-router-dom';

const CATEGORIES = ['Phones', 'Electronics', 'Vehicles', 'Furniture', 'Other'];

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((s) => s.products);
  const token = useSelector((s) => s.auth.token);
  const user = useSelector((s) => s.auth.user); // id lets the UI spot YOUR OWN listings
  // Filter inputs stay LOCAL here (component state) — only RESULTS belong in the store.
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selected, setSelected] = useState(null); // the product shown in the modal

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); }; // Esc closes, like every dialog
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  useEffect(() => {
    dispatch(fetchProducts({})); // initial load: all unsold products
  }, [dispatch]);

  const applyFilters = (e) => {
    e.preventDefault(); // stop the browser page reload
    dispatch(fetchProducts({ category: category || undefined, minPrice: minPrice || undefined, maxPrice: maxPrice || undefined }));
  };

  const clearFilters = () => {
    setCategory(''); setMinPrice(''); setMaxPrice('');
    dispatch(fetchProducts({}));
  };

  const handleAdd = (product) => {
    dispatch(addItem(product));
    navigate('/cart');
  };

  const openProduct = (p) => setSelected(p);
  const onCardKey = (e, p) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProduct(p); } // keyboard = same as click
  };

  return (
    <div>
      <form className="filters" onSubmit={applyFilters}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All categories</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <input type="number" placeholder="Min price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <input type="number" placeholder="Max price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        <button className="btn btn-sm">Filter</button>
        <button className="btn btn-sm btn-ghost" type="button" onClick={clearFilters}>Clear</button>
      </form>

      {loading && <p className="msg">Loading products…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && items.length === 0 && (
        // Honest empty-state: DB empty ≠ filters matched nothing — different messages
        <p className="msg">{category || minPrice || maxPrice ? 'No products match your filters.' : 'No products yet. Sell something!'}</p>
      )}

      <div className="grid">
        {items.map((p) => (
          <div
            className="card card-click"
            key={p._id}
            role="button"
            tabIndex={0}
            onClick={() => openProduct(p)}
            onKeyDown={(e) => onCardKey(e, p)}
          >
            {p.image
              ? <img src={fileUrl(p.image)} alt={p.title} />
              : <div className="noimg">no image</div>}
            <h3>{p.title}</h3>
            <p className="price">₹ {p.price}</p>
            <p className="desc">{p.description}</p>
            <p className="cat">{p.category}</p>
            {/* Visitors need the affordance spelled out — dead-looking cards read as broken */}
            {!token && <Link className="cat" to="/login">Log in to add to cart</Link>}
            {token && (
              p.seller === user?.id ? (
                <p className="cat">Your listing — buyers see the cart button here</p>
              ) : (
                <button className="btn" onClick={(e) => { e.stopPropagation(); handleAdd(p); }}>Add to cart</button>
              )
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()} // clicks inside the dialog must not close it
          >
            <button className="modal-close" aria-label="Close" onClick={() => setSelected(null)}>×</button>
            {selected.image
              ? <img src={fileUrl(selected.image)} alt={selected.title} />
              : <div className="noimg">no image</div>}
            <h2 id="modal-title">{selected.title}</h2>
            <p className="price">₹ {selected.price}</p>
            <p className="desc">{selected.description}</p>
            <p className="cat">{selected.category}</p>
            {!token && <Link className="btn" to="/login">Log in to add to cart</Link>}
            {token && (
              selected.seller === user?.id
                ? <p className="cat">Your listing — buyers see the cart button here</p>
                : <button className="btn" onClick={() => handleAdd(selected)}>Add to cart</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
