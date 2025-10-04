import React from "react";

const projects = [
  { title: "Proyecto 1", description: "App web con React y Bootstrap" },
  { title: "Proyecto 2", description: "Landing page profesional" },
  { title: "Proyecto 3", description: "Portfolio animado con AOS" },
];

export default function Projects() {
  // Cambiado a bg-dark para igualar el color
  return (
    <section id="projects" className="py-5 bg-dark text-white">
      <div className="container">
        {/* 🔥 Título */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mt-3">Mis <span className="text-warning">Proyectos</span></h2>
          <p className="text-secondary">
            Algunos de los trabajos que he desarrollado recientemente.
          </p>
        </div>

        {/* 🔗 Grid de proyectos */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {/* card con bg-dark */}
              <div className="card h-100 border-0 shadow project-card bg-dark text-white"> 
                <div className="card-body text-center p-4">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-secondary">{project.description}</p>
                  <a href="#" className="btn btn-warning fw-bold mt-2">
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
