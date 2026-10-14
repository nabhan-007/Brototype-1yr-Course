// Add / Edit in one page — topic 1: dynamic path + route params
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"; // useParams!
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function AddEditBlog() {
  // /add → no id (add mode)   |   /edit/:id → id present (edit mode)
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  // edit mode → load the existing post once on mount
  useEffect(() => {
    if (!isEdit) return;
    getDoc(doc(db, "posts", id)).then((snap) => {
      if (!snap.exists()) {
        setError("Post not found");
        return;
      }
      const data = snap.data();
      if (data.authorId !== user.uid) {
        setError("You can only edit your own posts");
        return;
      }
      setTitle(data.title);
      setContent(data.content);
    });
  }, [id, isEdit, user.uid]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      if (isEdit) {
        await updateDoc(doc(db, "posts", id), { title, content });
      } else {
        await addDoc(collection(db, "posts"), {
          title,
          content,
          author: user.email,
          authorId: user.uid,
          createdAt: serverTimestamp(),
        });
      }
      navigate("/"); // back to the list
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
  }

  return (
    <div className="card">
      <h2>{isEdit ? "Edit post" : "Add post"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your post…"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">{isEdit ? "Save changes" : "Publish"}</button>
        <button type="button" className="link" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
