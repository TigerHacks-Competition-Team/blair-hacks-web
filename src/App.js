import logo from "./logo.svg";
import wave from "./wave.svg";
import "./App.css";
import { withFirebase } from "./context";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuthenticated from "./useAuthenticated";
import BPM from "./BPM";
import HeartRate from "./HeartRate";
import { OpenCvProvider } from "opencv-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

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
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <a href="/">Title Text</a>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/signup">Sign Up</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}

// Add pages down here
function HomePage() {
  AOS.init({offset: 350});
  return (
      <div>
        <NavBar/>
        <div className="main-page">

          <div className="blurb-left">
            <h1 className="blurb-title">Manage Health</h1>
            <p className="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="blurb-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <img src={wave} alt="" className="wave"/>

          <div className="blurb-right" data-aos="fade-up">
            <h1 className="blurb-title">Manage Health</h1>
            <p className="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="graph" data-aos="fade-up">

          </div>

          <div className="blob" data-aos="fade-up">
            <div className="blob-content">
            <p className="blurb-title">Obesity</p>   
            <p className="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <div className="blurb-left blurb-left-2" data-aos="fade-up">
            <h1 className="blurb-title">Manage Health</h1>
            <p className="blurb-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="bottom-curve">
            <div id="signup" data-aos="fade-up">
              <p className="signup-text">Sign Up Now</p>
            </div>
          </div>

        </div>
      </div>
  );
}
function LoginPage() {
  return (
    <div>
      <div id="navbar" className="nav">
        <p>
          Temporary Project Name
        </p>
        <button className="loginButton" onClick={(e) => {window.location.href="/"}}>Home</button>
      </div>
      <Login />
    </div>
  )
}

export default withFirebase(App);
