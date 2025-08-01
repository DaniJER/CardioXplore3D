import admin from "firebase-admin";

let serviceAccount = {};
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  console.log(
    "FIREBASE_SERVICE_ACCOUNT_KEY:",
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  );
} catch (error) {
  console.error(
    "❌ Error al parsear FIREBASE_SERVICE_ACCOUNT_KEY:",
    error.message
  );
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const verifyFirebaseToken = async (req, res) => {
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
