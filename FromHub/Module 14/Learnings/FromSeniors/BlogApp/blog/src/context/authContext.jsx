import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/firebase"

export const AuthContext = createContext()

function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const change = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
       setLoading(false)
    })

    return () => change()

  }, []);

  return (
    <AuthContext.Provider value={{ user,loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider