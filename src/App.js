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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
      </Router>
    </OpenCvProvider>
  );
}

function NavBar() {
  return (
    <nav class="navbar">
      <img src={logo} alt="Logo" />
      <a href="/">Title Text</a>
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="signup">Sign Up</a>
        <a href="login">Login</a>
      </div>
    </nav>
  );
}

// Add pages down here
function HomePage() {
  return (
      <div>
        <NavBar/>
      </div>
  );
}
function LoginPage() {
  return (
    <div>
      <div id="navbar" class="nav">
        <p>
          Temporary Project Name
        </p>
        <button class="loginButton" onClick={(e) => {window.location.href="/"}}>Home</button>
      </div>
      <Login />
    </div>
  )
}

export default withFirebase(App);
