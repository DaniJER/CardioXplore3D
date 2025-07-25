import React, { useState, useEffect } from "react";
import "./question1.css";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DoubleClickLightToggle from "../../diseases/PointEvent/DoubleClick";
import RightClickColorToggle from "../../diseases/PointEvent/RightClick";
import SceneLights from "../../diseases/Lights/SceneLights";
import { ModeloQuiz } from "./modelos3D/ModeloQuiz";
import questions from "./data/questionsData";
import MoveModel from "./PointEvent/MoveModel";

const Question1 = () => {
  const navigate = useNavigate();
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);

  const { lightType, handleDoubleClick } = DoubleClickLightToggle();
  const { lightColor, handleRightClick } = RightClickColorToggle();

  // Guardar las respuestas en el localStorage
  useEffect(() => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
  }, [answers]);

  // Función para manejar el botón de retroceso
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Recupera la respuesta previa si existe
      setSelectedObject(answers[currentQuestionIndex - 1]?.selected || null);
    }
  };

  // Función para manejar el botón de siguiente
  const handleNext = () => {
    const question = questions[currentQuestionIndex];
    const isCorrect = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.includes(selectedObject)
      : question.correctAnswer === selectedObject;

    const answerObj = {
      questionId: question.id,
      selected: selectedObject,
      correct: isCorrect,
    };

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answerObj;
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedObject(updatedAnswers[currentQuestionIndex + 1]?.selected || null);
    }
  };

  // Función para manejar el botón de terminar
  const handleFinish = () => {
    const question = questions[currentQuestionIndex];
    const isCorrect = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.includes(selectedObject)
      : question.correctAnswer === selectedObject;

    const answerObj = {
      questionId: question.id,
      selected: selectedObject,
      correct: isCorrect,
    };

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answerObj;
    setAnswers(updatedAnswers);
    localStorage.setItem("quizAnswers", JSON.stringify(updatedAnswers));
    navigate("/quiz/resultados");
  };

  // Función para manejar el botón de salir
  const handleExit = () => {
    navigate("/quiz");
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Recibe el nombre del objeto clickeado desde ModeloQuiz
  const handleModelClick = (objectName) => {
    setSelectedObject(objectName || "Ninguno");
  };

  return (
    <div className="quiz-flex-container">
      {/* Columna izquierda: Modelo 3D */}
      <div className="quiz-3d-column">
        <div className="quiz-model-controls">

          {/** Controles de movimiento del modelo */}
          {/* <div className="arrow-grid">
            <div className="arrow empty"></div>
            <div className="arrow arrow-up">
              <MoveModel position={"1"} />
            </div>
            <div className="arrow empty"></div>
            <div className="arrow arrow-left">
              <MoveModel position={"4"} />
            </div>
            <div className="arrow arrow-down">
              <MoveModel position={"3"} />
            </div>
            <div className="arrow arrow-right">
              <MoveModel position={"2"} />
            </div>
          </div> */}

        </div>
        <Canvas
          style={{ height: "80vh", width: "100%" }}
          shadows
          camera={{ position: [0, 0, 5], fov: 50 }}
        >
          <SceneLights
            ambientIntensity={1.5}
            enableDirectionalLight={true}
            directionalIntensity={10}
            directionalPosition={[5, 5, 10]}
            enableSpotLight={false}
            spotIntensity={10}
            spotPosition={[10, 15, 10]}
            enablePointLight={false}
            pointIntensity={10}
            pointPosition={[0, 5, 0]}
            lightColor={lightColor}
            lightType={lightType}
          />
          <OrbitControls />
          <ModeloQuiz
            scale={0.020}
            position={[0, -2.1, 0]}
            rotation={[0, 0, 0]}
            onObjectClick={handleModelClick}
          />
        </Canvas>
      </div>

      {/* Columna derecha: Texto y controles */}
      <div className="quiz-right-column">
        <button className="exit-button" onClick={handleExit}>Salir</button>
        <div className="quiz-header">
          <h4 className="quiz-title">Quiz</h4>
          <h2 className="quiz-subtitle">Pregunta #{questions[currentQuestionIndex].id}</h2>
          <p className="quiz-description-start">{questions[currentQuestionIndex].text}</p>
        </div>

        <div className="selected-object-box">
          <strong>Objeto seleccionado:</strong>
          <div className="selected-object-name">
            {selectedObject || "Haz click en el modelo 3D"}
          </div>
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
            <button className="quiz-finish-button" onClick={handleFinish}>
              Terminar
            </button>
          ) : (
            <button
              className="quiz-next-button"
              onClick={handleNext}
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question1;
