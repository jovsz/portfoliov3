import './App.css';
import React, { useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

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
      <Navbar isScrolling={scrollHeight}/>
      <Footer /> 
    </div>
  );
}

export default App;
