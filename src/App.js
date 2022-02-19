import logo from "./logo.svg";
import "./App.css";
import { withFirebase } from "./context";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuthenticated from "./useAuthenticated";

function App(props) {
  const authenticated = useAuthenticated(props.firebase.auth);

  return (
    <Router>
      {authenticated ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<p>hello world</p>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<p>hello world</p>} />
        </Routes>
      )}
    </Router>
  );
}

export default withFirebase(App);
