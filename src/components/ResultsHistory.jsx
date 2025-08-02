import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { app } from "../firebase";

const HistorialResultados = () => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const resultadosRef = collection(db, "quizResults");
          const q = query(
            resultadosRef,
            where("uid", "==", user.uid),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(q);

          const resultadosData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setResultados(resultadosData);
        } catch (error) {
          console.error("❌ Error al obtener historial:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.warn("⚠️ Usuario no autenticado");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Cargando historial...</p>;

  return (
    <div className="historial-container">
      <h2>Historial de Resultados</h2>
      {resultados.length === 0 ? (
        <p>No hay resultados guardados.</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Puntaje</th>
              <th>Correctas</th>
              <th>Racha Máxima</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((res) => (
              <tr key={res.id}>
                <td>
                  {res.createdAt?.toDate().toLocaleString() || "Sin fecha"}
                </td>
                <td>{res.score}</td>
                <td>{res.correctCount}</td>
                <td>{res.maxStreak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistorialResultados;
