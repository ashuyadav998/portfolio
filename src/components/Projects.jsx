import React from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const projects = [
  {
    title: "Makhana Shop",
    description: "Full-featured e-commerce platform with shopping cart, product management, user authentication, and payment processing. Includes admin panel for inventory management and real-time updates.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "CORS"],
    github: "https://github.com/ashuyadav998/ashu-shop.git",
    demo: "https://ashu-shop.netlify.app/",
    featured: true,
    icon: <FaReact size={45} className="text-warning" />
  },
  {
    title: "Your Project 2",
    description: "Add your second project here. Edit the title, description, technologies, and links to showcase your amazing work and skills.",
    tech: ["Angular", "PHP", "MySQL"],
    github: "https://github.com/ashuyadav0/your-project-2",
    demo: null,
    featured: false,
    icon: <FaNode size={45} className="text-warning" />
  },
  {
    title: "Your Project 3",
    description: "Add your third project here. It can be any work you've completed that demonstrates your technical abilities and problem-solving skills.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ashuyadav0/your-project-3",
    demo: null,
    featured: false,
    icon: <SiMongodb size={45} className="text-warning" />
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mt-3" style={{ fontFamily: 'Playfair Display', fontSize: '3rem' }}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.15rem', fontFamily: 'Outfit' }}>
            Some of the recent work I've developed
          </p>
          <div className="d-flex justify-content-center mt-3">
            <div style={{ width: '70px', height: '5px', background: 'linear-gradient(90deg, #ffc107, #ff9800)', borderRadius: '3px' }}></div>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 border-0 shadow project-card bg-dark text-white position-relative" style={{ border: '1px solid #2a2a2a !important', transition: 'all 0.3s ease' }}>
                {project.featured && (
                  <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: '10' }}>
                    <span className="badge text-dark px-3 py-2" style={{ background: 'linear-gradient(90deg, #ffc107, #ff9800)', fontFamily: 'Outfit', fontWeight: '700', fontSize: '0.75rem' }}>
                      ⭐ Featured
                    </span>
                  </div>
                )}
                
                <div className="card-header bg-transparent border-0 pt-4 pb-0 text-center">
                  {project.icon}
                </div>
                
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold mb-3" style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}>
                    {project.title}
                  </h5>
                  
                  <p className="card-text text-secondary mb-3 flex-grow-1" style={{ lineHeight: '1.8', fontSize: '0.95rem', fontFamily: 'Outfit' }}>
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <small className="text-warning d-block mb-2" style={{ fontFamily: 'Outfit', fontWeight: '700', letterSpacing: '1px', fontSize: '0.7rem' }}>
                      TECHNOLOGIES
                    </small>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="badge bg-secondary text-white"
                          style={{ 
                            fontSize: '0.75rem', 
                            padding: '0.45rem 0.9rem',
                            fontFamily: 'Outfit',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-warning flex-fill d-flex align-items-center justify-content-center"
                      style={{ fontFamily: 'Outfit', fontWeight: '700' }}
                    >
                      <FaGithub className="me-2" />
                      Code
                    </a>
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-warning flex-fill d-flex align-items-center justify-content-center"
                        style={{ fontFamily: 'Outfit', fontWeight: '700' }}
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <a
            href="https://github.com/ashuyadav0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning btn-lg px-5 py-3"
            style={{ fontFamily: 'Outfit', fontWeight: '700', letterSpacing: '0.8px' }}
          >
            <FaGithub className="me-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}