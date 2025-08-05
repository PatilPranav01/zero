import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="auth-page-container">
        <div className="form-container">
          <h2>Get in Touch</h2>
          <p className="form-subtitle">We'd love to hear from you. Fill out the form below.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInput}
                  required
                />
                 <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInput}
                  required
                />
                 <span className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInput}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit-btn">
              Send Message
            </button>
          </form>
        </div>
    </main>
  );
};

export default Contact;
