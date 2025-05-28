import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Assignments.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

const Assignments = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
  if (timeLeft <= 0) {
    setTimeLeft(0);         // clamp time to 0
    setShowScore(true);     // end quiz
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft]);


  useEffect(() => {
    if (showScore && score >= 2) {
      setTimeout(() => navigate('/certificate'), 2500); // smooth transition
    }
  }, [showScore, score, navigate]);

  const handleAnswer = (option) => {
    if (selected !== null) return;
    setSelected(option);

    if (option === questions[current].answer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent(prev => prev + 1);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const formatTime = () => {
    const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const sec = String(timeLeft % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(120);
    setSelected(null);
  };

  const progressPercent = ((120 - timeLeft) / 120) * 100;

  return (
    <div className="quiz-wrapper">
      <div className="quiz-header">
        <h2>Quick Quiz</h2>
        <div className="timer-bar">
          <div className="progress" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="timer">⏳ {formatTime()}</span>
      </div>

      {showScore ? (
        <div className="score-section">
          <h3> Quiz Completed!</h3>
          <p>You scored <strong>{score}</strong> out of {questions.length}</p>
          {score >= 2 ? (
  <p className="redirect-msg">🎓 Redirecting to your certificate...</p>
) : (
  <>
    <p className="try-again-msg">Try again to earn your certificate!</p>
    <button onClick={restartQuiz} className="retry-btn">Retry Quiz</button>
  </>
)}

        </div>
      ) : (
        <div className="question-section">
          <h3>Question {current + 1} of {questions.length}</h3>
          <p className="question-text">{questions[current].question}</p>
          <div className="options">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className={`option-btn ${selected ? option === questions[current].answer ? 'correct' : option === selected ? 'wrong' : '' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
