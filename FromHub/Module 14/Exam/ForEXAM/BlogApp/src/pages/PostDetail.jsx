// Post detail — full content of one post (topic 1: dynamic route + useParams)
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function PostDetail() {
  const { id } = useParams(); // same hook as AddEditBlog — one id, one doc
  const navigate = useNavigate();
  const [post, setPost] = useState(null); // stays null if the doc doesn't exist
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoc(doc(db, "posts", id)).then((snap) => {
      if (snap.exists()) setPost({ id: snap.id, ...snap.data() });
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="center">Loading post…</p>;
  if (!post)
    return (
      <p className="center">
        Post not found.{" "}
        <button className="link" onClick={() => navigate("/")}>
          Back to list
        </button>
      </p>
    );

  return (
    <article className="card post">
      <h2>{post.title}</h2>
      <p className="meta">
        by {post.author} ·{" "}
        {post.createdAt ? post.createdAt.toDate().toLocaleDateString() : ""}
      </p>
      <p className="content-full">{post.content}</p>
      <div className="actions">
        <button onClick={() => navigate("/")}>← Back to list</button>
      </div>
    </article>
  );
}
