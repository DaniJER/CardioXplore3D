import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: Number,
  selectedOption: String,
  correct: Boolean,
});

const quizResponseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  answers: [answerSchema],
  correctCount: Number,
  maxStreak: Number,
  score: Number,
  submittedAt: { type: Date, default: Date.now },
});

// ✅ Nombre explícito de la colección
const quizResponse =
  mongoose.models.quizResponse ||
  mongoose.model("quizResponse", quizResponseSchema, "quizResponses");

export default quizResponse;
