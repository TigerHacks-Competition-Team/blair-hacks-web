import React from "react";
import { withFirebase } from "./context";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import "./App.css";

const Login = (props) => {
  props.firebase.ui.start("#firebaseui-auth-container", {
    signInOptions: [props.firebase.app.auth.EmailAuthProvider.PROVIDER_ID],
    signInSuccessUrl: "/",
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        props.firebase.addUserDoc(authResult.currentUser.uid);
      },
      signInFailure: function (error) {
        console.log(error);
      },
    },
  });

  return (
    <div>
      <div id="navbar" className="nav">
        <p>Temporary Project Name</p>
        <button
          className="loginButton"
          onClick={(e) => {
            window.location.href = "/";
          }}
        >
          Home
        </button>
      </div>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default withFirebase(Login);
