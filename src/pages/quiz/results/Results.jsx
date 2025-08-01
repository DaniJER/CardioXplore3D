// frontend/components/Results.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import questions from "../questions/data/questionsData";
import "./results.css";

const Results = () => {
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || [];
    setAnswers(storedAnswers);

    let correct = 0;
    let currentStreak = 0;
    let highestStreak = 0;

    storedAnswers.forEach((ans) => {
      if (ans.correct) {
        correct++;
        currentStreak++;
        highestStreak = Math.max(highestStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });

    const finalScore = correct * 20 + highestStreak * 5;
    setCorrectCount(correct);
    setMaxStreak(highestStreak);
    setScore(finalScore);

    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        enviarResultados(
          storedAnswers,
          correct,
          highestStreak,
          finalScore,
          idToken
        );
      } else {
        console.warn("⚠️ Usuario no autenticado");
      }
    });

    return () => unsubscribe();
  }, []);

  const enviarResultados = async (
    storedAnswers,
    correct,
    streak,
    finalScore,
    idToken
  ) => {
    try {
      console.log("🧾 Payload enviado:", {
        answers: storedAnswers,
        correctCount: correct,
        maxStreak: streak,
        score: finalScore,
      });
      console.log("🔐 Token:", idToken.slice(0, 20), "..."); // muestra solo el inicio
      const response = await fetch(
        "https://cardio-xplore3-d.vercel.app/api/quiz/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            answers: storedAnswers.map((ans) => ({
              questionId: ans.questionId,
              selectedOption: ans.selected,
              correct: ans.correct,
            })),
            correctCount: correct,
            maxStreak: streak,
            score: finalScore,
          }),
        }
      );

      if (response.ok) {
        console.log("✅ Resultados enviados a MongoDB");
      } else {
        const errorData = await response.json();
        console.error("❌ Error al enviar resultados:", errorData);
      }
    } catch (error) {
      console.error("❌ Error de conexión o código:", error.message || error);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="results-container">
      <h1>Resultados del Cuestionario</h1>
      <p>
        Preguntas acertadas: <strong>{correctCount}</strong> de {answers.length}
      </p>
      <p>
        Racha máxima: <strong>{maxStreak}</strong>
      </p>
      <p>
        Puntaje final: <strong>{score} puntos</strong>
      </p>

      <table className="results-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Pregunta</th>
            <th>Respuesta seleccionada</th>
            <th>¿Correcta?</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((ans, index) => {
            const question = questions.find((q) => q.id === ans.questionId);
            return (
              <tr key={index}>
                <td>{ans.questionId}</td>
                <td>{question ? question.text : "Pregunta no encontrada"}</td>
                <td>{ans.selected}</td>
                <td>{ans.correct ? "✅" : "❌"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="back-button-quiz" onClick={handleBack}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default Results;
