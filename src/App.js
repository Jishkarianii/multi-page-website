import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import BlogPosts from './pages/BlogPosts';
import Contact from './pages/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease'
    });
  }, [])

  useEffect(() => {
    // Check theme mode on local storage
    if (localStorage.getItem("darkMode") === null) {
      localStorage.setItem("darkMode", false);
    } else {
      localStorage.setItem("darkMode", isDarkMode);
    }
    
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Router>
        <Header 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
          <Routes>
            <Route path="/" element={<Home title="Home" />} />
            <Route path="/about" element={<About title="About" />} />
            <Route path="/services" element={<Services title="Services" />} />
            <Route path="/blog-posts" element={<BlogPosts title="Blog" />} />
            <Route path="/contact" element={<Contact title="Contact" />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// All templates: https://w3layouts.com/template-category/wordpress/page/3/
// Chosen: https://wp.w3layouts.com/petspatial/