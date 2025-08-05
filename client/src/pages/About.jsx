import React from 'react';

const About = () => {
  return (
    <main>
      <section className="main-section">
        <div className="container grid grid-two-cols">
          <div className="section-image">
            <img
              src="https://placehold.co/600x450/a1a1aa/ffffff?text=Our+Mission" 
              alt="A placeholder image of a team"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x450?text=Image+Not+Found'; }}
            />
          </div>
          <div className="section-content">
            <h2>About Our Company</h2>
            <p>
              Founded in 2024, TechCo started with a mission to make technology accessible and impactful. Our team consists of passionate developers, designers, and strategists who believe in the power of collaboration and innovation.
            </p>
            <p>
              We focus on creating user-centric products that are not only functional but also delightful to use. Our commitment to quality and excellence drives everything we do, ensuring we deliver value to our clients and partners worldwide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
