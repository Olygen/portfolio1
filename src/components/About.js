import React from 'react';
import olgaImage from './images/background_image.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
        <h2 className="heading">about <span className="highlight">me</span></h2>
        <p className="sub-heading">I embarked on a courageous journey, leaving behind adversity and conflict, to embrace my true self and seek safety, ultimately finding a new beginning in America </p>
        {/* <div className="seperator"></div> */}

        <div className="about-me-container">
            <div className="left-col">
            <img src={olgaImage} className="about-image" alt="Olga Sarukhanova" />
            </div>
            <div className="right-col">
                <p className="about-para">I graduated Math with a Bachelor in Computer Science and started to work in an advertising agency as an econometric modelist.
 
 Excellent analytical, problem-solving, time-management, and communication skills allowed me to lead joint efforts of the Strategic, Creative, and Econometric Modelling teams to manage projects  in the Agile environment. I achieve a win rate of 30% in new business pitches. 
  
 After relocation to USA and while obtaining all necessary documents, I volunteered for non-profit fund Cash For Ukrainian Refugees, verifying and uploading documents to the database, and developing a brand platform for the
 organisation. 
  
 I recently completed the PerScholas Software Engineering course and
 excited to apply my skills and experience in IT.
 </p>
                <a href="https://docs.google.com/document/d/1s9PxWuX9sx6R3tr8G-GKtPwAcwPKuATT/edit?usp=sharing&ouid=101052016621826470314&rtpof=true&sd=true" className="btn">download resume</a>
            </div>
        </div>
        <h2 className="heading">languages and framework i know</h2>
    {/* <div className="seperator"></div> */}
        <div className="skill-container">
            <div className="skill-card" style={{'--bg': '#f06529'}}>
                <p className="skill">HTML</p>
            </div>
            <div className="skill-card" style={{'--bg': '#379ad6'}}>
                <p className="skill">CSS</p>
            </div>
            <div className="skill-card" style={{'--bg': '#cc6699'}}>
                <p className="skill">Postman</p>
            </div>
            <div className="skill-card" style={{'--bg': '#f7df1e'}}>
                <p className="skill">JavaScript</p>
            </div>
            <div className="skill-card large" style={{'--bg': '#5ed9fb'}}>
                <p className="skill">ReactJS</p>
            </div>
            <div className="skill-card large" style={{'--bg': '#83cd29'}}>
                <p className="skill">MongoDB/Mongoose</p>
            </div>
            <div className="skill-card" style={{'--bg': '#326690'}}>
                <p className="skill">Express</p>
            </div>
            <div className="skill-card" style={{'--bg': '#ffa000'}}>
                <p className="skill">NodeJS</p>
            </div>
            <div className="skill-card large" style={{'--bg': '#808080'}}>
                <p className="skill">Much More</p>
            </div>
        </div>
    </section>
  );
};

export default About;