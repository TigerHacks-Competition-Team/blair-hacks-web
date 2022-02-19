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
  );
}

// Add pages down here
function HomePage() {
  return (
    <div>
      <h2>Epic Home Page</h2>
      <a href="/login">Login</a>
    </div>
  );
}
function LoginPage() {
  return (
    <div>
      <Login />
      <a href="/">Home</a>
    </div>
  )
}

export default withFirebase(App);
