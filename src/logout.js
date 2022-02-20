import React from "react";
import { withFirebase } from "./context";

// Add pages down here
function Logout(props) {
    props.firebase.auth.signOut().then(() => {
        window.location.href = ("/")
    })

    return null
}

export default withFirebase(Logout);
