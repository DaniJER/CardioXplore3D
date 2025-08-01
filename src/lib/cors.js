import Cors from "cors";
import initMiddleware from "./init-midlewares.js";

const allowedOrigins = [
  "https://cardio-xplore3-d.vercel.app",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por CORS"));
      }
    },
  })
);

export default cors;
