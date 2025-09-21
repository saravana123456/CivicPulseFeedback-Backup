import { useState } from "react";
import { Link } from "react-router-dom";
import eyeOpen from "./assets/eye-open.png";
import eyeClose from "./assets/eye-close.png";
import RoleSelect from "./RoleSelect";
import NavBar from "./NavBar"; // match exact file name

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState(""); // placeholder shows "Select"
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, phone, address, role, password }),
      });
      const data = await res.text();
      setMessage(data);
    } catch {
      setMessage("Registration failed");
    }
  };

  return (
    <div>
      <NavBar /> {/* Add navbar on top */}

      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <RoleSelect value={role} onChange={setRole} />
          </div>

          <div className="form-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={showPassword ? eyeOpen : eyeClose} alt="toggle password" />
            </button>
          </div>

          <div className="form-group password-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <img src={showConfirmPassword ? eyeOpen : eyeClose} alt="toggle confirm password" />
            </button>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required />
          </div>
          <button type="submit" className="btn-submit">Register</button>
        </form>
        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        <p className="switch-link">Already registered? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
