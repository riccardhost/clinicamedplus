

import '../../styles/Home.css';
import '../../styles/Form.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  Form,
  Button,
  Header,
  Icon,
  Message,
  Container,
  Segment,
} from 'semantic-ui-react';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../../assets/images/logo/ClinicaMED002.png';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// import axios from 'axios'; // Descomente ao integrar com backend

export default function Paciente() {

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
  });

  const [salvo, setSalvo] = useState(false);

  // Simula carregamento do perfil (você substituirá isso por chamada ao backend)
  useEffect(() => {
    // axios.get('/api/pacientes/1').then((res) => setForm(res.data));
    const perfilSimulado = {
      nome: 'João da Silva',
      email: 'joao@email.com',
      telefone: '(11) 91234-5678',
      cpf: '123.456.789-00',
    };
    setForm(perfilSimulado);
  }, []);

  const handleChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    // axios.put('/api/pacientes/1', form).then(() => setSalvo(true));
    console.log('Perfil atualizado:', form);
    setSalvo(true);
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

    <Container style={{ marginTop: '3em', marginBottom: '3em'  }}>

      <Header as="h2" icon textAlign="center">
        <Icon name="user edit" />
          Editar Perfil
        <Header.Subheader>
            Atualize seus dados pessoais abaixo
        </Header.Subheader>

      </Header>

      <br />

      <Segment padded='very' style={{ maxWidth: '500px', margin: '0 auto' }}>

        <Form onSubmit={handleSubmit}>

          <Form.Input
            label="Nome completo"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />

          <Form.Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Form.Input
            label="Telefone"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            required
          />

          <Form.Input
            label="CPF"
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
            required
          />

          <Button primary fluid type="submit">SALVAR</Button>

        </Form>

        {salvo && (
          <Message
            success
            header="Perfil atualizado!"
            content="Seus dados foram salvos com sucesso."
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

