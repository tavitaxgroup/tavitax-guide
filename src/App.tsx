import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { BookOpen, Target, Zap, Briefcase } from 'lucide-react';
import Home from './pages/Home';
import LarkBasics from './pages/LarkBasics';
import MarketingGuide from './pages/MarketingGuide';
import AccountingConsultingGuide from './pages/AccountingConsultingGuide';
import AgentFeatures from './pages/AgentFeatures';
import './index.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Zap size={24} color="#ca8a04" />
          Tavitax<span>Guidebook</span>
        </div>
      </div>
      
      <div className="nav-section">Cơ bản</div>
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={18} /> Giới thiệu
        </NavLink>
        <NavLink to="/lark-basics" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Zap size={18} /> HDSD Lark Suite
        </NavLink>
        <NavLink to="/agent-features" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Target size={18} /> Tính năng Agent
        </NavLink>
      </nav>

      <div className="nav-section">Phòng Ban</div>
      <nav className="sidebar-nav">
        <NavLink to="/marketing" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Target size={18} /> Khối Marketing
        </NavLink>
        <NavLink to="/accounting-consulting" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Briefcase size={18} /> Khối Kế toán & Tư vấn
        </NavLink>
      </nav>
    </aside>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lark-basics" element={<LarkBasics />} />
            <Route path="/agent-features" element={<AgentFeatures />} />
            <Route path="/marketing" element={<MarketingGuide />} />
            <Route path="/accounting-consulting" element={<AccountingConsultingGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
