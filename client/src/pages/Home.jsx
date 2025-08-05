import React from 'react';

const Home = ({ onPageChange }) => {
  return (
    <main>
      <section className="main-section">
        <div className="container grid grid-two-cols">
          <div className="section-content hero-text">
            <h1>Powering The Future, One Innovation at a Time</h1>
            <p>
              We are a team of tech enthusiasts dedicated to building cutting-edge solutions that solve real-world problems. Explore our services and join us on our journey.
            </p>
            <div>
              <button className="btn btn-primary" onClick={() => onPageChange('Contact')}>Contact Us</button>
            </div>
          </div>
          <div className="section-image">
            <img 
              src="https://placehold.co/600x450/6a5af9/ffffff?text=Tech+Innovation" 
              alt="A representation of innovation" 
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x450?text=Image+Not+Found'; }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
