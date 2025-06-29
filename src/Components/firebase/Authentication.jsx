// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
 
} from "firebase/auth";

import auth from "./firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      if(current) {
        current.getIdToken().then((idToken) => {
          setToken(idToken);
        });
      }
      setUser(current);
    });
    return () => unsubscribe();
  }, []);

 const authInfo = {
    registerUser,
    loginUser,
    user,
    logout,
    token
  };



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
