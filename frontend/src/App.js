import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoIntro from './components/LogoIntro';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MovingStrip from './components/MovingStrip';
import ProjectsSection from './components/ProjectsSection';

const Home = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Intro Animation */}
      {!introComplete && (
        <LogoIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main Content - shown after intro */}
      {introComplete && (
        <>
          <Navigation />
          <Hero />
          <MovingStrip />
          <ProjectsSection />
          
          {/* Placeholder for more sections */}
          <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--muted-white)' }}>
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold" style={{ color: 'var(--bg-dark)' }}>
                More sections coming...
              </h2>
              <p className="text-lg" style={{ color: 'var(--bg-dark)', opacity: 0.7 }}>
                Ideas · Blog · Gallery · About · Footer
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
