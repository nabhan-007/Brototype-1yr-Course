// No token in the store → not logged in → bounce to /login instead of showing the guarded page.
// (Also kills the M14 pendings item: "user should not navigate back to login after successful login" —
//  Login page has the mirror-image guard.)
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
  const token = useSelector((s) => s.auth.token);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
