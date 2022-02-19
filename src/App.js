import logo from './logo.svg';
import './App.css'
import {withFirebase} from './context'
import Login from './login';
import Firebase from './firebase.js';
import FirebaseContext from './context.js';

function App(props) {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Login />
    </FirebaseContext.Provider>
  );
}

export default App;