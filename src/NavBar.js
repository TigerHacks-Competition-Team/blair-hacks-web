import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "./context";
import logo from "./logo.svg";
import useAuthenticated from "./useAuthenticated";

const NavBar = (props) => {
  const authenticated = useAuthenticated(props.firebase.auth);

  console.log(authenticated);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <a href="/about">Title Text</a>
      <div className="nav-links">
        <a href="/about">Home</a>

        {!authenticated ? (
          <>
            <a href="/login">Log In/Signup</a>
          </>
        ) : (
          <>
            <a href="/history">History</a>
            <a href="/workout">Work Out</a>
            <a href="/logout">Log out</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default withFirebase(NavBar);
