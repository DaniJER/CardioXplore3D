import dbConnect from "../../backend/lib/dbConnect.js";
import quizResponse from "../../backend/lib/models/quizResponse.js";
import verifyFirebaseToken from "../../backend/lib/authFirebase.js";
import cors from "../../backend/lib/cors.js";

export default async function handler(req, res) {
  // Solo permitimos POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  await cors(req, res);

  try {
    // Conectar a la base de datos
    await dbConnect();

    // Autenticación con Firebase
    const isVerified = await verifyFirebaseToken(req, res);
    if (!isVerified || !req.user) {
      return res.status(401).json({ error: "No autorizado" });
    }
    const userId = req.user.uid;

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
