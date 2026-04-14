import { useState } from "react";
import "./Vocabulary.css";

const vocabularyData = [
  { id: 1, word: "Accomplish", phonetic: "/əˈkɑːm.plɪʃ/", meaning: "To finish something successfully", example: "She accomplished her goal of running a marathon.", category: "Action" },
  { id: 2, word: "Benevolent", phonetic: "/bəˈnev.əl.ənt/", meaning: "Kind and generous", example: "The benevolent donor funded the school.", category: "Adjective" },
  { id: 3, word: "Diligent", phonetic: "/ˈdɪl.ɪ.dʒənt/", meaning: "Careful and persistent in work", example: "She was diligent in her studies.", category: "Adjective" },
  { id: 4, word: "Eloquent", phonetic: "/ˈel.ə.kwənt/", meaning: "Fluent and persuasive in speaking", example: "He gave an eloquent speech at the ceremony.", category: "Adjective" },
  { id: 5, word: "Flourish", phonetic: "/ˈflɜː.rɪʃ/", meaning: "To grow or develop successfully", example: "The business began to flourish after the rebrand.", category: "Action" },
  { id: 6, word: "Meticulous", phonetic: "/məˈtɪk.jə.ləs/", meaning: "Showing great attention to detail", example: "He is meticulous about his work.", category: "Adjective" },
  { id: 7, word: "Persevere", phonetic: "/ˌpɜː.sɪˈvɪr/", meaning: "To continue despite difficulties", example: "She persevered through many challenges.", category: "Action" },
  { id: 8, word: "Resilient", phonetic: "/rɪˈzɪl.i.ənt/", meaning: "Able to recover quickly from difficulties", example: "Children are often more resilient than adults.", category: "Adjective" },
  { id: 9, word: "Serendipity", phonetic: "/ˌser.ənˈdɪp.ə.ti/", meaning: "Finding good things by chance", example: "It was pure serendipity that they met.", category: "Noun" },
  { id: 10, word: "Ubiquitous", phonetic: "/juːˈbɪk.wɪ.təs/", meaning: "Found everywhere", example: "Smartphones have become ubiquitous.", category: "Adjective" },
  { id: 11, word: "Innovate", phonetic: "/ˈɪn.ə.veɪt/", meaning: "To introduce new methods or ideas", example: "Companies that innovate tend to succeed.", category: "Action" },
  { id: 12, word: "Pragmatic", phonetic: "/præɡˈmæt.ɪk/", meaning: "Dealing with things practically", example: "We need a pragmatic approach to this problem.", category: "Adjective" },
];

const categories = ["All", "Action", "Adjective", "Noun"];

function Vocabulary() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [flippedCards, setFlippedCards] = useState({});

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

      {/* Cards Grid */}
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
    </div>
  );
}

export default Vocabulary;
