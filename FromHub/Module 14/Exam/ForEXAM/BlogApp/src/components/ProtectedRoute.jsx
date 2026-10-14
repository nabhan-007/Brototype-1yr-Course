// Route guard — only logged-in users may see the wrapped pages
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p className="center">Checking login…</p>;

  // not logged in → send to /login (topic 1: programmatic navigation)
  if (!user) return <Navigate to="/login" replace />;

  return children; // logged in → show the real page
}
