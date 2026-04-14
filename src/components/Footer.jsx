import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🎓</span>
              <span className="footer-logo-text">EngLearn</span>
            </div>
            <p className="footer-description">
              Your smart companion for mastering English. Learn vocabulary, improve listening, 
              and practice speaking with AI-powered tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/vocabulary">Vocabulary</Link></li>
              <li><Link to="/practice">Practice</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>📧 hello@englearn.com</li>
              <li>📱 +84 123 456 789</li>
              <li>📍 Ho Chi Minh City, Vietnam</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 EngLearn. All rights reserved. Made with 💜 for learners.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
