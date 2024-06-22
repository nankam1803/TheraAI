import React, { useState } from 'react';
import "./About.css";
import Navbar from '../Navbar/Navbar';
import './About.css';
import elderlyWomanImage from '../../assets/Image1.jpg'; // Replace with actual image paths
import doctorImage from '../../assets/Image2.jpeg'; // Replace with actual image paths
import elderlyManImage from '../../assets/Image3.jpeg'; // Replace with actual image paths


/*const About = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Navbar toggle={toggle} setToggle={setToggle} />
  )
}*/


const About = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="about-container">
        <Navbar toggle={toggle} setToggle={setToggle} />
      <h1>What is TheraAI about?</h1>
      <p>TheraAI is an AI-driven chatbot designed to assist elderly users by providing emotional support and monitoring their emotional well-being. The goal is to enhance the emotional well-being of elderly individuals through the innovative application of technology.</p>
      <div className="about-section">
        <div className="about-image">
          <img src={elderlyWomanImage} alt="Elderly Woman" />
        </div>
        <div className="about-text">
          <h3>Our Goal?</h3>
          <p>To enhance the emotional well-being of elderly individuals through empathetic AI interactions and continuous emotional monitoring, ensuring support, companionship, and safety.</p>
        </div>
      </div>
      <div className="about-section reverse">
        <div className="about-image">
          <img src={doctorImage} alt="Doctor" />
        </div>
        <div className="about-text">
          <h3>Our Vision?</h3>
          <p>To harness AI to enhance the emotional well-being of elderly individuals through empathetic interactions and advanced technologies. We aim to develop TheraAI into a widely accessible product, providing compassionate support and monitoring to elderly users everywhere.</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-image">
          <img src={elderlyManImage} alt="Elderly Man" />
        </div>
        <div className="about-text">
          <h3>Our Vision?</h3>
          <p>To harness AI to enhance the emotional well-being of elderly individuals through empathetic interactions and advanced technologies. We aim to develop TheraAI into a widely accessible product, providing compassionate support and monitoring to elderly users everywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default About;