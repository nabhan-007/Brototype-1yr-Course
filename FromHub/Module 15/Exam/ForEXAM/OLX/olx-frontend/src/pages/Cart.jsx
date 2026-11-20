// CART — pure Redux page (no API until checkout). add/qty/remove all dispatch actions;
// the ONLY network call is checkout, whose status lives in checkoutSlice.
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateQty, removeItem } from '../slices/cartSlice';
import { checkout } from '../slices/checkoutSlice';
import { fetchProducts } from '../slices/productsSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);
  const { status, error, purchased } = useSelector((s) => s.checkout);
  const [goneMsg, setGoneMsg] = useState(''); // shown when items were already bought by someone else

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCheckout = async () => {
    setGoneMsg('');
    try {
      // Backend names exactly which ids were bought; only THOSE leave the cart.
      // [...new Set] dedupes: qty>1 of the same listing still sends the id ONCE —
      // OLX listings are unique one-off items; checkout sells each ad exactly once.
      const res = await dispatch(checkout([...new Set(items.map((i) => i._id))])).unwrap();
      res.purchasedIds.forEach((id) => dispatch(removeItem(id)));
      if (res.purchasedIds.length === 0) setGoneMsg('Items in your cart were already bought by someone else.');
      dispatch(fetchProducts({})); // sold items now disappear from the listing
    } catch (err) {
      // error text comes from the server via checkoutSlice
    }
  };

  if (items.length === 0) {
    return <p className="msg">Cart is empty. {purchased !== null && `Checkout done — ${purchased} item(s) purchased!`}</p>;
  }

  return (
    <div className="cart-page">
      {status === 'failed' && <p className="error">{error}</p>}
      {goneMsg && <p className="error">{goneMsg}</p>}
      {items.map((i) => (
        <div className="card card-row" key={i._id}>
          <div>
            <strong>{i.title}</strong>
            <p className="price">₹ {i.price} × {i.qty} = ₹ {i.price * i.qty}</p>
          </div>
          <div className="qty-controls">
            <button className="btn btn-sm" disabled={i.qty <= 1} onClick={() => dispatch(updateQty({ _id: i._id, qty: i.qty - 1 }))}>−</button>
            <span>{i.qty}</span>
            <button className="btn btn-sm" onClick={() => dispatch(updateQty({ _id: i._id, qty: i.qty + 1 }))}>+</button>
            <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeItem(i._id))}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-footer">
        <h3>Total: ₹ {total}</h3>
        <button className="btn" disabled={status === 'loading'} onClick={handleCheckout}>
          {status === 'loading' ? 'Checking out…' : 'Checkout'}
        </button>
      </div>
    </div>
  );
}
