import { useState, useEffect } from "react";
import courseService from "../services/courseService";
import "./Courses.css";

function Courses() {
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gọi API lấy dữ liệu khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await courseService.getAll();
        setCoursesData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Không thể tải dữ liệu khóa học. Hãy kiểm tra backend đã chạy chưa.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: "center", padding: "3rem", color: "rgba(255,255,255,0.7)" }}>
          <p>⏳ Đang tải dữ liệu...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div style={{ textAlign: "center", padding: "3rem", color: "#ef4444" }}>
          <p>❌ {error}</p>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && (
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
      )}
    </div>
  );
}

export default Courses;
