import React, { useEffect, useState } from "react";
// import axios from "axios";
import { auth, signOut } from "./firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsbscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsbscribe();
  }, []);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:5000/profile", {
  //           withCredentials: true,
  //         });
  //         setUser(response.data);
  //       } catch (error) {
  //         console.error("Error fetching user:", error);
  //       }
  //     };

  //     fetchUser();
  //   }, []);

  //   const handleLogout = () => {
  //     window.open("http://localhost:5000/logout", "_self");
  //   };
  console.log(user, "user data: ");

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error while logging out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.photoURL} alt="Profile" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
          <button onClick={navigate("/")}>Login again</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
