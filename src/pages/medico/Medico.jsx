

import '../../styles/Form.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Header,
  Segment,
  Button,
  Dropdown,
  Icon,
  Message
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

export default function Medico() {
  const navigate = useNavigate();

  // Dados simulados do médico - substitua por dados da API
  const [form, setForm] = useState({
    nome: 'Dr. Ana Costa',
    email: 'ana@clinicaonline.com',
    especialidade: 'Dermatologia',
    telefone: '(11) 98765-4321'
  });

  const [salvo, setSalvo] = useState(false);

  const handleChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Dados atualizados:', form);
    // Aqui você pode enviar para a API com axios.put/post
    setSalvo(true);
    setTimeout(() => navigate('/medico'), 2000);
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
        
        <Header as="h2" icon textAlign="center">
          <Icon name="user md" />
          Editar Perfil
          <Header.Subheader>Atualize seus dados de perfil</Header.Subheader>
        </Header>

        <br />

        <Segment padded='very' style={{ maxWidth: '500px', margin: '0 auto' }}>

          <Form onSubmit={handleSubmit}>
            
            <Form.Input
              label="Nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />

            <Form.Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

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
              label="Telefone"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
            />

            <Button type="submit" primary fluid>SALVAR</Button>

          </Form>

          {salvo && (
            <Message
              success
              header="Perfil Atualizado"
              content="As informações foram salvas com sucesso!"
              style={{ marginTop: '1em' }}
            />
          )}

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
