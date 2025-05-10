import React, { useState, useEffect } from "react";
import "./question1.css";

const Question1 = () => {
  const questions = [
    {
      id: 1,
      text: "¿Cuál es la enfermedad?",
      image: "/img-diseases/Heart-IC.png",
      options: ["Insuficiencia cardíaca", "Arritmia", "Cardiopatía congénita"],
      correctAnswer: "Insuficiencia cardíaca",
    },
    {
      id: 2,
      text: "¿Cuál es la enfermedad?",
      image: "/img-diseases/obstructed-artery.png",
      options: ["Aneurisma", "Arteria Coronaria", "Hipertensión"],
      correctAnswer: "Arteria Coronaria",
    },
    {
      id: 3,
      text: "¿Cuál es la enfermedad?",
      image: "/img-diseases/Heart-HA.png",
      options: ["Hipertension arterial", "Angina de pecho", "Trombosis venosa"],
      correctAnswer: "Hipertension arterial",
    },
    {
      id: 4,
      text: "¿Cuál es la enfermedad?",
      image: "/img-diseases/CIV.png",
      options: ["Pericarditis", "Taquicardia", "Comunicación interventricular" ],
      correctAnswer: "Comunicación interventricular",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Guardar las respuestas en el localStorage
  useEffect(() => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
  }, [answers]);

  // Funcion para manejar la seleccion de opciones
  const handleOptionClick = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.correctAnswer;

    const newAnswer = {
      questionId: currentQuestion.id,
      selected: option,
      correct: isCorrect,
    };

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = newAnswer;
    setAnswers(updatedAnswers);
  };

  // Funcion para manejar el botón de retroceso
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Funcion para manejar el botón de siguiente
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Funcion para manejar el botón de terminar
  const handleFinish = () => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    window.location.href = "/quiz/resultados";
  };

  const handleExit = () => {
    window.location.href = "/quiz";
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const selectedAnswer = answers[currentQuestionIndex]?.selected;

  return (
    <div className="quiz-page">
      <button className="exit-button" onClick={handleExit}>Salir</button>
      <div className="quiz-header">
        <h4 className="quiz-title">Quiz</h4>
        <h2 className="quiz-subtitle">Pregunta #{questions[currentQuestionIndex].id}</h2>
        <p className="quiz-description-start">{questions[currentQuestionIndex].text}</p>
      </div>
      <div className="quiz-image-container">
        <img src={questions[currentQuestionIndex].image} alt="Ilustración" />
      </div>

      <div className="quiz-options">
        {questions[currentQuestionIndex].options.map((option) => (
          <button
            key={option}
            className={`quiz-option ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="quiz-footer">
        <button
          className="quiz-back-button"
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}
        >
          Anterior
        </button>
        {isLastQuestion ? (
          <button className="quiz-finish-button" onClick={handleFinish} disabled={!selectedAnswer}>
            Terminar
          </button>
        ) : (
          <button
            className="quiz-next-button"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Question1;
