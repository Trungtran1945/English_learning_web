import { useState, useEffect } from "react";
import vocabularyService from "../services/vocabularyService";
import "./Vocabulary.css";

const categories = ["All", "Action", "Adjective", "Noun"];

function Vocabulary() {
  const [vocabularyData, setVocabularyData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [flippedCards, setFlippedCards] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gọi API lấy dữ liệu khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await vocabularyService.getAll();
        setVocabularyData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch vocabulary:", err);
        setError("Không thể tải dữ liệu từ vựng. Hãy kiểm tra backend đã chạy chưa.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredWords = activeCategory === "All" 
    ? vocabularyData 
    : vocabularyData.filter(w => w.category === activeCategory);

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="vocabulary-page">
      {/* Hero */}
      <section className="vocab-hero" id="vocab-hero">
        <span className="section-badge">📘 Vocabulary</span>
        <h1 className="vocab-hero-title">Build Your <span className="gradient-text">Word Power</span></h1>
        <p className="vocab-hero-subtitle">
          Click on any card to flip it and see the example sentence. Filter by category to focus your learning.
        </p>
      </section>

      {/* Filters */}
      <section className="vocab-filters" id="vocab-filters">
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "filter-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
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

      {/* Cards Grid */}
      {!loading && !error && (
        <section className="vocab-grid-section" id="vocab-grid">
          <div className="vocab-grid">
            {filteredWords.map((item) => (
              <div
                className={`vocab-card ${flippedCards[item.id] ? "flipped" : ""}`}
                key={item.id}
                onClick={() => toggleFlip(item.id)}
              >
                <div className="vocab-card-inner">
                  {/* Front */}
                  <div className="vocab-card-front">
                    <span className="vocab-category" >{item.category}</span>
                    <h3 className="vocab-word">{item.word}</h3>
                    <span className="vocab-phonetic">{item.phonetic}</span>
                    <p className="vocab-meaning">{item.meaning}</p>
                    <span className="vocab-flip-hint">Tap to see example →</span>
                  </div>
                  {/* Back */}
                  <div className="vocab-card-back">
                    <span className="vocab-back-label">Example</span>
                    <p className="vocab-example">"{item.example}"</p>
                    <span className="vocab-flip-hint">← Tap to go back</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Vocabulary;
