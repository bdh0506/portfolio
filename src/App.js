import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';

library.add(fas);

function App() {
  return (
    <Router>
      <div>
        <HeaderNav />
        <div className="container">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/dev-portfolio" element={<Portfolio />} />
            <Route path="/dev-portfolio/:showcase" element={<Showcase />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
