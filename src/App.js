import "./App.css";
import { withFirebase } from "./context";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useAuthenticated from "./useAuthenticated";
import { OpenCvProvider } from "opencv-react";

import HomePage from "./HomePage";
import Login from "./login";
import Workout from "./Workout";
import Logout from "./logout";

function App(props) {
  const authenticated = useAuthenticated(props.firebase.auth);

  return (
    <OpenCvProvider>
      <Router>
        {authenticated ? (
          <Routes>
            <Route path="/workout" element={<Workout />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/workout" element={<Workout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/home" element={<HomePage />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        )}
      </Router>
    </OpenCvProvider>
  );
}

export default withFirebase(App);
