import React from 'react';
import { withFirebase } from './context';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const Login = (props) => {
    props.firebase.ui.start('#firebaseui-auth-container', {
        signInOptions: [
            props.firebase.app.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/home',
    });

    return (
        <div id='firebaseui-auth-container'></div>
    );
}

export default withFirebase(Login);