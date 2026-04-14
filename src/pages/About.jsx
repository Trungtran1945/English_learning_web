import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero-bg">
          <div className="about-shape about-shape-1"></div>
          <div className="about-shape about-shape-2"></div>
        </div>
        <div className="about-hero-content">
          <span className="section-badge">👋 About Us</span>
          <h1 className="about-hero-title">We Make Learning English <span className="gradient-text">Fun & Effective</span></h1>
          <p className="about-hero-subtitle">
            EngLearn was founded with a simple mission: to make high-quality English education 
            accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission" id="about-mission">
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower millions of learners worldwide with innovative, AI-powered English learning tools that adapt to each individual's needs and pace.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>A world where language barriers no longer limit opportunities. We envision making fluent English communication accessible to everyone.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">💜</div>
            <h3>Our Values</h3>
            <p>Innovation, inclusivity, and excellence drive everything we do. We believe that learning should be enjoyable, personal, and impactful.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team" id="about-team">
        <div className="section-header">
          <span className="section-badge">👥 Our Team</span>
          <h2 className="section-title">Meet the People Behind EngLearn</h2>
          <p className="section-subtitle">A passionate team of educators, engineers, and designers.</p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👩‍💻</div>
            <h4>Nguyễn Minh Anh</h4>
            <span className="team-role">Founder & CEO</span>
            <p>10+ years in EdTech and language education.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🔬</div>
            <h4>Trần Văn Hùng</h4>
            <span className="team-role">CTO</span>
            <p>AI/ML expert passionate about education technology.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👩‍🎨</div>
            <h4>Lê Thị Hương</h4>
            <span className="team-role">Head of Design</span>
            <p>Creating beautiful, intuitive learning experiences.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍🏫</div>
            <h4>Phạm Đức Thắng</h4>
            <span className="team-role">Head of Content</span>
            <p>IELTS 9.0 expert, Cambridge-certified teacher.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats" id="about-stats">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-big">10K+</span>
            <span className="stat-desc">Active Learners</span>
          </div>
          <div className="stat-item">
            <span className="stat-big">500+</span>
            <span className="stat-desc">Lessons Created</span>
          </div>
          <div className="stat-item">
            <span className="stat-big">50+</span>
            <span className="stat-desc">Countries Reached</span>
          </div>
          <div className="stat-item">
            <span className="stat-big">98%</span>
            <span className="stat-desc">Satisfaction Rate</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
