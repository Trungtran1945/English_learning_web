import { useState, useEffect } from "react";
import quizService from "../services/quizService";
import "./Practice.css";

function Practice() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gọi API lấy dữ liệu khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await quizService.getAll();
        setQuizData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch quizzes:", err);
        setError("Không thể tải dữ liệu bài tập. Hãy kiểm tra backend đã chạy chưa.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = (index) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    if (index === quizData[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  const progress = quizData.length > 0
    ? ((currentQuestion + (answered ? 1 : 0)) / quizData.length) * 100
    : 0;

  return (
    <div className="practice-page">
      {/* Hero */}
      <section className="practice-hero" id="practice-hero">
        <span className="section-badge">📝 Practice</span>
        <h1 className="practice-hero-title">Test Your <span className="gradient-text">Knowledge</span></h1>
        <p className="practice-hero-subtitle">
          Take this vocabulary quiz to see how much you've learned. Good luck!
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

      {/* Quiz */}
      {!loading && !error && quizData.length > 0 && (
        <section className="quiz-section" id="quiz-section">
          <div className="quiz-container">
            {!showResult ? (
              <>
                {/* Progress */}
                <div className="quiz-progress">
                  <div className="quiz-progress-bar">
                    <div className="quiz-progress-fill" style={{ width: `${progress}%` }}></div>
                  </div>
                  <span className="quiz-progress-text">
                    Question {currentQuestion + 1} of {quizData.length}
                  </span>
                </div>

                {/* Question */}
                <div className="quiz-question">
                  <h2>{quizData[currentQuestion].question}</h2>
                </div>

                {/* Options */}
                <div className="quiz-options">
                  {quizData[currentQuestion].options.map((option, index) => {
                    let optionClass = "quiz-option";
                    if (answered) {
                      if (index === quizData[currentQuestion].correctAnswer) {
                        optionClass += " correct";
                      } else if (index === selectedAnswer) {
                        optionClass += " wrong";
                      }
                    } else if (index === selectedAnswer) {
                      optionClass += " selected";
                    }

                    return (
                      <button
                        key={index}
                        className={optionClass}
                        onClick={() => handleAnswer(index)}
                      >
                        <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                        <span className="option-text">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Next button */}
                {answered && (
                  <button className="quiz-next-btn" onClick={handleNext}>
                    {currentQuestion < quizData.length - 1 ? "Next Question →" : "See Results →"}
                  </button>
                )}
              </>
            ) : (
              /* Results */
              <div className="quiz-result">
                <div className="result-emoji">
                  {score === quizData.length ? "🏆" : score >= quizData.length / 2 ? "🎉" : "💪"}
                </div>
                <h2 className="result-title">
                  {score === quizData.length ? "Perfect Score!" : score >= quizData.length / 2 ? "Great Job!" : "Keep Practicing!"}
                </h2>
                <div className="result-score">
                  <span className="result-number">{score}</span>
                  <span className="result-total">/ {quizData.length}</span>
                </div>
                <p className="result-message">
                  You answered {score} out of {quizData.length} questions correctly.
                  {score < quizData.length && " Review the vocabulary and try again!"}
                </p>
                <button className="quiz-restart-btn" onClick={handleRestart}>
                  Try Again →
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default Practice;
