import React from 'react';
import './ServicesPage.css';

const services = [
  {
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Creating native and cross-platform mobile apps with intuitive user experiences.',
  },
  {
    title: 'Desktop Application Development',
    icon: '🖥️',
    description: 'Developing robust desktop applications for Windows, macOS, and Linux.',
  },
  {
    title: 'Web Application Development',
    icon: '🌐',
    description: 'Building scalable, secure, and modern web applications.',
  },
  {
    title: 'Website Design & Development',
    icon: '🎨',
    description: 'Crafting beautiful, responsive websites tailored to your business needs.',
  },
  {
    title: 'UI/UX Consulting',
    icon: '🧠',
    description: 'Enhancing user satisfaction through intuitive design and usability improvements.',
  },
  {
    title: 'Cloud Computing Solutions',
    icon: '☁️',
    description: 'Offering reliable cloud solutions to support your growing business needs.',
  },
  {
    title: 'DevOps & Infrastructure Automation',
    icon: '⚙️',
    description: 'Streamlining development and deployment with automated processes.',
  },
  {
    title: 'Cybersecurity Solutions',
    icon: '🔒',
    description: 'Implementing top-tier security to protect your applications and data.',
  },
];

function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our IT Services</h1><br></br>
        <p>Explore our wide range of services designed to empower your business.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
