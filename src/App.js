import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDisplay from "./pages/ProjectDisplay";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const App = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
