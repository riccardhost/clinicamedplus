

import '../../styles/Home.css';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Table, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../../assets/images/logo/ClinicaMED002.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function AdminConsultas() {

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

      {/* Página de Consultas */}
      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>
        <Header as="h2" textAlign="center">
          Gerenciar Consultas
        </Header>

        <Segment padded>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Paciente</Table.HeaderCell>
                <Table.HeaderCell>Especialidade</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Horário</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Ações</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {/* Adicionar dados de consultas aqui */}
              <Table.Row>
                <Table.Cell>João Silva</Table.Cell>
                <Table.Cell>Cardiologia</Table.Cell>
                <Table.Cell>15/05/2025</Table.Cell>
                <Table.Cell>10:00</Table.Cell>
                <Table.Cell>Confirmada</Table.Cell>
                <Table.Cell>
                  <Button color="blue">Ver Detalhes</Button>
                  <Button color="red">Cancelar</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Container>

      {/* Footer */}
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
