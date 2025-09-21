import { useState } from "react";
import { Link } from "react-router-dom";
import eyeOpen from "./assets/eye-open.png";
import eyeClose from "./assets/eye-close.png";
import RoleSelect from "./RoleSelect";
import NavBar from "./NavBar"; // import correctly with casing

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(""); 
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.text();
      setMessage(data);
    } catch {
      setMessage("Login Unsuccessful");
    }
  };

  return (
    <div>
      <NavBar /> {/* <-- Make sure NavBar is at the top */}
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <RoleSelect value={role} onChange={setRole} />
          </div>
          <div className="form-group password-group">
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="button" className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
              <img src={showPassword ? eyeOpen : eyeClose} alt="toggle password" />
            </button>
          </div>
          <button type="submit" className="btn-submit">Login</button>
        </form>
        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        <p className="switch-link">New User? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
