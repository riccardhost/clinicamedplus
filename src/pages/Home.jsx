

import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import cardioImg from '../assets/images/cards/cardiologista.png';
import clinicoImg from '../assets/images/cards/ClinicoGeral.jpg';
import pediaImg from '../assets/images/cards/Pediatria.jpeg';
import dermoImg from '../assets/images/cards/Dermatologia.jpg';
import ginecoImg from '../assets/images/cards/Ginecologia.jpg';
import consultaOn from '../assets/images/banners/consultaOnline.jpg';
import logoImg from '../assets/images/logo/ClinicaMED002.png';

export default function Home() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  return (

    <div className="home-container">

      <header className="header_geral">

        <div className="navbar">

          <div className="logo-container">
            <Link to="/">
              <img src={logoImg} alt="Logo Clínica Online" className="logo" />
            </Link>
          </div>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Início</Link>

            <div
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              
              <Link to="/especialidades" className="dropdown-toggle" onClick={closeMenu}>Especialidades ▾</Link>

              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/especialidades/cardiologia" onClick={closeMenu}>Cardiologia</Link>
                  <Link to="/especialidades/clinico-geral" onClick={closeMenu}>Clínico Geral</Link>
                  <Link to="/especialidades/pediatria" onClick={closeMenu}>Pediatria</Link>
                  <Link to="/especialidades/dermatologia" onClick={closeMenu}>Dermatologia</Link>
                  <Link to="/especialidades/ginecologia" onClick={closeMenu}>Ginecologia</Link>
                </div>
              )}
            </div>

            <Link to="/login" onClick={closeMenu}>Login</Link>
            <Link to="/cadastro" className="btn-cadastro" onClick={closeMenu}>Cadastro</Link>
          </nav>
        </div>
      </header>

      <section className="hero modern-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Cuide da sua saúde<br />
              <span className="highlight">sem sair de casa</span>
            </h1>
            <p>Agende consultas com especialistas de forma rápida e segura, direto do seu celular ou computador.</p>
            <Link to="/cadastro" className="btn-hero">
              CADASTRE-SE AQUI! 
              <span className="arrow">→</span>
            </Link>
          </div>

          <div className="hero-image">
            <img src={consultaOn} alt="Consulta médica online" />
          </div>
        </div>
      </section>

      <section className="especialidades">

          <h2>Conheça nossas especialidades</h2>
          <p>Profissionais qualificados para atender você com excelência.</p>

          <div className="cards">
            <div className="card">
              <img src={cardioImg} alt="Cardiologia" />
              <h4>Cardiologia</h4>
              <p>Diagnóstico e tratamento de doenças do coração e sistema circulatório.</p>
            </div>
            <div className="card">
              <img src={clinicoImg} alt="Clínico Geral" />
              <h4>Clínico Geral</h4>
              <p>Atendimento inicial e acompanhamento de problemas de saúde comuns.</p>
            </div>
            <div className="card">
              <img src={pediaImg} alt="Pediatria" />
              <h4>Pediatria</h4>
              <p>Cuidados médicos para crianças e adolescentes desde o nascimento até os 18 anos.</p>
            </div>
            <div className="card">
              <img src={dermoImg} alt="Dermatologia" />
              <h4>Dermatologia</h4>
              <p>Tratamento de doenças da pele, cabelos, unhas e mucosas.</p>
            </div>
            <div className="card">
              <img src={ginecoImg} alt="Ginecologia" />
              <h4>Ginecologia</h4>
              <p>Saúde da mulher com foco no sistema reprodutor e prevenção de doenças.</p>
            </div>
          </div>

        </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Contato</h4>
            <p><FaPhoneAlt /> (11) 99999-9999</p>
            <p><FaEnvelope /> contato@clinicaonline.com</p>
          </div>

          <div className="footer-section">
            <h4>Atendimento</h4>
            <p>Seg a Sex: 08h - 18h</p>
            <p>Sáb: 08h - 12h</p>
          </div>

          <div className="footer-section-social">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Clínica Med Online. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

