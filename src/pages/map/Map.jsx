import './Map.css';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaHeartbeat, FaUserFriends, FaQuestionCircle, FaHandsHelping, FaFileAlt, FaMapMarkedAlt } from 'react-icons/fa';

function Map() {
    const navigate = useNavigate();

    return (
        <div className="app-map">
            <h2 className="map-title">🗺️ Mapa de la Aplicación</h2>
            <div className="map-grid">
                {/* Inicio */}
                <div className="map-section">
                    <button className="map-main-link" onClick={() => navigate('/')}>
                        <FaHome className="map-icon" /> Inicio
                    </button>
                </div>

                {/* Información */}
                <div className="map-section">
                    <div className="map-section-title">
                        <FaHeartbeat className="map-icon" /> Información
                    </div>
                    <button className="map-link" onClick={() => navigate('/enfermedades')}>
                        Enfermedades
                    </button>
                    <div className="map-subsection">
                        <button className="map-sublink" onClick={() => navigate('/enfermedades/1')}>
                            Hipertensión Arterial
                        </button>
                        <button className="map-sublink" onClick={() => navigate('/enfermedades/2')}>
                            Comunicación interventricular
                        </button>
                        <button className="map-sublink" onClick={() => navigate('/enfermedades/3')}>
                            Enfermedad Arterial Coronaria
                        </button>
                        <button className="map-sublink" onClick={() => navigate('/enfermedades/4')}>
                            Insuficiencia Cardíaca
                        </button>
                    </div>
                    <button className="map-link" onClick={() => navigate('/nosotros')}>
                        <FaUserFriends className="map-icon" /> Nosotros
                    </button>
                </div>

                {/* Interacción */}
                <div className="map-section">
                    <div className="map-section-title">
                        <FaQuestionCircle className="map-icon" /> Interacción
                    </div>
                    <button className="map-link" onClick={() => navigate('/quiz')}>
                        Quiz
                    </button>
                </div>

                {/* Soporte */}
                <div className="map-section">
                    <div className="map-section-title">
                        <FaHandsHelping className="map-icon" /> Soporte
                    </div>
                    <button className="map-link" onClick={() => navigate('/contacto')}>
                        Contacto
                    </button>
                    <button className="map-link" onClick={() => navigate('/ayuda')}>
                        Ayuda
                    </button>
                    <button className="map-link" onClick={() => navigate('/terminos')}>
                        <FaFileAlt className="map-icon" /> Términos
                    </button>
                </div>

                {/* Navegación */}
                <div className="map-section">
                    <div className="map-section-title">
                        <FaMapMarkedAlt className="map-icon" /> Navegación
                    </div>
                    <button className="map-link" onClick={() => navigate('/map')}>
                        Mapa de la aplicación
                    </button>
                </div>
            </div>
            <div className="map-relations">
                <p>Desde cualquier sección puedes volver a Inicio usando el menú o el footer.</p>
            </div>
        </div>
    );
}

export default Map;