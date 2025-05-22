

import '../../styles/Home.css';
import '../../styles/Form.css';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  Header,
  Dropdown,
  Message,
  Icon
} from 'semantic-ui-react';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../../assets/images/logo/ClinicaMED002.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const especialidades = [
  { key: 'cardio', text: 'Cardiologia', value: 'Cardiologia' },
  { key: 'clinico', text: 'Clínico Geral', value: 'Clínico Geral' },
  { key: 'pediatria', text: 'Pediatria', value: 'Pediatria' },
  { key: 'dermato', text: 'Dermatologia', value: 'Dermatologia' },
  { key: 'gineco', text: 'Ginecologia', value: 'Ginecologia' }
];

export default function AgendarConsulta() {

const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  const [form, setForm] = useState({
    especialidade: '',
    data: '',
    horario: ''
  });
  const [agendado, setAgendado] = useState(false);

  const handleChange = (e, { name, value }) => {
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Consulta agendada:', form);
    // Aqui você faria uma chamada à API usando axios.
    setAgendado(true);
    setForm({ especialidade: '', data: '', horario: '' });
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

          <Header as="h2" icon textAlign="center">

          <Icon name="calendar plus" />
          
          Agendar Consulta

          <Header.Subheader>Escolha a especialidade, data e horário desejados.</Header.Subheader>
    
          <br />

          </Header>

          <Form onSubmit={handleSubmit}>

          <Form.Field required>
              
              <label>Especialidade</label>
              <Dropdown
              placeholder="Selecione a especialidade"
              fluid
              selection
              options={especialidades}
              name="especialidade"
              value={form.especialidade}
              onChange={handleChange}
              />
          </Form.Field>

          <Form.Input
              label="Data"
              type="date"
              name="data"
              value={form.data}
              onChange={(e) => handleChange(e, { name: 'data', value: e.target.value })}
              required
          />

          <Form.Input
              label="Horário"
              type="time"
              name="horario"
              value={form.horario}
              onChange={(e) => handleChange(e, { name: 'horario', value: e.target.value })}
              required
          />

          <Button type="submit" primary fluid aria-label="Confirmar agendamento">
              Confirmar Agendamento
          </Button>
          </Form>

          {agendado && (
          <Message success header="Sucesso!" content="Consulta agendada com sucesso." />
          )}
      </div>
    </section>

    <br />
    <br />
  
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
