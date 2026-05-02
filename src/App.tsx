import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import StudentPortal from './pages/StudentPortal'
import AdminDashboard from './pages/AdminDashboard'
import ToolsPage from './pages/ToolsPage'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portal" element={<StudentPortal />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
