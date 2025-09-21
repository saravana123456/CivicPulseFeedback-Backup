import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="src\assets\Logo-Icon-2.png" alt="logo" />
          {/* <span>CivicPulse Hub</span> */}
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Help</a></li>
          <li>
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
  <div className="hero-box">
    <h1>
      Civic Pulse Smart City Grievance <br /> Feedback Management Portal
    </h1>
    <p>
      CivicPulse is a smart city portal where citizens can report grievances,
      track progress, <br />
      and give feedback while authorities manage issues efficiently in
      real-time.
    </p>
    <div className="cta-buttons">
      <button className="register-btn" onClick={() => navigate("/register")}>
        Register
      </button>
    </div>
  </div>
</header>
    </div>
  );
}

export default Home;