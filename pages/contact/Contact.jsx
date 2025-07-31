import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Mensaje enviado correctamente');
        // Limpiar formulario después del envío
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ingresa tu nombre completo"
                        required
                        autoComplete="name"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@gmail.com"
                        required
                        autoComplete="email"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        required
                    />
                </div>
                
                <button type="submit" className="submit-button">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;