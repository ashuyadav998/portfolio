import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mt-3">ABOUT<span className="text-warning"> ME</span></h2>
        </div>
        
        <div className="row align-items-center">
          {/* 📷 Foto izquierda - RUTA CORREGIDA */}
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img
              src="/foto_1.png"
              alt="Ashutosh Yadav - Fullstack Developer"
              className="img-fluid rounded shadow-lg"
              loading="lazy"
              width="300"
              height="300"
            />
          </div>
          
          {/* 📄 Info derecha - ACTUALIZADA */}
          <div className="col-md-7">
            <h3 className="fw-bold mb-3">
              Hi There! I'm <span className="text-warning">Ashutosh Yadav</span>
            </h3>
            <h5 className="text-warning mb-3">Fullstack Developer</h5>
            
            <p className="text-secondary mb-4">
              Desarrollador Fullstack graduado en Desarrollo de Aplicaciones Web con experiencia 
              en React, Angular, Node.js, PHP y bases de datos Oracle/MySQL. He trabajado en 
              Inetum como programador junior desarrollando aplicaciones web modernas. 
              Actualmente trabajo como técnico informático en Noneotech. Apasionado por crear 
              soluciones web robustas, escalables y centradas en el usuario.
            </p>
            
            {/* Datos personales actualizados */}
            <div className="row">
              <div className="col-md-12">
                <ul className="list-unstyled text-secondary">
                  <li className="mb-2">
                    <strong className="text-white">📧 Email:</strong> ashutoshy595@gmail.com
                  </li>
                  <li className="mb-2">
                    <strong className="text-white">📱 Teléfono:</strong> 632 253 220
                  </li>
                  <li className="mb-2">
                    <strong className="text-white">📍 Ubicación:</strong> Reus, Tarragona, España
                  </li>
                  <li className="mb-2">
                    <strong className="text-white">🌍 Idiomas:</strong> Español, Catalán, Inglés, Hindi, Bhojpuri
                  </li>
                  <li className="mb-2">
                    <strong className="text-white">💼 Freelance:</strong> Disponible
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Botón de descarga CV - RUTA CORREGIDA */}
            <a
              id="resume"
              href="/cv.pdf"
              download="CV_Ashutosh_Yadav.pdf"
              className="btn btn-warning mt-3 fw-bold px-4"
            >
              📥 Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}