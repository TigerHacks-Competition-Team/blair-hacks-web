import logo from "./logo.svg";
import "./App.css";
import { withFirebase } from "./context";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuthenticated from "./useAuthenticated";
import BPM from "./BPM";
import HeartRate from "./HeartRate";
import { OpenCvProvider } from "opencv-react";

function App(props) {
  const authenticated = useAuthenticated(props.firebase.auth);

  return (
    <OpenCvProvider>
      <Router>
        {authenticated ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<p>hello world</p>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HeartRate />} />
          </Routes>
        )}
      </Router>
    </OpenCvProvider>
  );
}

export default withFirebase(App);
