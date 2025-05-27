

import '../../styles/Home.css';
import '../../styles/Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Header, Segment, Icon, Button, Grid, Divider } from 'semantic-ui-react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../../assets/images/logo/ClinicaMED002.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function DashboardMedico() {

  const navigate = useNavigate();

  // Dados simulados – depois você pode puxar da API
  const medico = {
    nome: 'Dr. Ana Costa',
    especialidade: 'Dermatologia',
  };

  const handleVerConsultas = () => {
    navigate('/medico/consultas');
  };

  const handleEditarPerfil = () => {
    navigate('/medico/perfil');
  };

  const handleLogout = () => {
    // Aqui você limpa o token/sessão
    navigate('/');
  };

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

        <Container style={{ marginTop: '3em', marginBottom: '3em' }}>

          <Header as="h2" textAlign="center" style={{ marginBottom: '1em', padding: '1em'}}>

            <Icon name="stethoscope" />

            <Header.Content>Bem-vindo(a), {medico.nome}</Header.Content>

          </Header>

          <Divider />

          <Segment padded raised color="red">

            <Grid columns={2} stackable textAlign="center">

              <Grid.Row>

                <Grid.Column>
                  <p><strong>Médico(a):</strong> {medico.nome}</p>
                  <p><strong>Especialidade:</strong> {medico.especialidade}</p>
                </Grid.Column>

                <Grid.Column>

                  <Button icon labelPosition="left" color="blue" onClick={handleVerConsultas}>
                    <Icon name="calendar check" />
                    CONSULTAS AGENDADAS
                  </Button>

                  <Button icon labelPosition="left" color="teal" onClick={handleEditarPerfil} style={{ marginTop: '1em' }}>
                    <Icon name="edit" />
                    MEU PERFIL
                  </Button>

                  <Button icon labelPosition="left" color="red" onClick={handleLogout} style={{ marginTop: '1em' }}>
                    <Icon name="sign-out" />
                    SAIR
                  </Button>

                </Grid.Column>

              </Grid.Row>

            </Grid>
            
          </Segment>

        </Container>
      
      {/* Rodapé */}
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
