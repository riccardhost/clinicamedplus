

import '../../styles/Home.css';
import '../../styles/Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Header, Button, Segment, Icon, Grid, Confirm, Divider } from 'semantic-ui-react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import logoImg from '../../assets/images/logo/ClinicaMED002.png';


export default function DashboardPaciente() {

  const [openConfirm, setOpenConfirm] = useState(false);
  const navigate = useNavigate();

  const handleEditar = () => {
    navigate('/editar-perfil'); // Exemplo de rota
  };

  const handleAgendar = () => {
    navigate('/agendar'); // Exemplo de rota
  };

  const handleExcluirConta = () => {
    // Aqui você pode integrar com sua API para deletar
    console.log('Conta excluída!');
    setOpenConfirm(false);
    // Redirecionar após exclusão se necessário
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

          <Container style={{ marginTop: '3em', marginBottom: '3em' }}>

            <Segment padded raised color="blue">

                <Header as="h2" textAlign="center" style={{ marginBottom: '1em', padding: '1em'}}>

                  <Icon name="user circle" />

                  <Header.Content>Bem-vindo(a), Paciente</Header.Content>

                </Header>

                <Divider />

                  <Grid columns={3} stackable textAlign="center">

                    <Grid.Row>
                      
                      <Grid.Column>
                        <Button icon labelPosition="left" color="teal" onClick={handleEditar}>
                          <Icon name="edit" />
                          Editar Perfil
                        </Button>

                      </Grid.Column>

                      <Grid.Column>
                        <Button icon labelPosition="left" color="green" onClick={handleAgendar}>
                          <Icon name="calendar plus" />
                          Agendar Consulta
                        </Button>
                      </Grid.Column>

                      <Grid.Column>
                        <Button icon labelPosition="left" color="red" onClick={() => setOpenConfirm(true)}>
                          <Icon name="trash" />
                          Excluir Conta
                        </Button>

                      </Grid.Column>

                    </Grid.Row>

                  </Grid>

            <Divider />

            <Confirm
              open={openConfirm}
              header="Confirmar exclusão"
              content="Tem certeza que deseja excluir sua conta? Essa ação não poderá ser desfeita."
              onCancel={() => setOpenConfirm(false)}
              onConfirm={handleExcluirConta}
              confirmButton="Sim, excluir"
              cancelButton="Cancelar"
            />

            </Segment>

          </Container>

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
