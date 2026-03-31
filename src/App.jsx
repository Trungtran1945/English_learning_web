import "./App.css";

function App() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="logo">EngLearn</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Vocabulary</a>
          <a href="#">Practice</a>
        </nav>
        <div className="auth">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Learn English Smarter</h1>
          <p>
            Improve your vocabulary, listening, and speaking skills with
            interactive lessons and AI-powered tools.
          </p>
          <button className="start-btn">Get Started</button>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="learning"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-list">
          <div className="card">
            <h3>📘 Vocabulary</h3>
            <p>Learn new words with flashcards and smart repetition.</p>
          </div>

          <div className="card">
            <h3>🎧 Listening</h3>
            <p>Practice listening with real native audio.</p>
          </div>

          <div className="card">
            <h3>🗣 Speaking</h3>
            <p>Improve pronunciation with AI feedback.</p>
          </div>

          <div className="card">
            <h3>📝 Practice</h3>
            <p>Test your knowledge with quizzes and exercises.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 EngLearn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
