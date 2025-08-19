import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="/images/IMG-20250811-WA0013[1].jpg" // Replace with your photo URL
          alt="suraj" 
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hello! I'm a dedicated and results-driven web developer with a strong foundation in front-end technologies, particularly React.js. I thrive on building intuitive, high-performance, and visually appealing user interfaces.
          </p>
          <p>
            With a background in computer science and a keen eye for design, I enjoy turning complex problems into simple, beautiful, and functional code. I'm always eager to learn new technologies and improve my craft.
          </p>
          <p>
            When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or enjoying a good book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;