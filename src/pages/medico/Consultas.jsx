


import '../../styles/Home.css';
import '../../styles/Form.css';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Table,
  Icon,
  Segment,
  Button,
  Modal
} from 'semantic-ui-react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../../assets/images/logo/ClinicaMED002.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Consultas() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [consultaSelecionada, setConsultaSelecionada] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  const abrirModal = (consulta) => {
    setConsultaSelecionada(consulta);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setConsultaSelecionada(null);
    setModalAberto(false);
  };

  // Simulação de dados – depois substituir com dados reais da API
  const consultas = [
    {
      id: 1,
      paciente: 'João Silva',
      data: '2025-05-15',
      horario: '10:00',
      especialidade: 'Cardiologia'
    },
    {
      id: 2,
      paciente: 'Maria Oliveira',
      data: '2025-05-16',
      horario: '14:30',
      especialidade: 'Dermatologia'
    },
    {
      id: 3,
      paciente: 'Carlos Souza',
      data: '2025-05-17',
      horario: '11:00',
      especialidade: 'Pediatria'
    },
    {
      id: 4,
      paciente: 'Ana Costa',
      data: '2025-05-18',
      horario: '09:00',
      especialidade: 'Ginecologia'
    },
    {
      id: 5,
      paciente: 'Fernanda Lima',
      data: '2025-05-19',
      horario: '15:00',
      especialidade: 'Clínico Geral'
    }
  ];

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

        <Header as="h2" icon textAlign="center">
          <Icon name="calendar check" />
          Consultas Agendadas
          <Header.Subheader>Veja a lista de pacientes com consultas marcadas.</Header.Subheader>
          <br />
        </Header>

        <Segment padded color="blue">
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Paciente</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Horário</Table.HeaderCell>
                <Table.HeaderCell>Especialidade</Table.HeaderCell>
                <Table.HeaderCell>Ações</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {consultas.map((consulta) => (
                <Table.Row key={consulta.id}>
                  <Table.Cell>{consulta.paciente}</Table.Cell>
                  <Table.Cell>{consulta.data}</Table.Cell>
                  <Table.Cell>{consulta.horario}</Table.Cell>
                  <Table.Cell>{consulta.especialidade}</Table.Cell>
                  <Table.Cell>
                    <Button icon color="blue" size="small" onClick={() => abrirModal(consulta)}>
                      <Icon name="eye" />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          {consultas.length === 0 && (
            <p style={{ textAlign: 'center', marginTop: '1em' }}>
              Nenhuma consulta agendada.
            </p>
          )}

        </Segment>

        {/* Modal de Detalhes da Consulta */}
        <Modal
          open={modalAberto}
          onClose={fecharModal}
          size="small"
          closeIcon
        >
          <Header icon="clipboard outline" content="Detalhes da Consulta" />
          <Modal.Content>
            {consultaSelecionada ? (
              <div>
                <p><strong>Paciente:</strong> {consultaSelecionada.paciente}</p>
                <p><strong>Data:</strong> {consultaSelecionada.data}</p>
                <p><strong>Horário:</strong> {consultaSelecionada.horario}</p>
                <p><strong>Especialidade:</strong> {consultaSelecionada.especialidade}</p>
              </div>
            ) : (
              <p>Carregando detalhes...</p>
            )}
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={fecharModal}>
              <Icon name="remove" /> Fechar
            </Button>
          </Modal.Actions>
        </Modal>

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

