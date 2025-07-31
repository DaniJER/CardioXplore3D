// /pages/api/quiz/submit.js
import dbConnect from "../src/dbConnect";
import QuizResponse from "../src/models/quizResponse";
import authFirebase from "../src/middlewares/authFirebase";
import cors from "../src/lib/cors";

export default async function handler(req, res) {
  await cors(req, res);
  console.log("✅ Middleware CORS ejecutado");
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    await dbConnect();

    const firebaseUser = await authFirebase(req);
    const userId = firebaseUser.uid;

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
    console.error("❌ Error:", err);
    res.status(401).json({ error: err.message || "No autorizado" });
  }
}
