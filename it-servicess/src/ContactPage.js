
import React from 'react';
import './App.css';
import './ContactPage.css';

function App() {

  const handleGoBack = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
      <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p><span className="contact-icon">📧</span>Email: contact@itsolutions.com</p>
        <p><span className="contact-icon">📞</span>Phone: +123 456 7890</p>
        <p><span className="contact-icon">📍</span>Address: 123 Tech Street, Innovation City</p>
        
        {/* Back Button */}
        <button className="contact-btn" onClick={handleGoBack}>
          Go Back
        </button>
      
      </div>
  
    </div>
    
  );
}

export default App;
