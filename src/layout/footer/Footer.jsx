import './Footer.css';

function FooterPage() {
  return (
    // inicio footer
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column brand">
          <h3><a className='home' href='/'>CardioXplore3D</a></h3>
        </div>

        <div className="footer-column">
          <h4>Secciones</h4>
          <ul>
            <li><a href='/'>Inicio</a></li>
            <li><a href='/enfermedades'>Enfermedades</a></li>
            <li><a href='/quiz'>Quiz</a></li>
            <li><a href='/nosotros'>Nosotros</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Soporte</h4>
          <ul>
            <li><a href='/contacto'>Contacto</a></li>
            <li><a href='/ayuda'>Ayuda</a></li>
            <li><a href='/terminos'>Términos</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Redes</h4>
          <ul>
            <li><a href='https://github.com/DaniJER/CardioXplore3D' target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href='https://github.com/DaniJER/CardioXplore3D' target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href='https://github.com/DaniJER/CardioXplore3D' target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
    // fin footer
  );
}

export default FooterPage;
