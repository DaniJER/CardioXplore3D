import Cors from "cors";
import initMiddleware from "./init-midlewares.js";

const cors = initMiddleware(
  Cors({
    methods: ["POST"],
    origin: "https://cardio-xplore3-d.vercel.app", // o "*" temporalmente para pruebas
    credentials: true,
  })
);

export default cors;
