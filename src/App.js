import "./App.css";
import { withFirebase } from "./context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useAuthenticated from "./useAuthenticated";
import { OpenCvProvider } from "opencv-react";

import HomePage from "./HomePage";
import Login from "./login";
import Workout from "./Workout";
import Logout from "./logout";
import History from "./History";

function App(props) {
  const authenticated = useAuthenticated(props.firebase.auth);

  return (
    <OpenCvProvider>
      <Router>
        {authenticated ? (
          <Routes>
            <Route path="/" element={<Workout />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/history" element={<History />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
      </Router>
    </OpenCvProvider>
  );
}

export default withFirebase(App);
