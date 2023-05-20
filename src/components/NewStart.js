import React from 'react';
// import olgaImage from './images/background_image1.jpg';
import eggs from './images/eggs.png';
import pokemon from './images/pokemon.png';
import CooperHuwitt from './images/CooperHuwitt.png';
import mongooseFlights from './images/flights.png';
import './NewStart.css';

const NewStart = () => {
  const projects = [
    {
      name: 'First Project',
      image: eggs,
      tags: '#javascript',
      githubLink: 'https://github.com/Olygen/W6project',
      liveLink: 'https://easter-is-coming-catch-eggs.netlify.app/'
    },
    {
      name: 'Second Project',
      image: CooperHuwitt,
      tags: '#RestAPI',
      githubLink: 'https://github.com/Olygen/cooper-hewitt',
      liveLink: 'https://find-posters-from-cooper-hewitt.netlify.app/'
    },
    {
      name: 'Exercise',
      image: pokemon,
      tags: '#ReactJS',
      githubLink: 'https://github.com/Olygen/pokemon_app',
      liveLink: 'https://guess-pokemon-name.onrender.com/'
    },
    {
      name: 'Exercise',
      image: mongooseFlights,
      tags: '#MondoDBS',
      githubLink: 'https://github.com/Olygen/mongoose-flights',
      liveLink: 'https://mongoose-flights-d7xo.onrender.com'
    }
  ];

  return (
    <section id="new-start" className="project">
      <h2 className="heading">New start with <span className="highlight">Per Scholas</span></h2>
      <p className="sub-heading">You may consider these projects as not fully mature, but compared to myself three months ago, I'm incredibly proud</p>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
              <div className="content">
                <h1 className="project-name">{project.name}</h1>
                <span className="tags">{project.tags}</span>
              </div>
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewStart;