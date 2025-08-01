// pages/api/quiz/submit.js
import dbConnect from "../../../lib/dbConnect";
import QuizResult from "../../../models/QuizResult";
import { verifyFirebaseToken } from "../../../lib/authFirebase";
import Cors from "cors";

// Middleware para habilitar CORS
const cors = Cors({
  origin: ["http://localhost:5173", "https://cardio-xplore3-d.vercel.app"],
  methods: ["POST", "OPTIONS"],
});

// Helper para usar CORS como promesa
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // necesario para preflight
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect();

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No authorization header" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await verifyFirebaseToken(token);

    const { answers, correctCount, maxStreak, score } = req.body;

    const newResult = new QuizResult({
      userId: decoded.uid,
      answers,
      correctCount,
      maxStreak,
      score,
    });

    await newResult.save();

    res.status(200).json({ message: "Resultados guardados" });
  } catch (err) {
    console.error("Error al guardar resultados:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}
