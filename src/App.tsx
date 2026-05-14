import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { BookOpen, Target, Users, Briefcase, Zap } from 'lucide-react';
import Home from './pages/Home';
import LarkBasics from './pages/LarkBasics';
import MarketingGuide from './pages/MarketingGuide';
import SalesGuide from './pages/SalesGuide';
import HRGuide from './pages/HRGuide';
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
      </nav>

      <div className="nav-section">Phòng Ban</div>
      <nav className="sidebar-nav">
        <NavLink to="/marketing" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Target size={18} /> Khối Marketing
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Briefcase size={18} /> Khối Sales
        </NavLink>
        <NavLink to="/hr" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={18} /> Khối Hành chính (HR)
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
            <Route path="/marketing" element={<MarketingGuide />} />
            <Route path="/sales" element={<SalesGuide />} />
            <Route path="/hr" element={<HRGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
