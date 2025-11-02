import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoIntro from './components/LogoIntro';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MovingStrip from './components/MovingStrip';
import ProjectsSection from './components/ProjectsSection';
import IdeasSection from './components/IdeasSection';
import BlogSection from './components/BlogSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

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
          <IdeasSection />
          <BlogSection />
          <GallerySection />
          <AboutSection />
          <Footer />
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
