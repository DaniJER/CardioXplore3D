import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-button">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;