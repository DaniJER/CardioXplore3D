// backend/lib/authFirebase.js (o donde lo tengas)
import admin from "firebase-admin";

// 🔐 Asegúrate de que los saltos de línea se interpretan correctamente
const rawKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "{}";
const serviceAccount = JSON.parse(rawKey.replace(/\\n/g, "\n"));

// 🛡️ Inicializar Firebase Admin una sola vez
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// ✅ Middleware de verificación
const verifyFirebaseToken = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const idToken = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    return true;
  } catch (error) {
    console.error("Error al verificar token Firebase:", error);
    res.status(401).json({ error: "Token inválido" });
    return false;
  }
};

export default verifyFirebaseToken;
