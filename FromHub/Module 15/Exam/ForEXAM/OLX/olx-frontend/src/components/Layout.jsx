// Shared layout: navbar + the page content. Navbar READS auth and cart from the store —
// proof of global state: this component and CartPage never pass props to each other.
// Also the app's single Helmet mount: every route gets its own <title> (pending 6).
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { logout } from '../slices/authSlice';

const TITLES = {
  '/': 'OLX Clone — Buy & Sell',
  '/sell': 'Sell — OLX Clone',
  '/cart': 'Cart — OLX Clone',
};

export default function Layout() {
  const user = useSelector((s) => s.auth.user);
  const cartCount = useSelector((s) => s.cart.items.reduce((n, i) => n + i.qty, 0));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [confirmOut, setConfirmOut] = useState(false); // two-click logout, same friction as the delete buttons

  const handleLogout = () => {
    if (!confirmOut) return setConfirmOut(true);
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="app">
      <Helmet>
        <title>{TITLES[pathname] || 'OLX Clone'}</title>
        <meta name="description" content="Buy and sell locally: phones, electronics, vehicles, furniture." />
      </Helmet>
      <nav className="nav">
        <NavLink to="/" className="brand">OLX Clone</NavLink>
        <div className="nav-links">
          {user ? (
            <>
              <NavLink to="/sell">Sell</NavLink>
              <NavLink to="/cart">Cart ({cartCount})</NavLink>
              <span className="user-name">{user.name}</span>
              <button className="btn btn-sm" onClick={handleLogout} onBlur={() => setConfirmOut(false)}>
                {confirmOut ? 'Sure?' : 'Logout'}
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
