import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="main-header">
      <div className="header-inner">
        <NavLink to="/" className="logo" id="logo-link">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">EngLearn</span>
        </NavLink>

        <nav className="nav" id="main-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Courses
          </NavLink>
          <NavLink to="/vocabulary" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Vocabulary
          </NavLink>
          <NavLink to="/practice" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Practice
          </NavLink>
        </nav>

        <div className="auth-buttons" id="auth-buttons">
          <button className="btn-login" id="login-btn">Login</button>
          <button className="btn-signup" id="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
