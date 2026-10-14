// Login / Signup page — Firebase Auth (email/password)
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // topic 2: useNavigate
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, signup, login } = useAuth(); // topic 2: useContext via custom hook
  const navigate = useNavigate(); // programmatic navigation

  // already logged in? jump straight to the blog list
  if (user) {
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault(); // same as vanilla JS — stop the page reload
    setError("");
    try {
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate("/"); // go to blog list after success
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    }
  }

  return (
    <div className="card">
      <h2>{isSignup ? "Sign up" : "Log in"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <button type="submit">{isSignup ? "Create account" : "Log in"}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="switch">
        {isSignup ? "Already have an account?" : "New here?"}{" "}
        <button className="link" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Log in" : "Sign up"}
        </button>
      </p>
    </div>
  );
}
