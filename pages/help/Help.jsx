import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">¿Necesitas ayuda?</h1>

      <section className="help-section">
        <p>
          Si tienes dudas o necesitas asistencia, aquí te dejamos algunas formas en las que puedes obtener ayuda:
        </p>
        <ul className="help-list">
          <li><strong>Contacto directo:</strong> Escríbenos a <a href="mailto:juan.fernando.duque@correounivalle.edu.co">juan.fernando.duque@correounivalle.edu.co</a>.</li>
          <li><strong>Preguntas frecuentes (FAQ):</strong> Próximamente incluiremos una sección con respuestas a las dudas más comunes.</li>
          <li><strong>Retroalimentación:</strong> Nos encanta mejorar. Si tienes sugerencias, no dudes en compartirlas con nosotros.</li>
        </ul>
      </section>

      <section className="help-section">
        <h2 className="help-subtitle">¿Problemas técnicos?</h2>
        <p>
          Si la aplicación no carga correctamente, asegúrate de estar usando un navegador actualizado y con buena conexión a internet.
        </p>
        <p>
          También puedes intentar recargar la página o borrar la caché del navegador.
        </p>
      </section>
    </div>
  );
};

export default Help;
