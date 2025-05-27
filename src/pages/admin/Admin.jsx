

import '../../styles/Home.css';
import '../../styles/Form.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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

export default function Admin() {
    // Estados do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState(false);

    // Controle do menu responsivo
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => {
        setMenuOpen(false);
        setShowDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do perfil:', { nome, email, telefone, senha });
        setSucesso(true);

        // Exemplo: resetar campos (opcional)
        // setNome('');
        // setEmail('');
        // setTelefone('');
        // setSenha('');
    };

    return (
        <div className="home-container">
            {/* Cabeçalho */}
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

                <Header as="h2" icon textAlign="center">

                        <Icon name="user shield" />
                        Editar Perfil
                        <Header.Subheader>
                            Atualize seus dados pessoais abaixo
                        </Header.Subheader>

                    </Header>

                    <br />

                <Segment padded='very' style={{ maxWidth: '500px', margin: '0 auto' }}>

                    {sucesso && (
                        
                        <Message positive>
                            <Message.Header>Dados atualizados com sucesso!</Message.Header>
                        </Message>
                    )}

                    <Form onSubmit={handleSubmit}>
                        <Form.Input
                            label="Nome"
                            placeholder="Digite seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <Form.Input
                            label="E-mail"
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Form.Input
                            label="Telefone"
                            placeholder="(XX) XXXXX-XXXX"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <Form.Input
                            label="Senha"
                            type="password"
                            placeholder="Digite uma nova senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <Button type="submit" color="blue" fluid size="large" style={{ marginTop: '1em' }}>
                            SALVAR
                        </Button>
                    </Form>
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
