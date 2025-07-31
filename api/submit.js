import dbConnect from "./lib/dbConnect.js";
import quizResponse from "./lib/models/quizResponse.js";
import authFirebase from "./lib/authFirebase.js";
import cors from "./lib/cors.js";

export default async function handler(req, res) {
  // Solo permitimos POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  // Aplicar CORS (si estás usando este middleware)
  await cors(req, res);

  try {
    // Conectar a la base de datos
    await dbConnect();

    // Autenticación con Firebase
    const firebaseUser = await authFirebase(req);
    const userId = firebaseUser.uid;

    // Crear una nueva respuesta del quiz
    const newResponse = new quizResponse({
      userId,
      answers: req.body.answers,
      correctCount: req.body.correctCount,
      maxStreak: req.body.maxStreak,
      score: req.body.score,
    });

    // Guardar en MongoDB
    const saved = await newResponse.save();

    // Enviar respuesta
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Error en /api/quiz/submit:", err);
    res.status(401).json({ error: err.message || "No autorizado" });
  }
}
