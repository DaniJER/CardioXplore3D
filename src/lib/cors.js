import Cors from "cors";
import initMiddleware from "./init-middleware";

// Solo permitir el método POST y el origen del frontend
const cors = initMiddleware(
  Cors({
    methods: ["POST"],
    origin: "https://cardio-xplore3-d.vercel.app", // o "*" temporalmente para pruebas
    credentials: true,
  })
);

export default cors;
