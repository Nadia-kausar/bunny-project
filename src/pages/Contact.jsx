import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission to a backend here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you! Whether you have a question about our products, need help with an order, or want to provide feedback, our team is here to assist you.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <h3>Email Us</h3>
              <p>support@shopeasy.com</p>
              <p>For orders: orders@shopeasy.com</p>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">📞</div>
              <h3>Call Us</h3>
              <p>(123) 456-7890</p>
              <p>Mon-Fri: 9am - 6pm EST</p>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Commerce Street</p>
              <p>Shopping City, SC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className="form-success">
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
          </div>
          <div className="faq-item">
            <h3>How long does shipping take?</h3>
            <p>Standard shipping takes 3-5 business days. Express shipping is 1-2 business days.</p>
          </div>
          <div className="faq-item">
            <h3>What is your return policy?</h3>
            <p>We offer a 30-day money-back guarantee on all purchases.</p>
          </div>
          <div className="faq-item">
            <h3>Do you ship internationally?</h3>
            <p>Yes, we ship to over 50 countries worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;