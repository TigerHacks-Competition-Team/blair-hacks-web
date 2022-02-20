import "./App.css";
import { withFirebase } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuthenticated from "./useAuthenticated";
import { OpenCvProvider } from "opencv-react";

import HomePage from "./HomePage";
import Login from "./login";

function App(props) {
  const authenticated = useAuthenticated(props.firebase.auth);

  return (
    <OpenCvProvider>
      <Router>
        {authenticated ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
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
