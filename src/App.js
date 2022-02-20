import "./App.css";
import { withFirebase } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuthenticated from "./useAuthenticated";
import { OpenCvProvider } from "opencv-react";

import HomePage from "./HomePage";
import Login from "./login";
import Workout from "./Workout";

function App(props) {
  const authenticated = useAuthenticated(props.firebase.auth);

  return (
    <OpenCvProvider>
      <Router>
        {authenticated ? (
          <Routes>
            <Route
              path="/"
              element={
                <p>
                  logged in
                  <button onClick={() => props.firebase.signOut()}>
                    Sign Out
                  </button>
                </p>
              }
            />
            <Route path="/workout" element={<Workout />} />
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
