import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Assignments.css';

const questionBank = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Textual Marking Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to insert a line break?",
      options: ["<br>", "<break>", "<lb>", "<hr>"],
      answer: "<br>"
    },
    {
      question: "Which tag is used for creating hyperlinks?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "HTML pages are saved with which extension?",
      options: [".ht", ".html", ".doc", ".www"],
      answer: ".html"
    },
    {
      question: "Which tag is used to display images?",
      options: ["<image>", "<img>", "<src>", "<pic>"],
      answer: "<img>"
    }
  ],
  CSS: [
    {
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which property is used to change background color?",
      options: ["color", "bgcolor", "background-color", "background"],
      answer: "background-color"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      answer: "font-size"
    },
    {
      question: "How to select an element with id 'header'?",
      options: ["#header", ".header", "*header", "$header"],
      answer: "#header"
    },
    {
      question: "Which property is used to align text?",
      options: ["text-align", "text-alignments", "alignment", "text-format"],
      answer: "text-align"
    }
  ],
  JavaScript: [
    {
      question: "Which language runs in the browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toObject()"],
      answer: "JSON.parse()"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["<!--", "//", "**", "#"],
      answer: "//"
    },
    {
      question: "Which method is used to output data in the console?",
      options: ["console.print()", "print()", "log()", "console.log()"],
      answer: "console.log()"
    }
  ],
  Python: [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "def", "function", "lambda"],
      answer: "def"
    },
    {
      question: "How do you start a comment in Python?",
      options: ["//", "#", "<!--", "/*"],
      answer: "#"
    },
    {
      question: "Which of these is a valid list in Python?",
      options: ["(1,2,3)", "{1,2,3}", "[1,2,3]", "<1,2,3>"],
      answer: "[1,2,3]"
    },
    {
      question: "What is the output of: print(2**3)?",
      options: ["6", "8", "9", "5"],
      answer: "8"
    },
    {
      question: "What does 'len()' function do?",
      options: ["Returns max", "Returns type", "Returns length", "Returns id"],
      answer: "Returns length"
    }
  ],
  Java: [
    {
      question: "Which company developed Java?",
      options: ["Microsoft", "Apple", "Sun Microsystems", "Oracle"],
      answer: "Sun Microsystems"
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["extends", "inherits", "this", "implements"],
      answer: "extends"
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["start()", "init()", "main()", "run()"],
      answer: "main()"
    },
    {
      question: "Java is a...",
      options: ["Compiled language", "Interpreted language", "Both", "None"],
      answer: "Both"
    },
    {
      question: "Which package contains Scanner class?",
      options: ["java.io", "java.util", "java.net", "java.lang"],
      answer: "java.util"
    }
  ]
};

const Assignments = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [selected, setSelected] = useState(null);

  const questions = selectedTopic ? questionBank[selectedTopic] : [];

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowScore(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (showScore && score >= 3) {
      setTimeout(() => navigate('/certificate'), 2500);
    }
  }, [showScore, score, navigate]);

  const handleAnswer = (option) => {
    if (selected !== null) return;
    setSelected(option);

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
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

  if (!selectedTopic) {
    return (
      <div className="quiz-wrapper">
        <h2>Select a Topic to Begin</h2>
        <div className="options">
          {Object.keys(questionBank).map((topic, idx) => (
            <button key={idx} className="option-btn" onClick={() => setSelectedTopic(topic)}>
              {topic}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz-header">
        <h2>Quick Quiz - {selectedTopic}</h2>
        <div className="timer-bar">
          <div className="progress" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="timer">⏳ {formatTime()}</span>
      </div>

      {showScore ? (
        <div className="score-section">
          <h3>Quiz Completed!</h3>
          <p>You scored <strong>{score}</strong> out of {questions.length}</p>
          {score >= 3 ? (
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
