import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
// Public Components & Pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
// Admin Pages
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

// Renders the main portfolio layout for public pages
const PortfolioLayout = () => (
  <>
    <Navbar />
    <main>
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/*" element={<PortfolioLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;