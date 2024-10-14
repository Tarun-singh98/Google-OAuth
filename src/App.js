import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";



const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
  // return <div>hiii</div>
};

export default App;
