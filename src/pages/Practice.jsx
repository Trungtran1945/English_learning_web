import { useState } from "react";
import "./Practice.css";

const quizData = [
  {
    id: 1,
    question: "What is the meaning of 'ubiquitous'?",
    options: ["Very rare", "Found everywhere", "Extremely loud", "Very old"],
    correct: 1,
  },
  {
    id: 2,
    question: "Choose the correct word: 'She _____ her goal after years of hard work.'",
    options: ["abandoned", "accomplished", "avoided", "accused"],
    correct: 1,
  },
  {
    id: 3,
    question: "Which word means 'kind and generous'?",
    options: ["Malevolent", "Benevolent", "Diligent", "Resilient"],
    correct: 1,
  },
  {
    id: 4,
    question: "'Serendipity' refers to:",
    options: ["A type of music", "Finding good things by chance", "A feeling of sadness", "An ancient language"],
    correct: 1,
  },
  {
    id: 5,
    question: "What does 'persevere' mean?",
    options: ["Give up easily", "Continue despite difficulties", "Celebrate success", "Feel confused"],
    correct: 1,
  },
];

function Practice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    if (index === quizData[currentQuestion].correct) {
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

  const progress = ((currentQuestion + (answered ? 1 : 0)) / quizData.length) * 100;

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

      {/* Quiz */}
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
                    if (index === quizData[currentQuestion].correct) {
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
    </div>
  );
}

export default Practice;
