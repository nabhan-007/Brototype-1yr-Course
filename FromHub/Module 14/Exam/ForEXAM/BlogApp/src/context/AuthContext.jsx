// Topic 2: Context API — global auth state shared across all pages
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// 1. Create the context
const AuthContext = createContext(null);

// 2. Provider — holds the state every page needs
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // logged-in user or null
  const [loading, setLoading] = useState(true); // auth check not finished yet

  // Firebase tells us the real auth state (survives page refresh)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe; // cleanup on unmount (M13 lifecycle)
  }, []);

  // useCallback: these functions keep the same identity across renders,
  // so they never force extra re-renders of context consumers
  const signup = useCallback(
    (email, password) => createUserWithEmailAndPassword(auth, email, password),
    []
  );
  const login = useCallback(
    (email, password) => signInWithEmailAndPassword(auth, email, password),
    []
  );
  const logout = useCallback(() => signOut(auth), []);

  // useMemo: keep the value object stable — consumers re-render only when user/loading change
  const value = useMemo(
    () => ({ user, loading, signup, login, logout }),
    [user, loading, signup, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

// 3. Custom hook (topic 3) — one line instead of useContext(AuthContext) everywhere
export function useAuth() {
  return useContext(AuthContext);
}
