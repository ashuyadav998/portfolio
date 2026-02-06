import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white hero-dark position-relative"
    >
      <div className="content position-relative z-1">
        {/* Greeting */}
        <p className="text-uppercase text-warning mb-3 fade-in" style={{ letterSpacing: '4px', fontSize: '0.85rem', fontWeight: '600', fontFamily: 'Outfit' }}>
          Welcome to my world
        </p>

        {/* Main name with glow */}
        <h1 className="display-1 fw-bold mb-3 fade-in glow-text" style={{ fontFamily: 'Playfair Display' }}>
          Ashutosh Yadav
        </h1>

        {/* Animated title */}
        <h2 className="fs-2 gradient-text typing mb-4" style={{ fontFamily: 'Outfit', fontWeight: '700' }}>
          Fullstack Developer
        </h2>

        {/* Description */}
        <p className="text-secondary mb-4 fade-in delay-1" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', fontFamily: 'Outfit', lineHeight: '1.8' }}>
          Crafting modern web experiences with <strong className="text-warning">React</strong>, 
          <strong className="text-warning"> Node.js</strong>, and 
          <strong className="text-warning"> MongoDB</strong>
        </p>

        {/* Social links */}
        <div className="d-flex justify-content-center gap-3 mt-4 fade-in delay-2">
          <a 
            href="https://www.linkedin.com/in/ashutosh-yadav-02134231b" 
            className="social-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/ashuyadav0" 
            className="social-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.instagram.com/iashuyadav_0" 
            className="social-circle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap fade-in delay-2">
          <a 
            href="#projects" 
            className="btn btn-warning btn-lg px-5 py-3"
            style={{ fontFamily: 'Outfit', fontWeight: '700', letterSpacing: '0.5px' }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn btn-outline-warning btn-lg px-5 py-3"
            style={{ fontFamily: 'Outfit', fontWeight: '700', letterSpacing: '0.5px' }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="position-absolute bottom-0 mb-5 fade-in delay-2">
        <a href="#about" className="text-warning text-decoration-none">
          <div className="d-flex flex-column align-items-center">
            <span style={{ fontSize: '0.75rem', letterSpacing: '3px', fontFamily: 'Outfit', fontWeight: '600' }}>SCROLL DOWN</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="mt-2"
              style={{ animation: 'bounce 2s infinite' }}
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}