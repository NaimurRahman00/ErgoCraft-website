import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../Firebase/firebase.init";

export const ContextData = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registration
  const register = (email, password, name, photoURL) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result) {
          success("Registration successful!");
        }
        setUserPhoto(photoURL);
        setUserName(name);
        setUserEmail(email);
        console.log(result.user)
      })
      .catch((error) => {
        if (error) {
          notify("Sorry! This email is already in use!");
        }
        console.log(error.message)
      });
  };
  // Login with email
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result);
      success("Login successful!");
    })
    .catch((error) => {
      console.log(error)
        notify("Invalid email or password!");
    });
    setLoading(false);
  };

  // Update profile
  // const update = (name, photoURL, setOpenModal2) => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoURL,
  //   })
  //     .then(() => {
  //       setUserName(name);
  //       success("Profile updated");
  //       setOpenModal2(false);
  //     })
  //     .catch(() => {});
  // };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
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


  // user email 
  // const addDataCardEmail = email => {
  // }

  // Modal
  // const [openModal, setOpenModal] = useState(false);
  // useEffect(() => {
  //   if (openModal) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflowY = "auto";
  //   }
  //   return () => (document.body.style.overflow = "auto");
  // }, [openModal]);

  const authInfo = {
    login,
    register,
    currentUser,
    logOut,
    notify,
    success,
    loading,
    userPhoto,
    userName,
    userEmail,
  };

  return (
    <ContextData.Provider value={authInfo}>{children}</ContextData.Provider>
  );
};

export default AuthProvider;
