import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "./context";
import logo from "./logo.svg";
import useAuthenticated from "./useAuthenticated";

const NavBar = (props) => {
  const isAuthenticated = useAuthenticated(props.firebase.auth);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <a href="/">Title Text</a>
      <div className="nav-links">
        <a href="/">Home</a>
        {!isAuthenticated && (
          <>
            <a href="/signup">Sign Up</a>
            <a href="/login">Login</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default withFirebase(NavBar);
