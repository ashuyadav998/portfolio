import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white hero-dark position-relative"
    >
      <div className="content">
        {/* Nombre principal */}
        <h1 className="display-1 fw-bold mb-3 fade-in">
          Ashutosh Yadav
        </h1>

        {/* Título animado */}
        <h2 className="fs-2 text-warning typing">
          Fullstack Developer
        </h2>

        {/* Links sociales */}
        <div className="d-flex justify-content-center gap-3 mt-4 fade-in delay-2">
          <a href="https://www.linkedin.com/in/ashutosh-yadav-02134231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-circle"><FaLinkedin /></a>
          <a href="https://github.com/ashuyadav0" className="social-circle"><FaGithub /></a>
          <a href="https://www.instagram.com/iashuyadav_0?igsh=MXhrOGQ0dzE1dzNrbQ%3D%3D&utm_source=qr" className="social-circle"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
}
