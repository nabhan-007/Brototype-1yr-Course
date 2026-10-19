// Blog List — reads posts live from Firestore, edit/delete buttons
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  // live subscription — Firestore pushes updates, no manual refetch
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsubscribe; // stop listening when page unmounts
  }, []);

  async function handleDelete(id) {
    if (!confirm("Delete this post?")) return; // M13 lesson: confirm before delete
    await deleteDoc(doc(db, "posts", id));
  }

  if (loading) return <p className="center">Loading posts…</p>;

  // Fragment (<>): the note and the grid share a parent without an extra div
  return (
    <>
      {posts.length === 0 && <p className="center">No posts yet — add one!</p>}
      <div className="post-grid">
        {posts.map((post) => (
          <article className="card post" key={post.id}>
            <Link to={`/post/${post.id}`} className="post-link">
              <h3>{post.title}</h3>
              <p className="meta">
                by {post.author} ·{" "}
                {post.createdAt
                  ? post.createdAt.toDate().toLocaleDateString()
                  : ""}
              </p>
              <p className="content-preview">{post.content}</p>
            </Link>
            {/* only the owner can edit/delete */}
            {post.authorId === user.uid && (
              <div className="actions">
                <button onClick={() => navigate(`/edit/${post.id}`)}>
                  Edit
                </button>
                <button
                  className="danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
