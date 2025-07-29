// backend/routes/quizRoutes.js
import express from "express";
import QuizResponse from "../models/quizResponse.js";
import authFirebase from "../middlewares/authFirebase.js";

const router = express.Router();

// 🔐 Proteger con Firebase
router.post("/submit", authFirebase, async (req, res) => {
  try {
    const userId = req.firebaseUser.uid;

    const newResponse = new QuizResponse({
      userId,
      answers: req.body.answers,
      correctCount: req.body.correctCount,
      maxStreak: req.body.maxStreak,
      score: req.body.score,
    });

    const saved = await newResponse.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "No se pudo guardar la respuesta" });
  }
});

// Ruta libre para ver resultados
router.get("/", async (req, res) => {
  try {
    const allResponses = await QuizResponse.find();
    res.json(allResponses);
  } catch (err) {
    res.status(500).json({ error: "No se pudieron cargar las respuestas" });
  }
});

export default router;
