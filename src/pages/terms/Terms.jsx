import React from 'react';
import './Terms.css';

const Terms = () => {
    return (
        <div className="terms-container">
            <h1 className="terms-title">Términos y Condiciones</h1>

            <section className="terms-section">
                <p>
                    Bienvenido a nuestra página de términos y condiciones. Este proyecto, <strong>CardioXplore3D</strong>,
                    es una iniciativa desarrollada por un equipo de cuatro entusiastas de la programación. Aunque no somos
                    expertos en salud, hemos creado esta plataforma con el objetivo de ofrecer una experiencia representativa
                    y educativa utilizando modelos 3D.
                </p>
            </section>

            <section className="terms-section">
                <h2 className="terms-subtitle">Propósito del Proyecto</h2>
                <p>
                    CardioXplore3D es una herramienta diseñada para explorar y visualizar modelos tridimensionales relacionados
                    con el sistema cardiovascular. Nuestro objetivo principal es proporcionar una experiencia interactiva y educativa
                    para estudiantes, profesionales y cualquier persona interesada en aprender más sobre este tema.
                </p>
            </section>

            <section className="terms-section">
                <h2 className="terms-subtitle">Limitaciones y Condiciones de Uso</h2>
                <p>
                    CardioXplore3D es una plataforma con fines educativos que busca ofrecer una representación visual e interactiva del sistema cardiovascular.
                    Sin embargo, la información y los modelos 3D que se presentan son referenciales y no deben ser utilizados como fuente médica o científica.
                </p>
                <p>
                    El contenido de esta plataforma no reemplaza el diagnóstico, tratamiento ni orientación de profesionales de la salud. Recomendamos
                    encarecidamente consultar con especialistas para cualquier cuestión relacionada con tu salud.
                </p>
                <p>
                    Al utilizar CardioXplore3D, aceptas estos términos y te comprometes a utilizar la información de manera responsable.
                </p>
            </section>

            <section className="terms-section">
                <h2 className="terms-subtitle">Contacto</h2>
                <p>
                    Si tienes preguntas, sugerencias o comentarios, puedes
                    comunicarte con nosotros a través de nuestros canales de contacto. Tu opinión es valiosa para mejorar CardioXplore3D.
                </p>
            </section>
        </div>
    );
};

export default Terms;
