
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root"; //import from Root jsx file
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Books from "./Components/Books/Books";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookDetails from "./Components/BookDetails/BookDetails";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Support from "./Components/Support/Support";
import GetinTouch from "./Components/GetinTouch/GetinTouch";
import PrivacyPolicy from "./Components/Privacy & Policy/Privacy&Policy";
import Profile from "./Components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/Books",
        element: <Books></Books>,
      },
      { path: "/Books/:id", 
        element: <BookDetails /> },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/Support",
        element: <Support/>,
      },
      {
        path: "/GetinTouch",
        element: <GetinTouch/>,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy/>
      },
      {
        path: "/Profile",
        element: <Profile/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
