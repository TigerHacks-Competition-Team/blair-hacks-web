import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "./context";
import logo from "./logo.svg";
import useAuthenticated from "./useAuthenticated";

const NavBar = (props) => {
  const authenticated = useAuthenticated(props.firebase.auth);
  
  console.log(authenticated)

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <a href="/">Title Text</a>
      <div className="nav-links">
        <a href="/">Home</a>
        {!authenticated ? (
          <>
            <a href="/login">Login/Signup</a>
          </>
        ) : (
          <>
            <a href="/logout">Log out</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default withFirebase(NavBar);
