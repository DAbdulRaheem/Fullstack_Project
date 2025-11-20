import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file here

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side links */}
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/cart" className="nav-item">Cart 🛒</Link>
      </div>

      {/* Right side links (Auth) */}
      <div className="nav-auth">
        <Link to="/login" className="nav-item login-btn">Login</Link>
        <Link to="/register" className="nav-item register-btn">Register</Link>
      </div>
    </nav>
  );
}