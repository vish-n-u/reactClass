import { useEffect, useState } from "react";
import { Link, RouterProvider } from "react-router-dom";

import About from "./aboutUs";
import Offer from "./offers";

const Header = () => {
  return (
    <>
      <a href="/" key={"h1"}>
        <img
          key={"h2"}
          id="logo"
          src="https://png.pngtree.com/templates/20180829/abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-png_29778.jpg"
          alt="logo.jpg"
        ></img>
      </a>
    </>
  );
};

const HeaderOtherElem = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log("useEffect");
  }, [loggedIn]);
  return (
    <div id="header" key={"hOE1"}>
      <Header />
      <div id="otherElem" key={"hOE2"}>
        <ul key={"hOE3"}>
          <Link to="/about">
            <li id="about" key={"hOE3.5"} className="otherElemMargin">
              About
            </li>
          </Link>
          <Link to="/offers">
            <li id="offers" key={"hOE5"} className="otherElemMargin">
              offers
            </li>
          </Link>
          <li id="help" key={"hOE6"} className="otherElemMargin">
            help
          </li>
          <Link to="/signUp">
            <li id="sign-in" key={"hOE7"} className="otherElemMargin">
              sign-in
            </li>
          </Link>
        </ul>
        <a
          id="cart"
          key={"hOE8"}
          href="https://google.com"
          className="otherElemMargin"
        >
          cart
        </a>
      </div>
      {console.log("render")}
      {loggedIn ? (
        <button
          id="logout"
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          LogOut
        </button>
      ) : (
        <button
          id="login"
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          LogIn
        </button>
      )}
    </div>
  );
};
export default HeaderOtherElem;
