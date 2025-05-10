import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();

    res.status(201).json({ message: "✅ Usuario guardado", user: newUser });
  } catch (error) {
    console.error("❌ Error al guardar usuario:", error);
    res.status(500).json({ error: "Error al guardar el usuario" });
  }
});

export default router;
