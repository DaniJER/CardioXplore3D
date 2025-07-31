import React, { useState, useEffect } from "react";
import "./question1.css";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import DoubleClickLightToggle from "../../diseases/PointEvent/DoubleClick";
import RightClickColorToggle from "../../diseases/PointEvent/RightClick";
import SceneLights from "../../diseases/Lights/SceneLights";
import { ModeloQuiz } from "./modelos3D/ModeloQuiz";
import questions from "./data/questionsData";
import MoveModel from "./PointEvent/MoveModel";
import { JeringaAnimada } from "./modelos3D/JeringaAnimada";
import { useJeringaSystem } from "./hooks/useJeringaSystem";

const Question1 = () => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const [interactionsEnabled, setInteractionsEnabled] = useState(false);

  const { lightType, handleDoubleClick } = DoubleClickLightToggle();
  const { lightColor, handleRightClick } = RightClickColorToggle();

  // Sistema de jeringas
  const { jeringas, addJeringa, removeJeringa, onAnimationComplete, resetJeringas } = useJeringaSystem();

  // Guardar las respuestas en el localStorage
  useEffect(() => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
  }, [answers]);

  // Habilitar interacciones después de 7 segundos como respaldo (solo en la primera pregunta)
  useEffect(() => {
    if (currentQuestionIndex === 0) {
      const timer = setTimeout(() => {
        if (!interactionsEnabled) {
          console.log('Habilitando interacciones después de 7 segundos (primera pregunta)');
          setInteractionsEnabled(true);
        }
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [interactionsEnabled, currentQuestionIndex]);

  // Manejar interacciones cuando cambia la pregunta
  useEffect(() => {
    if (currentQuestionIndex === 0) {
      // Primera pregunta: esperar animaciones del modelo
      setInteractionsEnabled(false);
    } else {
      // Preguntas posteriores: habilitar inmediatamente
      console.log('Habilitando interacciones inmediatamente (pregunta posterior)');
      setInteractionsEnabled(true);
    }
  }, [currentQuestionIndex]);

  // Función para manejar el botón de retroceso
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Recupera la respuesta previa si existe
      setSelectedObject(answers[currentQuestionIndex - 1]?.selected || null);
      // Reiniciar jeringas al cambiar de pregunta
      resetJeringas();
      
      // Solo deshabilitar interacciones si volvemos a la primera pregunta
      if (currentQuestionIndex - 1 === 0) {
        setInteractionsEnabled(false);
      }
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
      // Reiniciar jeringas al cambiar de pregunta
      resetJeringas();
      // Las interacciones se manejan automáticamente en el useEffect de currentQuestionIndex
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
    // Solo permitir interacciones si están habilitadas
    if (!interactionsEnabled) {
      console.log('Interacciones aún no habilitadas');
      return;
    }

    setSelectedObject(objectName || "Ninguno");
    // Agregar jeringa cuando se selecciona una parte del cuerpo
    if (objectName && objectName !== "Ninguno") {
      addJeringa(objectName);
    }
  };

  // Manejar cuando las animaciones del modelo terminan
  const handleAnimationsComplete = () => {
    console.log('Animaciones del modelo completadas, habilitando interacciones');
    setInteractionsEnabled(true);
  };

  // Función para limpiar todas las jeringas y la selección
  const handleClearAll = () => {
    if (!interactionsEnabled) {
      console.log('Interacciones aún no habilitadas');
      return;
    }

    console.log('Limpiando todas las jeringas y selección');
    resetJeringas();
    setSelectedObject(null);
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
            <Physics gravity={[0, -9.81, 0]}>
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
              {/* Plano invisible para sombras */}
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -2.1, 0]}
              >
                <planeGeometry args={[30, 30]} />
                <shadowMaterial transparent opacity={0.2} />
              </mesh>

              {/* Suelo visible con físicas para colisiones */}
              <RigidBody type="fixed" position={[0, -2.11, 0]} rotation={[-Math.PI / 2, 0, 0]} colliders="cuboid">
                <mesh receiveShadow>
                  <planeGeometry args={[30, 30]} />
                  <meshStandardMaterial color="#e0e0e0" />
                </mesh>
              </RigidBody>

              <ModeloQuiz
                scale={0.020}
                position={[0, -2.1, 0]}
                rotation={[0, 0, 0]}
                onObjectClick={handleModelClick}
                onAnimationsComplete={handleAnimationsComplete}
              />

              {/* Renderizar todas las jeringas */}
              {jeringas.map((jeringa) => (
                <JeringaAnimada
                  key={jeringa.id}
                  id={jeringa.id}
                  targetPosition={jeringa.position}
                  targetRotation={jeringa.rotation}
                  isActive={jeringa.isActive}
                  fallInitiated={jeringa.fallInitiated}
                  onAnimationComplete={() => onAnimationComplete(jeringa.id)}
                />
              ))}
            </Physics>
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
            {selectedObject || (interactionsEnabled ? "Haz click en el modelo 3D" : "Bienvenido al quiz")}
          </div>
          {!interactionsEnabled && (
            <div style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
              Buena suerte
            </div>
          )}
        </div>

        <div className="quiz-footer">
          <button
            className="quiz-back-button"
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
          >
            Anterior
          </button>

          {/* Botón de limpiar */}
          <button
            className="quiz-clear-button"
            onClick={handleClearAll}
            disabled={!interactionsEnabled}
          >
            Limpiar todo
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
