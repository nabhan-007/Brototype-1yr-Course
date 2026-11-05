// PRODUCTS — the public listing. Data comes from Redux (productsSlice), loaded by
// fetchProducts with query parameters (server-side filtering — the portal allows either).
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';
import { addItem } from '../slices/cartSlice';
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
          <div className="card" key={p._id}>
            {p.image
              ? <img src={p.image} alt={p.title} />
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
                <button className="btn" onClick={() => handleAdd(p)}>Add to cart</button>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
