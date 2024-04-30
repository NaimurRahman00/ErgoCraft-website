import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../Firebase/firebase.init";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const ContextData = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Registration
  const register = (email, password, name, photoURL) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result) {

          updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              setCurrentUser({ email, name, photoURL });
              localStorage.setItem(
                "user",
                JSON.stringify({ email, name, photoURL })
              );
              // Display success message
              success("Registration successful!");
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        }
      })
      .catch((error) => {
        if (error) {
          notify("Sorry! This email is already in use!");
        }
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Login with email
  const login = (email, password, e) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        success("Login successful!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        notify("Invalid email or password!");
      })
      .finally(() => setLoading(false));
  };

  // Login with Google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  // Login with GitHub
  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => signInWithPopup(auth, githubProvider);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Log out
  const logOut = () => {
    return signOut(auth);
  };

  // Toastify
  const notify = (error) => {
    toast.error(error, {
      position: "top-right",
    });
  };

  const success = (success) => {
    toast.success(success, {
      position: "top-right",
    });
  };

  const authInfo = {
    login,
    register,
    currentUser,
    logOut,
    notify,
    success,
    loading,
    signInWithGoogle,
    signInWithGithub,
  };

  return (
    <ContextData.Provider value={authInfo}>{children}</ContextData.Provider>
  );
};

export default AuthProvider;
