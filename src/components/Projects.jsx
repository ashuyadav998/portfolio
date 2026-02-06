import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Makhana Shop",
    description: "E-commerce completo con carrito de compras, gestión de productos, autenticación de usuarios y procesamiento de pagos. Incluye panel de administración para gestión de inventario.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "CORS"],
    github: "https://github.com/ashuyadav998/ashu-shop.git",
    demo: "https://ashu-shop.netlify.app/",
    featured: true
  },
  {
    title: "Proyecto 2",
    description: "Añade aquí tu segundo proyecto. Edita el título, descripción, tecnologías y enlaces.",
    tech: ["Angular", "PHP", "MySQL"],
    github: "https://github.com/ashuyadav0/tu-proyecto-2",
    demo: null, // Si no tienes demo, déjalo como null
    featured: false
  },
  {
    title: "Proyecto 3",
    description: "Añade aquí tu tercer proyecto. Puede ser cualquier trabajo que hayas realizado.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ashuyadav0/tu-proyecto-3",
    demo: null,
    featured: false
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-dark text-white">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mt-3">
            Mis <span className="text-warning">Proyectos</span>
          </h2>
          <p className="text-secondary">
            Algunos de los trabajos que he desarrollado recientemente.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="card h-100 border-0 shadow project-card bg-dark text-white border border-secondary position-relative">
                {/* Badge de proyecto destacado */}
                {project.featured && (
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark">
                      ⭐ Destacado
                    </span>
                  </div>
                )}
                
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold text-warning mb-3">
                    {project.title}
                  </h5>
                  
                  <p className="card-text text-secondary mb-3 flex-grow-1">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-secondary text-white"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="d-flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-warning flex-fill d-flex align-items-center justify-content-center"
                    >
                      <FaGithub className="me-2" />
                      Código
                    </a>
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-warning flex-fill d-flex align-items-center justify-content-center"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enlace a GitHub perfil */}
        <div className="text-center mt-5" data-aos="fade-up">
          <a
            href="https://github.com/ashuyadav0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning btn-lg"
          >
            <FaGithub className="me-2" />
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}