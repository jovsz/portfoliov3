import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Section from './Section/Section';
import About from './About/About';
import Repository from './Repositories/GithubProfile';
import Slide from './Slider/Slider';
// import Contact from './Contact/Contact';
import './Home.css';


const Home = () => {
  
  
  return(
    <div>
      <Section />
      <About />
      <Repository />
      <Slide />
      {/* <Contact /> */}
          
    </div>
  );
}

export default Home;