

import '../styles/Home.css';
import '../styles/Form.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Form, Button} from 'semantic-ui-react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/images/logo/ClinicaMED002.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Login() {

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
              <button className="dropdown-toggle">Especialidades ▾</button>
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

      <section className="form-section">

        <div className="form-card">

          <h2>Entrar na conta</h2>

          <Form>

            <Form.Input
              label="Email"
              type="email"
              placeholder="Digite seu email"
              required
            />

            <Form.Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              required
            />

            <Button primary fluid type="submit">ENTRAR</Button>

          </Form>

          <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>.</p>

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
