import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./results.css";

const Results = () => {
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  // Cargar las respuestas del localStorage y calcular el puntaje
  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || [];
    setAnswers(storedAnswers);

    let correct = 0;
    let currentStreak = 0;
    let highestStreak = 0;

    // Calcular el puntaje y la racha máxima
    storedAnswers.forEach((ans) => {
      if (ans.correct) {
        correct++;
        currentStreak++;
        if (currentStreak > highestStreak) {
          highestStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    });

    // Guardar el puntaje y la racha máxima en el estado
    setCorrectCount(correct);
    setMaxStreak(highestStreak);
    setScore(correct * 20 + highestStreak * 5);
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="results-container">
      <h1>Resultados del Cuestionario</h1>
      <p>Preguntas acertadas: <strong>{correctCount}</strong> de {answers.length}</p>
      <p>Racha máxima: <strong>{maxStreak}</strong></p>
      <p>Puntaje final: <strong>{score} puntos</strong></p>

      <table className="results-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Respuesta seleccionada</th>
            <th>¿Correcta?</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((ans, index) => (
            <tr key={index}>
              <td>{ans.questionId}</td>
              <td>{ans.selected}</td>
              <td>{ans.correct ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="back-button-quiz" onClick={handleBack}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default Results;