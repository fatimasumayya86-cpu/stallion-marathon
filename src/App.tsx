import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Packages } from './pages/Packages';
import { Charity } from './pages/Charity';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-stallion-dark text-slate-100 font-sans selection:bg-stallion-gold selection:text-stallion-dark">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/charity" element={<Charity />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

