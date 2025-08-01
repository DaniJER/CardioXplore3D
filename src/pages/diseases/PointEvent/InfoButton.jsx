import React, { useState } from 'react';
import infoIcon from "../../../assets/information.svg";
import './InfoButton.css';

const InfoButton = ({ showModal, setShowModal }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="info-button-container">
            <button
                className="model-button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowModal(true)}
            >
                <img src={infoIcon} alt="Información" className="icon-controls" />
            </button>

            {showTooltip && (
                <div className="tooltip">
                    Presiona para más información
                </div>
            )}

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content-info" onClick={(e) => e.stopPropagation()}>
                        <h2>Información de los modelos</h2>
                        <ul>
                            <li>Con la tecla "ESC" puedes dejar de interactuar</li>
                            <li>Con la tecla "Espacio" puedes girar o detener el modelo 3D.</li>
                            <li>Con la letra "P" puedes pausar o reanudar la animación del modelo 3D.</li>
                            <li>Con doble clic puedes cambiar el estilo de luz.</li>
                            <li>Con clic derecho puedes cambiar el color de la luz.</li>
                        </ul>
                        <button className="close-button" onClick={() => setShowModal(false)} aria-label="Cerrar">
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoButton;
