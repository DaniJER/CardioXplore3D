// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv"; //para usar variables en .env
// import userRoutes from "./routes/userRoutes.js";
// import quizRoutes from "./routes/quizRoutes.js";

// dotenv.config();
// // console.log("🔍 MONGODB_URI =", process.env.MONGODB_URI);

// const app = express();
// const PORT = process.env.PORT || 5000;

// //MIDDLEWARE

// app.use(cors()); //permite conexion con el frontend
// app.use(express.json()); //permite leer JSON en el body
// app.use("/api/users", userRoutes);
// app.use("/api/quiz", quizRoutes);
// console.log("Intentando conectar a:", process.env.MONGODB_URI);

// //Conexion a MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB conectado"))
//   .catch((err) => console.error("Error al conectarse", err));

// //Ruta de prueba
// app.get("/", (req, res) => {
//   res.send("API funcionando");
// });

// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en puerto ${PORT}`);
// });
