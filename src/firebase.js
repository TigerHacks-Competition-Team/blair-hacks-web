import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import "firebase/storage"
import * as firebaseui from 'firebaseui'

const config = {
    apiKey: "AIzaSyCtJegtvkjMowl1PO-HsfIqf1zXOZF-5W4",
    authDomain: "blair-hacks-fb550.firebaseapp.com",
    projectId: "blair-hacks-fb550",
    storageBucket: "blair-hacks-fb550.appspot.com",
    messagingSenderId: "389021404256",
    appId: "1:389021404256:web:69324809bcaffc4abdc705"
}

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(config)
    } else {
      app.app() // if already initialized, use that one
    }

    this.auth = app.auth()
    this.firestore = app.firestore()
    this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.auth)
    this.app = app
    this.sendDataToServer = (data) => {
        if (!this.auth.W) {
            window.location.href.replace("login")
        } else {
            this.firestore.collection("UserData/"+this.auth.W+"/workouts").add(data)
        }
    }
    this.getDataFromServer = async () => {
        if (!this.auth.W) {
            window.location.href.replace("login")
        } else {
            return this.firestore.collection("UserData/"+this.auth.W+"/workouts").get()
        }
    }
  }
}
export default Firebase