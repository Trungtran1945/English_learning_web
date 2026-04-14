import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">🚀 Start Learning Today</span>
            <h1 className="hero-title">
              Master English with
              <span className="gradient-text"> Smart Learning</span>
            </h1>
            <p className="hero-subtitle">
              Improve your vocabulary, listening, and speaking skills with 
              interactive lessons, AI-powered tools, and personalized practice sessions.
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn-primary" id="get-started-btn">
                Get Started Free
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/about-us" className="btn-secondary" id="learn-more-btn">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Learners</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Lessons</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="floating-card card-vocab">
                <span className="card-emoji">📘</span>
                <span className="card-label">Vocabulary</span>
                <span className="card-count">1,200+ words</span>
              </div>
              <div className="floating-card card-listen">
                <span className="card-emoji">🎧</span>
                <span className="card-label">Listening</span>
                <span className="card-count">300+ audios</span>
              </div>
              <div className="floating-card card-speak">
                <span className="card-emoji">🗣️</span>
                <span className="card-label">Speaking</span>
                <span className="card-count">AI Powered</span>
              </div>
              <div className="floating-card card-quiz">
                <span className="card-emoji">📝</span>
                <span className="card-label">Quizzes</span>
                <span className="card-count">500+ tests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features-section">
        <div className="section-header">
          <span className="section-badge">✨ Features</span>
          <h2 className="section-title">Why Choose EngLearn?</h2>
          <p className="section-subtitle">
            Everything you need to master English, all in one place.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card" id="feature-vocabulary">
            <div className="feature-icon">📘</div>
            <h3>Smart Vocabulary</h3>
            <p>Learn new words with flashcards, spaced repetition, and context-based examples for lasting memory.</p>
          </div>

          <div className="feature-card" id="feature-listening">
            <div className="feature-icon">🎧</div>
            <h3>Real Listening</h3>
            <p>Practice listening with native audio from real conversations, news, and everyday scenarios.</p>
          </div>

          <div className="feature-card" id="feature-speaking">
            <div className="feature-icon">🗣️</div>
            <h3>AI Speaking Coach</h3>
            <p>Improve pronunciation with real-time AI feedback and speech recognition technology.</p>
          </div>

          <div className="feature-card" id="feature-practice">
            <div className="feature-icon">📝</div>
            <h3>Interactive Quizzes</h3>
            <p>Test your knowledge with adaptive quizzes that adjust to your skill level automatically.</p>
          </div>

          <div className="feature-card" id="feature-progress">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your learning journey with detailed analytics, streaks, and achievement badges.</p>
          </div>

          <div className="feature-card" id="feature-community">
            <div className="feature-icon">🌍</div>
            <h3>Global Community</h3>
            <p>Connect with learners worldwide, join study groups, and practice together in real-time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your English Journey?</h2>
          <p>Join thousands of learners who are already improving their English every day.</p>
          <Link to="/courses" className="btn-primary btn-large">
            Start Learning Now →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
