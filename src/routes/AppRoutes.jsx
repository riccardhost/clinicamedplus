

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas principais
import Home from '../pages/Home';
import Especialidades from '../pages/Especialidades';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import NotFound from '../pages/NotFound';

// Dashboards
import DashboardPaciente from '../pages/dashboards/DashboardPaciente';
import DashboardMedico from '../pages/dashboards/DashboardMedico';
import DashboardAdmin from '../pages/dashboards/DashboardAdmin'; // ← Este não está na sua estrutura! Crie ou remova.

// Funcionalidades
import EditarPerfil from '../pages/funcionalidades/EditarPerfil'; // ← Este arquivo não apareceu na estrutura. Crie ou remova.
import EditarPerfilMedico from '../pages/funcionalidades/EditarPerfilMedico'; // ← Também não apareceu.
import AgendarConsulta from '../pages/funcionalidades/AgendarConsulta';
import Agendamento from '../pages/funcionalidades/Agendamento';
import ConsultasMedico from '../pages/funcionalidades/ConsultasMedico'; // ← Também não apareceu.

// Admin Pages
import AdminUsuarios from '../pages/admin/AdminUsuarios';
import AdminMedicos from '../pages/admin/AdminMedicos'; // OBS: o nome do arquivo é `AdminMedico.jsx`, não `AdminMedicos.jsx`.
import AdminConsultas from '../pages/admin/AdminConsultas';

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Páginas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Dashboards */}
        <Route path="/paciente" element={<DashboardPaciente />} />
        <Route path="/medico" element={<DashboardMedico />} />
        <Route path="/admin" element={<DashboardAdmin />} />

        {/* Funcionalidades */}
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/editar-perfil-medico" element={<EditarPerfilMedico />} />
        <Route path="/consultas-medico" element={<ConsultasMedico />} />
        <Route path="/agendar" element={<AgendarConsulta />} />
        <Route path="/agendamento" element={<Agendamento />} />

        {/* Admin Pages */}
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/medicos" element={<AdminMedicos />} />
        <Route path="/admin/consultas" element={<AdminConsultas />} />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}
