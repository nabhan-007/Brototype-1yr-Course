// Layout with nested routing — topic 1: Outlet
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">📝 Blog List</NavLink>
        <NavLink to="/add">➕ Add Post</NavLink>
        <span className="spacer" />
        <span className="who">{user?.email}</span>
        <button className="link" onClick={logout}>
          Logout
        </button>
      </nav>
      {/* child route renders here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
