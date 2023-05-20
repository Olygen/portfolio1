import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import NewStart from './components/NewStart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <NewStart />
    </div>
  );
};

export default App;

