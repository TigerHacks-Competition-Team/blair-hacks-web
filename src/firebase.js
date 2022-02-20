import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import * as firebaseui from "firebaseui";

const config = {
  apiKey: "AIzaSyCtJegtvkjMowl1PO-HsfIqf1zXOZF-5W4",
  authDomain: "blair-hacks-fb550.firebaseapp.com",
  projectId: "blair-hacks-fb550",
  storageBucket: "blair-hacks-fb550.appspot.com",
  messagingSenderId: "389021404256",
  appId: "1:389021404256:web:69324809bcaffc4abdc705",
};

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config);
    } else {
      app.app(); // if already initialized, use that one
    }

    this.auth = app.auth();
    this.firestore = app.firestore();
    this.ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.auth);
    this.app = app;
  }

  signOut() {
    return this.auth.signOut();
  }

  addUserDoc() {
    return this.firestore
      .collection("users")
      .doc(this.auth.currentUser.uid)
      .set({ lastWorkout: Date.now() }, { merge: true });
  }

  updateData(data) {
    return this.firestore
      .collection("users")
      .doc(this.auth.currentUser.uid)
      .update({
        workouts: app.firestore.FieldValue.arrayUnion(data),
      });
  }

  getData() {
    return this.firestore
      .collection("users")
      .doc(this.auth.currentUser.uid)
      .get();
  }
}
export default Firebase;
