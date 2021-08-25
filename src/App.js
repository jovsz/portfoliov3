import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import About from './components/About/About';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import GithubProfile from './components/Repositories/GithubProfile';

function App() {
  const [ scrollHeight, setScrollHeight ] = useState(0);
  

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  },[scrollHeight]);
  
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Section />
      <About />
      <GithubProfile />
      <Slider />

      <Footer />
    </div>
  );
}

export default App;
