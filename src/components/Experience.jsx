import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Tècnic Informàtic",
    company: "Noneotech",
    location: "Lleida",
    period: "Noviembre 2025 - Actualidad",
    description: "Instalación y configuración de sistemas operativos. Reparación de ordenadores y equipos informáticos. Soporte técnico a clientes.",
    type: "work"
  },
  {
    title: "Responsable de tienda y encargado",
    company: "SUMA Supermercat",
    location: "Lleida",
    period: "Agosto 2023 - Actualidad",
    description: "Gestión completa de la tienda. Supervisión de personal. Atención al cliente. Control de inventario y caja.",
    type: "work"
  },
  {
    title: "Programador Junior",
    company: "Inetum",
    location: "Tarragona",
    period: "Abril 2023 - Agosto 2023",
    description: "Desarrollo de aplicaciones web con React, Angular y PHP. Trabajo con bases de datos Oracle y MySQL. Colaboración en proyectos de equipo.",
    type: "work"
  },
  {
    title: "Programador Junior (Prácticas Dual)",
    company: "Inetum",
    location: "Tarragona",
    period: "Julio 2022 - Abril 2023",
    description: "Prácticas duales como programador junior. Desarrollo de módulos web. Aprendizaje de metodologías ágiles.",
    type: "work"
  },
  {
    title: "Cajero y Responsable",
    company: "SUMA Supermercat",
    location: "Reus",
    period: "Junio 2021 - Agosto 2021",
    description: "Atención al cliente en caja. Gestión de responsabilidades de turno. Control de stock.",
    type: "work"
  }
];

const education = [
  {
    title: "Desarrollo de Aplicaciones Web (DAW)",
    institution: "Institut Baix Camp",
    location: "Reus",
    period: "2021 - 2023",
    description: "Ciclo Formativo de Grado Superior. Especialización en desarrollo web front-end y back-end.",
    type: "education"
  },
  {
    title: "Sistemas Microinformáticos y Redes (SMX)",
    institution: "Institut Baix Camp",
    location: "Reus",
    period: "2020 - 2021",
    description: "Ciclo Formativo de Grado Medio. Titulación en sistemas informáticos y redes.",
    type: "education"
  },
  {
    title: "Sistemas Microinformáticos y Redes",
    institution: "Institut Antoni Ballester",
    location: "Mont-roig",
    period: "2018 - 2019",
    description: "Primer año del ciclo formativo.",
    type: "education"
  },
  {
    title: "Educación Secundaria Obligatoria (ESO)",
    institution: "Institut Baix Camp",
    location: "Reus",
    period: "2019 - 2020",
    description: "Graduado en Educación Secundaria Obligatoria.",
    type: "education"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-dark text-white">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mt-3">
            Mi <span className="text-warning">Trayectoria</span>
          </h2>
          <p className="text-secondary">
            Experiencia profesional y formación académica
          </p>
        </div>

        <div className="row">
          {/* Columna Experiencia Laboral */}
          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-4" data-aos="fade-right">
              <FaBriefcase className="text-warning me-3" size={30} />
              <h3 className="fw-bold mb-0">Experiencia Laboral</h3>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card bg-dark border border-secondary mb-3 shadow"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title text-warning fw-bold mb-1">
                      {exp.title}
                    </h5>
                    <span className="badge bg-secondary text-white small">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h6 className="text-white mb-2">
                    {exp.company} · {exp.location}
                  </h6>
                  
                  <p className="card-text text-secondary small mb-0">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Formación */}
          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-4" data-aos="fade-left">
              <FaGraduationCap className="text-warning me-3" size={30} />
              <h3 className="fw-bold mb-0">Formación</h3>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="card bg-dark border border-secondary mb-3 shadow"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title text-warning fw-bold mb-1">
                      {edu.title}
                    </h5>
                    <span className="badge bg-secondary text-white small">
                      {edu.period}
                    </span>
                  </div>
                  
                  <h6 className="text-white mb-2">
                    {edu.institution} · {edu.location}
                  </h6>
                  
                  <p className="card-text text-secondary small mb-0">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-5" data-aos="fade-up">
          <h3 className="fw-bold text-center mb-4">
            <span className="text-warning">Tecnologías</span> y Herramientas
          </h3>
          
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "PHP", "Java", "MySQL", "Oracle", "MongoDB", "Tailwind CSS", "Bootstrap", "Git", "Express"].map((skill, i) => (
              <span
                key={i}
                className="badge bg-secondary text-white p-3"
                style={{ fontSize: "1rem" }}
                data-aos="zoom-in"
                data-aos-delay={i * 50}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}