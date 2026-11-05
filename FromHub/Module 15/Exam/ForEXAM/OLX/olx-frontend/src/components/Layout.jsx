// Shared layout: navbar + the page content. Navbar READS auth and cart from the store —
// proof of global state: this component and CartPage never pass props to each other.
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';

export default function Layout() {
  const user = useSelector((s) => s.auth.user);
  const cartCount = useSelector((s) => s.cart.items.reduce((n, i) => n + i.qty, 0));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="app">
      <nav className="nav">
        <NavLink to="/" className="brand">OLX Clone</NavLink>
        <div className="nav-links">
          {user ? (
            <>
              <NavLink to="/sell">Sell</NavLink>
              <NavLink to="/cart">Cart ({cartCount})</NavLink>
              <span className="user-name">{user.name}</span>
              <button className="btn btn-sm" onClick={handleLogout}>Logout</button>
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
