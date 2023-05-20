import React from 'react';
import olgaImage from './images/OlgaS.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id ="home" className="home">
      <div className="hero-content">
        <h1 className="hero-heading"><span className="highlight">hi, </span>i am olga</h1>
        <p className="profession">web developer</p>
        <p className="info">Passionate beginner in web development with extensive expertise in business analytics, digital marketing, and a strong background in computer science education</p>
        <a href="https://www.linkedin.com/in/olga-sarukhanova/" className="btn">contact</a>
      </div>
      <img src={olgaImage} className="image" alt="Olga Sarukhanova" />

    </section>
  );
};

export default Home;