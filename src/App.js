import logo from './logo.svg';
import './App.css'
import {withFirebase} from './context'
import Login from './login';
import {BrowserRouter as Router, Switch, Route} from 'react-browser-dom';
import useAuthenticated from './useAuthenticated';

function App(props) {
  const authenticated = useAuthenticated(props.firebase.auth)
  
  return (
    <Router>
      {authenticated && authenticated.emailVerified ? (
        <Switch>
          
        </Switch>
      ) : (
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/"></Route>
        </Switch>
      )}
    </Router>
  );
}

export default withFirebase(App);