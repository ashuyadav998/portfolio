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
              src="https://drive.google.com/file/d/1NJkF_JJTrOEofiYVI9J-bvn6NEYvVPVb/view?usp=sharing"
              alt="Profile"
              className="img-fluid rounded shadow-lg"
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
                  <li><strong className="text-white">Email:</strong> ttechashu@gmail.com</li>
                  <li><strong className="text-white">From:</strong> Spain</li>
                  <li><strong className="text-white">Languages:</strong> Spainish, Catalan, Hindi, Bhojpuri</li>
                  <li><strong className="text-white">Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>

            {/* Botón de descarga CV */}
            <a
            id="resume"
              href="https://drive.google.com/file/d/1c6sksM-8O22vLm_mLxBD0cobxSVRVjbF/view?usp=sharing"
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
