

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
import Admin from '../pages/admin/Admin';

import Paciente from '../pages/paciente/Paciente'; 
import AgendarConsulta from '../pages/paciente/AgendarConsulta';

import Medico from '../pages/medico/Medico'; 
import Consultas from '../pages/medico/Consultas'; 

import Agendamento from '../pages/funcionalidades/Agendamento';

// Admin Pages
import AdminUsuarios from '../pages/admin/AdminUsuarios';
import AdminMedicos from '../pages/admin/AdminMedicos';
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
        <Route path="/paciente/perfil" element={<Paciente />} />
        <Route path="/paciente/agendar" element={<AgendarConsulta />} />

        <Route path="/medico/perfil" element={<Medico />} />
        <Route path="/medico/consultas" element={<Consultas />} />
        
        <Route path="/agendamento" element={<Agendamento />} />

        {/* Admin Pages */}
        <Route path="/admin/perfil" element={<Admin />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/medicos" element={<AdminMedicos />} />
        <Route path="/admin/consultas" element={<AdminConsultas />} />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}
