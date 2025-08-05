import React from 'react';

const Service = () => {
  return (
    <main>
      <section className="main-section">
        <div className="container">
          <h2 className="page-title">Our Core Services</h2>
          <div className="grid services-grid">
            <div className="service-card">
              <div className="icon">💻</div>
              <h3>Web Development</h3>
              <p>Creating responsive and high-performance websites tailored to your business needs.</p>
            </div>
            <div className="service-card">
              <div className="icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Building intuitive and engaging mobile applications for both iOS and Android platforms.</p>
            </div>
            <div className="service-card">
              <div className="icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>Leveraging the power of the cloud to provide scalable and secure infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
