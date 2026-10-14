// Router config — topic 1: routes, nested routing, dynamic path
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import BlogList from "./pages/BlogList";
import AddEditBlog from "./pages/AddEditBlog";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* everything under Layout is protected + shares the navbar */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<BlogList />} /> {/* "/" */}
        <Route path="/add" element={<AddEditBlog />} />
        <Route path="/edit/:id" element={<AddEditBlog />} />{" "}
        {/* dynamic path */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
