import React from "react";
import { auth, provider , signInWithPopup } from "./firebase";

const Login = () => {
  //   const handleLogin = () => {
  //     window.open("http://localhost:5000/auth/google", "_self");
  //   };

  const handleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
