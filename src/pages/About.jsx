import React from 'react';
import './About.css';
import janeDoePhoto from '../assets/images/janedoe.jpg';
import johnSmithPhoto from "../assets/images/johnsmith.jpg";
import sarahJohnsonPhoto from "../assets/images/sarahjohnson.jpg";

function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>About ShopEasy</h1>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2020, ShopEasy began with a simple mission: to make online shopping truly easy. 
          We believe that finding quality products shouldn't be complicated or expensive.</p>
          
          <p>What started as a small operation has grown into a trusted online destination for thousands of 
          satisfied customers. Our commitment to simplicity, quality, and customer satisfaction remains at the 
          heart of everything we do.</p>
        </section>
        
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>At ShopEasy, we envision a world where online shopping is accessible to everyone. We strive to 
          provide a seamless shopping experience with carefully curated products that enhance your everyday life.</p>
          
          <p>We believe in building lasting relationships with our customers based on trust, transparency, 
          and exceptional service.</p>
        </section>
        
        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We carefully select each product in our inventory to ensure it meets our high standards.</p>
            </div>
            <div className="value-card">
              <h3>Simplicity</h3>
              <p>We keep our shopping experience straightforward and user-friendly.</p>
            </div>
            <div className="value-card">
              <h3>Affordability</h3>
              <p>We believe quality products should be accessible to everyone.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We're committed to reducing our environmental impact through eco-friendly practices.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section team-section">
          <h2>Our Team</h2>
          <p>ShopEasy is powered by a dedicated team of e-commerce experts, customer service specialists, 
          and tech enthusiasts who are passionate about creating the best possible shopping experience for you.</p>
          <div className="team-grid">
            <div className="team-member">
            <img src={janeDoePhoto} alt="JaneDoePhoto" className="member-photo" />
            
              <h3>Jane Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
            <img src={johnSmithPhoto} alt="John Smith" className="member-photo" />
              
              <h3>John Smith</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
            <img src={sarahJohnsonPhoto} alt="Sarah Johnson" className="member-photo" />
              
              <h3>Sarah Johnson</h3>
              <p>Customer Experience</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;