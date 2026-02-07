import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "IT Technician",
    company: "Noneotech and Seidor",
    location: "Lleida",
    period: "November 2025 - Present",
    description: "Installation and configuration of operating systems. Computer and IT equipment repair. Technical support to clients.",
    type: "work"
  },
  {
    title: "Store Manager & Supervisor",
    company: "SUMA Supermarket",
    location: "Lleida",
    period: "August 2023 - Present",
    description: "Complete store management. Staff supervision. Customer service. Inventory and cash control.",
    type: "work"
  },
  {
    title: "Junior Programmer",
    company: "Inetum",
    location: "Tarragona",
    period: "April 2023 - August 2023",
    description: "Web application development with React, Angular, and PHP. Work with Oracle and MySQL databases. Team project collaboration.",
    type: "work"
  },
  {
    title: "Junior Programmer (Dual Internship)",
    company: "Inetum",
    location: "Tarragona",
    period: "July 2022 - April 2023",
    description: "Dual internship as junior programmer. Web module development. Learning agile methodologies.",
    type: "work"
  }
];

const education = [
  {
    title: "Web Application Development (DAW)",
    institution: "Institut Baix Camp",
    location: "Reus",
    period: "2021 - 2023",
    description: "Higher Level Training Cycle. Specialization in front-end and back-end web development.",
    type: "education"
  },
  {
    title: "Microcomputer Systems and Networks (SMX)",
    institution: "Institut Baix Camp",
    location: "Reus",
    period: "2020 - 2021",
    description: "Medium Level Training Cycle. Degree in computer systems and networks.",
    type: "education"
  },
  {
    title: "Microcomputer Systems and Networks",
    institution: "Institut Antoni Ballester",
    location: "Mont-roig",
    period: "2018 - 2019",
    description: "First year of training cycle.",
    type: "education"
  },
  {
  title: "High School",
    institution: "Institut Baix Camp",
    location: "Reus",
    period: "2017 - 2019",
    description: "Compulsory Secondary Education.",
    type: "education"
  },
  {
  title: "Primary School",
    institution: "Gyan Kunj Senior Sec. Academy Bansi Bazar Ballia",
    location: "Bansi Bazar - Ballia",
    period: "2017 - 2019",
    description: "Compulsory Primary Education.",
    type: "education"
  },

];

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mt-3" style={{ fontFamily: 'Playfair Display', fontSize: '3rem' }}>
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.15rem', fontFamily: 'Outfit' }}>
            Professional experience and academic background
          </p>
          <div className="d-flex justify-content-center mt-3">
            <div style={{ width: '70px', height: '5px', background: 'linear-gradient(90deg, #ffc107, #ff9800)', borderRadius: '3px' }}></div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-4" data-aos="fade-right">
              <FaBriefcase className="text-warning me-3" size={35} />
              <h3 className="fw-bold mb-0" style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}>Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card bg-dark border mb-3 shadow modern-card"
                style={{ borderColor: '#2a2a2a !important' }}
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap">
                    <h5 className="card-title text-warning fw-bold mb-1" style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem' }}>
                      {exp.title}
                    </h5>
                    <span className="badge bg-secondary text-white" style={{ fontFamily: 'Outfit', fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                      {exp.period}
                    </span>
                  </div>
                  
                  <h6 className="text-white mb-3" style={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '1rem' }}>
                    {exp.company} · {exp.location}
                  </h6>
                  
                  <p className="card-text text-secondary mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7', fontFamily: 'Outfit' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-4" data-aos="fade-left">
              <FaGraduationCap className="text-warning me-3" size={35} />
              <h3 className="fw-bold mb-0" style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}>Education</h3>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="card bg-dark border mb-3 shadow modern-card"
                style={{ borderColor: '#2a2a2a !important' }}
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap">
                    <h5 className="card-title text-warning fw-bold mb-1" style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem' }}>
                      {edu.title}
                    </h5>
                    <span className="badge bg-secondary text-white" style={{ fontFamily: 'Outfit', fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                      {edu.period}
                    </span>
                  </div>
                  
                  <h6 className="text-white mb-3" style={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '1rem' }}>
                    {edu.institution} · {edu.location}
                  </h6>
                  
                  <p className="card-text text-secondary mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7', fontFamily: 'Outfit' }}>
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5" data-aos="fade-up">
          <h3 className="fw-bold text-center mb-4" style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}>
            <span className="gradient-text">Technologies</span> & Tools
          </h3>
          
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "PHP", "Java", "MySQL", "Oracle", "MongoDB", "Tailwind CSS", "Bootstrap", "Git", "Express"].map((skill, i) => (
              <span
                key={i}
                className="badge bg-secondary text-white skill-badge"
                style={{ 
                  fontSize: '1rem', 
                  padding: '0.7rem 1.3rem',
                  fontFamily: 'Outfit',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                data-aos="zoom-in"
                data-aos-delay={i * 30}
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