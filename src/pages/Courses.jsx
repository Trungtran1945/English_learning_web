import { Link } from "react-router-dom";
import "./Courses.css";

const coursesData = [
  {
    id: 1,
    emoji: "🌱",
    level: "Beginner",
    title: "English Foundations",
    description: "Build your basics with essential grammar, common phrases, and everyday vocabulary.",
    lessons: 24,
    duration: "8 weeks",
    students: "3.2K",
    color: "#10b981",
  },
  {
    id: 2,
    emoji: "📚",
    level: "Elementary",
    title: "Everyday English",
    description: "Master daily conversations, shopping, travel, and social interactions with confidence.",
    lessons: 30,
    duration: "10 weeks",
    students: "2.8K",
    color: "#3b82f6",
  },
  {
    id: 3,
    emoji: "💼",
    level: "Intermediate",
    title: "Business English",
    description: "Perfect your professional communication: emails, meetings, presentations, and negotiations.",
    lessons: 28,
    duration: "10 weeks",
    students: "1.9K",
    color: "#8b5cf6",
  },
  {
    id: 4,
    emoji: "🎧",
    level: "All Levels",
    title: "Listening Mastery",
    description: "Sharpen your ears with podcasts, news, movies, and real-world audio from native speakers.",
    lessons: 36,
    duration: "12 weeks",
    students: "2.5K",
    color: "#f59e0b",
  },
  {
    id: 5,
    emoji: "🗣️",
    level: "Intermediate",
    title: "Speaking Confidence",
    description: "Overcome speaking anxiety with guided practice, role-plays, and AI pronunciation coaching.",
    lessons: 20,
    duration: "8 weeks",
    students: "1.6K",
    color: "#ef4444",
  },
  {
    id: 6,
    emoji: "🏆",
    level: "Advanced",
    title: "IELTS Preparation",
    description: "Comprehensive IELTS prep covering all four skills: Listening, Reading, Writing, and Speaking.",
    lessons: 40,
    duration: "14 weeks",
    students: "4.1K",
    color: "#ec4899",
  },
];

function Courses() {
  return (
    <div className="courses-page">
      {/* Hero */}
      <section className="courses-hero" id="courses-hero">
        <span className="section-badge">📚 Courses</span>
        <h1 className="courses-hero-title">Explore Our <span className="gradient-text">Course Library</span></h1>
        <p className="courses-hero-subtitle">
          Structured learning paths designed by experts to take you from beginner to fluent.
        </p>
      </section>

      {/* Grid */}
      <section className="courses-grid-section" id="courses-grid">
        <div className="courses-grid">
          {coursesData.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-card-top" style={{ borderTopColor: course.color }}>
                <span className="course-emoji">{course.emoji}</span>
                <span className="course-level" style={{ color: course.color, borderColor: course.color + "44", background: course.color + "18" }}>
                  {course.level}
                </span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <div className="course-meta">
                <span>📖 {course.lessons} lessons</span>
                <span>⏱️ {course.duration}</span>
                <span>👥 {course.students}</span>
              </div>
              <button className="course-btn">Start Course →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Courses;
