import React from "react";
const ReactDOM = require("react-dom/client");

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

import HeaderOtherElem from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/aboutUs";
import Offer from "./src/components/offers";
import Menu from "./src/components/Menu";
import Signup from "./src/components/signup";
import Profile from "./src/components/profile";

// ;\restaurants\chicking-kuzhupalli-kavu-rd-perumbavoor-kochi-123179

const AppLayout = () => {
  return (
    <>
      <HeaderOtherElem key={"header"} /> <Outlet />
      <Footer key={"Footer"} />
    </>
  );
};

// console.log(id, useParams());

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/offers",
        element: <Offer />,
      },
      {
        path: "/:id",

        element: <Menu />,
      },
      { path: "/signUp", element: <Signup /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
