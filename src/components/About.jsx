import React from "react";

export default function About() {
  // Cambiado a bg-dark para igualar el color
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-5">
         <h2 className="fw-bold mt-3">ABOUT<span className="text-warning"> ME</span></h2>
        </div>

        <div className="row align-items-center">
          {/* 📷 Foto izquierda */}
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img
  src="/foto_1.png"
  alt="Ashutosh Yadav - Fullstack Developer"
  className="img-fluid rounded shadow-lg"
  loading="lazy"  // ← Añade lazy loading
  width="300"     // ← Define dimensiones
  height="300"
/>
          </div>

          {/* 📄 Info derecha */}
          <div className="col-md-7">
            <h3 className="fw-bold mb-3">Hi There! I'm <span className="text-warning">Ashutosh Yadav</span></h3>
            <h5 className="text-warning mb-3">Fullstack Developer</h5>
            <p className="text-secondary mb-4">
              I'm a Fullstack Developer passionate about building robust web applications. Proficient in modern front-end frameworks (React, Angular, Vue.js), back-end languages (Node.js, Python, Ruby on Rails), and various databases (SQL, NoSQL). Skilled in API design, cloud platforms, and collaborative development. Eager to deliver high-quality, impactful solutions.
            </p>

            {/* Datos estilo tabla */}
            <div className="row">
            
              <div className="col-md-6">
                <ul className="list-unstyled text-secondary">
                <li><strong>Email:</strong> ashutoshy595@gmail.com</li>
<li><strong>Teléfono:</strong> 632 253 220</li>
<li><strong>Ubicación:</strong> Reus, Tarragona</li>
<li><strong>Idiomas:</strong> Español, Catalán, Inglés, Hindi, Bhojpuri</li>
                </ul>
              </div>
            </div>

            {/* Botón de descarga CV */}
            <a
            id="resume"
              href="/cv.pdf"
              download
              className="btn btn-warning mt-3 fw-bold px-4"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
