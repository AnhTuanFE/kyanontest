import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Profile from "./component/Profile/Profile";
function App() {
  return (
    <Router>
      <div>
        <nav className="nav_Bar">
          <Link className="nav_item" to="/">
            Home
          </Link>
          <Link className="nav_item" to="/login">
            Login
          </Link>
          <Link className="nav_item" to="/profile">
            Profile
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
