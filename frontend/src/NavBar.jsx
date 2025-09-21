// NavBar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // reuse your existing CSS
import logo from "./assets/Logo-Icon-2.png";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        {/* <span>CivicPulse Hub</span> */}
      </div>
      <ul className="nav-links">
        <li>
          <span className="nav-link-text" onClick={() => navigate("/")}>Home</span>
        </li>
        <li>
          <span className="nav-link-text" onClick={() => navigate("/services")}>Services</span>
        </li>
        <li>
          <span className="nav-link-text" onClick={() => navigate("/contact")}>Contact</span>
        </li>
        <li>
          <span className="nav-link-text" onClick={() => navigate("/help")}>Help</span>
        </li>
        <li>
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
        </li>
      </ul>
    </nav>
  );
}
