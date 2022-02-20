import React from "react";
import { withFirebase } from "./context";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import "./App.css";
import NavBar from "./NavBar";

const Login = (props) => {
  props.firebase.ui.start("#firebaseui-auth-container", {
    signInOptions: [props.firebase.app.auth.EmailAuthProvider.PROVIDER_ID],
    signInSuccessUrl: "/",
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        window.location.href = "/"
        props.firebase.addUserDoc(authResult.currentUser.uid);
      },
      signInFailure: function (error) {
        console.log(error);
      },
    },
  });

  return (
    <div>
      <NavBar />
      <div id="login-container">
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  );
};

export default withFirebase(Login);
