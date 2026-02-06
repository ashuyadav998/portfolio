import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mt-3" style={{ fontFamily: 'Playfair Display', fontSize: '3rem' }}>
            ABOUT <span className="gradient-text">ME</span>
          </h2>
          <div className="d-flex justify-content-center mt-3">
            <div style={{ width: '70px', height: '5px', background: 'linear-gradient(90deg, #ffc107, #ff9800)', borderRadius: '3px' }}></div>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0" data-aos="fade-right">
            <div className="position-relative d-inline-block">
              <div 
                className="position-absolute w-100 h-100 rounded" 
                style={{
                  top: '12px',
                  left: '12px',
                  background: 'linear-gradient(135deg, #ffc107, #ff9800)',
                  zIndex: '0',
                  opacity: '0.7'
                }}
              ></div>
              <img
                src="/foto_1.png"
                alt="Ashutosh Yadav - Fullstack Developer"
                className="img-fluid rounded shadow-lg position-relative"
                loading="lazy"
                width="350"
                height="350"
                style={{ 
                  zIndex: '1',
                  border: '5px solid #1a1a1a',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>
          
          <div className="col-md-8" data-aos="fade-left">
            <h3 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}>
              Hi There! I'm <span className="gradient-text">Ashutosh Yadav</span>
            </h3>
            <h5 className="text-warning mb-4" style={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '1.3rem' }}>
              💻 Fullstack Developer
            </h5>
            
            <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.9', fontFamily: 'Outfit' }}>
              Fullstack Developer with a degree in <strong className="text-white">Web Application Development</strong> and hands-on experience 
              in <strong className="text-white">React, Angular, Node.js, PHP</strong>, and <strong className="text-white">Oracle/MySQL</strong> databases. 
              I worked at <strong className="text-warning">Inetum</strong> as a junior programmer developing modern web applications. 
              Currently working as an IT technician at <strong className="text-warning">Noneotech</strong>. 
              Passionate about creating robust, scalable, and user-centered web solutions.
            </p>
            
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center p-3 rounded modern-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                  <span className="me-3" style={{ fontSize: '1.6rem' }}>📧</span>
                  <div>
                    <small className="text-warning d-block" style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: 'Outfit', fontWeight: '700' }}>Email</small>
                    <a href="mailto:ashutoshy595@gmail.com" className="text-white text-decoration-none" style={{ fontSize: '0.9rem', fontFamily: 'Outfit' }}>
                      ashutoshy595@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="d-flex align-items-center p-3 rounded modern-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                  <span className="me-3" style={{ fontSize: '1.6rem' }}>📱</span>
                  <div>
                    <small className="text-warning d-block" style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: 'Outfit', fontWeight: '700' }}>Phone</small>
                    <a href="tel:+34632253220" className="text-white text-decoration-none" style={{ fontSize: '0.9rem', fontFamily: 'Outfit' }}>
                      +34 632 253 220
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="d-flex align-items-center p-3 rounded modern-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                  <span className="me-3" style={{ fontSize: '1.6rem' }}>📍</span>
                  <div>
                    <small className="text-warning d-block" style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: 'Outfit', fontWeight: '700' }}>Location</small>
                    <span className="text-white" style={{ fontSize: '0.9rem', fontFamily: 'Outfit' }}>Reus, Tarragona, Spain</span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="d-flex align-items-center p-3 rounded modern-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                  <span className="me-3" style={{ fontSize: '1.6rem' }}>🌍</span>
                  <div>
                    <small className="text-warning d-block" style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: 'Outfit', fontWeight: '700' }}>Languages</small>
                    <span className="text-white" style={{ fontSize: '0.9rem', fontFamily: 'Outfit' }}>Spanish, Catalan, English, Hindi</span>
                  </div>
                </div>
              </div>
            </div>
            
            <a
              href="/cv.pdf"
              download="CV_Ashutosh_Yadav.pdf"
              className="btn btn-warning mt-3 fw-bold px-5 py-3"
              style={{ fontFamily: 'Outfit', letterSpacing: '0.8px', fontSize: '1rem' }}
            >
              <span className="me-2">📥</span> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}