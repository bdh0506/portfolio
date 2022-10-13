import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <HeaderNav />
        </div>

        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;