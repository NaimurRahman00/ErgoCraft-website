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
          // Update user's display name and photo URL
          updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              // Update currentUser state with the registered user's data
              setCurrentUser({ email, name, photoURL });
              // Store user data in localStorage
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

// theme change
// const [theme, setTheme] = useState(
//   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
// );

// const handleTogglelight = (e) => {
//   if (e.target.checked) {
//     setTheme("dark");
//   } else {
//     setTheme("light");
//   }
// };

// useEffect(() => {
//   localStorage.setItem("theme", theme);
//   const localTheme = localStorage.getItem("theme");
//   document.querySelector("html").setAttribute("data-theme", localTheme);
// }, [theme]);
// checked={theme === "light" ? false : true}
//             onChange={handleTogglelight}

// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import auth from "../Firebase/firebase.init";
// import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// export const ContextData = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userPhoto, setUserPhoto] = useState(null);
//   const [userName, setUserName] = useState(null);
//   const [userEmail, setUserEmail] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Registration
//   const register = (email, password, name, photoURL) => {
//     setLoading(true)
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         if (result) {
//           success("Registration successful!");
//           (name, photoURL) => {
//             updateProfile(auth.currentUser, {
//               displayName: name,
//               photoURL: photoURL,
//             })
//               .then(() => {
//                 setUserName(name);
//               })
//               .catch(() => {});
//           };

//         }
//         // setCurrentUser(result.user);
//         setUserPhoto(photoURL);
//         setUserName(name);
//         setUserEmail(email);
//         fetch("http://localhost:5000/user", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(userEmail),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//           });
//       })
//       .catch((error) => {
//         if (error) {
//           notify("Sorry! This email is already in use!");
//         }
//         console.log(error.message);
//       });
//   };
//   // Login with email
//   const login = (email, password, e) => {
//     setLoading(false)
//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         console.log(result);
//         success("Login successful!");
//         e.target.reset();
//       })
//       .catch((error) => {
//         console.log(error);
//         notify("Invalid email or password!");
//       });
//     setLoading(false);
//   };

//   // login with google
//   const googleProvider = new GoogleAuthProvider();

//   const signInWithGoogle = () => {
//     setLoading(false);
//     return signInWithPopup(auth, googleProvider);
//   };

//   // login with github
//   const githubProvider = new GithubAuthProvider();

//   const signInWithGithub = () => {
//     setLoading(false)
//     return signInWithPopup(auth, githubProvider);
//   };

//   // Observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       // console.log(user.email)
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // Log out
//   const logOut = () => {
//     return signOut(auth);
//   };
//   // Toastify
//   const notify = (error) => {
//     toast.error(error, {
//       position: "top-right",
//     });
//   };

//   const success = (success) => {
//     toast.success(success, {
//       position: "top-right",
//     });
//   };

//   const authInfo = {
//     login,
//     register,
//     currentUser,
//     logOut,
//     notify,
//     success,
//     loading,
//     userPhoto,
//     userName,
//     userEmail,
//     signInWithGoogle,
//     signInWithGithub,
//   };

//   return (
//     <ContextData.Provider value={authInfo}>{children}</ContextData.Provider>
//   );
// };

// export default AuthProvider;
