

import '../../styles/Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Header, Button, Segment, Icon, Grid, Divider } from 'semantic-ui-react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../../assets/images/logo/ClinicaMED002.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function DashboardAdmin() {

  const navigate = useNavigate();

  const handleGerenciarUsuarios = () => navigate('/admin/usuarios');
  const handleGerenciarMedicos = () => navigate('/admin/medicos');
  const handleGerenciarConsultas = () => navigate('/admin/consultas');
  const handleEditarPerfil = () => navigate('/admin/perfil'); // NOVO
  const handleLogout = () => {
    // Exemplo: localStorage.removeItem('token');
    navigate('/login');
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

      {/* Conteúdo Principal */}
      <Container style={{ marginTop: '3em', marginBottom: '3em' }}>

        <Header as="h2" textAlign="center" style={{ marginBottom: '1em', padding: '1em' }}>
          <Icon name="user shield" />
          <Header.Content>Bem-vindo(a), Administrador(a)</Header.Content>
        </Header>

        <Divider />

        <Segment padded raised color="blue">
          
          <Grid columns={5} stackable textAlign="center" padded="vertically">

            <Grid.Row>

              <Grid.Column>
                <Button
                  icon
                  labelPosition="left"
                  color="violet"
                  fluid
                  size="large"
                  onClick={handleGerenciarUsuarios}
                >
                  <Icon name="users" />
                  PACIENTES
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Button
                  icon
                  labelPosition="left"
                  color="blue"
                  fluid
                  size="large"
                  onClick={handleGerenciarMedicos}
                >
                  <Icon name="stethoscope" />
                  MÉDICOS
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Button
                  icon
                  labelPosition="left"
                  color="green"
                  fluid
                  size="large"
                  onClick={handleGerenciarConsultas}
                >
                  <Icon name="calendar check" />
                  CONSULTAS
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Button
                  icon
                  labelPosition="left"
                  color="teal"
                  fluid
                  size="large"
                  onClick={handleEditarPerfil}
                >
                  <Icon name="edit" />
                  MEU PERFIL
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Button
                  icon
                  labelPosition="left"
                  color="red"
                  fluid
                  size="large"
                  onClick={handleLogout}
                >
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

