import { useState, useCallback, useEffect } from 'react';

// Función helper para convertir las coordenadas del modelo a la escena
const convertModelCoords = (x, y, z) => [
  x * 0.02,
  y * 0.02 - 2.1,
  z * -1
];

// Mapeo de partes del cuerpo a posiciones reales del modelo
// Usando las coordenadas exactas de los hitboxes del ModeloQuiz
const bodyPartPositions = {
  'Cabeza': convertModelCoords(4, 192, -1.1),
  'Ojos': convertModelCoords(0, 186.3, -1.14),
  'Orejas': convertModelCoords(53, 187.7, -0.056),
  'Nariz': convertModelCoords(3, 184, -1.2),
  'Boca': convertModelCoords(3, 179.2, -1.1),
  'Cuello': convertModelCoords(3, 170, -1),
  'Pecho': convertModelCoords(0, 155, -1),
  'Espalda': convertModelCoords(0, 138, 1.15),
  'Hombros': convertModelCoords(24, 162, -1),
  'Brazos': convertModelCoords(21, 138, -1),
  'Codos': convertModelCoords(24, 124.4, -0.9),
  'Antebrazos': convertModelCoords(26, 112, -1),
  'Muñecas': convertModelCoords(28, 96, -1),
  'Manos': convertModelCoords(28.8, 89, -1),
  'Abdomen': convertModelCoords(0, 122.5, -1.1),
  'Cintura': convertModelCoords(15, 100, -1),
  'Piernas': convertModelCoords(19, 80, -1.1),
  'Rodillas': convertModelCoords(22, 52, -1),
  'Pantorrilla': convertModelCoords(25, 27.6, -0.9),
  'Pies': convertModelCoords(35, 46, -0.35)
};

// Rotaciones para que las jeringas apunten hacia el cuerpo
const bodyPartRotations = {
  'Cabeza': [-1.5, 0, 0],
  'Ojos': [-1.5, 0, 0],
  'Orejas': [0, 0, 1.5],
  'Nariz': [-1.5, 0, 0],
  'Boca': [-1.5, 0, 0],
  'Cuello': [-1.5, 0, 0],
  'Pecho': [-1.5, 0, 0],
  'Espalda': [1.5, 0, 0],
  'Hombros': [-1.5, 0, 0],
  'Brazos': [0, 1.5, -1.5],
  'Codos': [0, 1.5, -1.5],
  'Antebrazos': [0, 1.5, -1.5],
  'Muñecas': [0, 1.5, -1.5],
  'Manos': [0, 1.5, -1.5],
  'Abdomen': [-1.5, 0, 0],
  'Cintura': [-1.5, 0, 0],
  'Piernas': [-1.5, 0, 0],
  'Rodillas': [-1.5, 0, 0],
  'Pantorrilla': [-1.5, 0, 0],
  'Pies': [-3, 0, 0]
};

export function useJeringaSystem() {
  const [jeringas, setJeringas] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addJeringa = useCallback((bodyPart) => {
    if (!bodyPartPositions[bodyPart]) {
      console.warn(`Posición no definida para: ${bodyPart}`);
      return;
    }

    console.log(`Agregando jeringa para ${bodyPart} en posición:`, bodyPartPositions[bodyPart]);

    const newJeringa = {
      id: nextId,
      bodyPart,
      position: bodyPartPositions[bodyPart],
      rotation: bodyPartRotations[bodyPart] || [-1.5, 0, 0],
      isActive: true,
      fallInitiated: false,
      createdAt: Date.now()
    };

    setJeringas(prevJeringas => {
      console.log(`Estado actual de jeringas antes de agregar nueva:`, prevJeringas);

      // Marcar todas las jeringas anteriores para que caigan
      const updatedPrevious = prevJeringas.map(jeringa => {
        console.log(`Marcando jeringa ${jeringa.id} para caer`);
        return {
          ...jeringa,
          isActive: false,
          fallInitiated: true
        };
      });

      // Mantener máximo 10 jeringas cayendo + 1 activa
      const jeringasToKeep = updatedPrevious.slice(-10);
      const newState = [...jeringasToKeep, newJeringa];

      console.log(`Nuevo estado de jeringas:`, newState);
      return newState;
    });

    setNextId(prev => prev + 1);
  }, [nextId]);

  const removeJeringa = useCallback((id) => {
    setJeringas(prev => prev.filter(jeringa => jeringa.id !== id));
  }, []);

  const onAnimationComplete = useCallback((id) => {
    // Llamado cuando una jeringa completa su animación de acercamiento
    console.log(`Jeringa ${id} completó su animación`);
  }, []);

  const resetJeringas = useCallback(() => {
    console.log('Reiniciando todas las jeringas');
    setJeringas([]);
    setNextId(1);
  }, []);

  // Limpiar jeringas muy viejas automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setJeringas(prev => prev.filter(jeringa =>
        jeringa.isActive || (now - jeringa.createdAt) < 30000 // 30 segundos
      ));
    }, 5000); // Check cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return {
    jeringas,
    addJeringa,
    removeJeringa,
    onAnimationComplete,
    resetJeringas
  };
}
