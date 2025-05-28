import React, { useState } from "react";
import "./quiz.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { userLogged } = useAuthStore();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const startQuiz = () => {
    if (userLogged) {
      navigate("/quiz/start");
    } else {
      setShowModal(true);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const continueWithoutSaving = () => {
    setShowModal(false);
    navigate("/quiz/start");
  };

  return (
    <>
      <div className="quiz-container">
        <div className="left-container">
          <h4 className="quiz-title">Quiz</h4>
          <h2 className="quiz-subtitle">Enfermedades del corazón</h2>
          <p className="quiz-description">
            Pon a prueba tus conocimientos sobre las enfermedades del corazón
            con este breve cuestionario interactivo.
          </p>
          <button className="quiz-button" onClick={startQuiz}>
            Iniciar el test
          </button>
        </div>

        <div className="right-container">
          <h3 className="note-title">Tener en cuenta</h3>
          <ul className="note-list">
            <li>El cuestionario tiene 4 preguntas.</li>
            <li>Las preguntas son de opción múltiple.</li>
            <li>Al finalizar recibirás un resultado.</li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>No has iniciado sesión</h2>
            <p>
              Debes iniciar sesión para guardar tus resultados, de lo contrario
              no se guardará tu progreso.
            </p>
            <div className="modal-buttons">
              <button className="login-button" onClick={handleLoginRedirect}>
                Iniciar sesión
              </button>
              <button
                className="continue-button"
                onClick={continueWithoutSaving}
              >
                Continuar sin guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
