// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function HomePage() {
//   const navigate = useNavigate();

//   return (
//     <div className="content">
//       <h1>Welcome to IT Solutions Providers!</h1>
//       <br></br>
//       <p>Enjoy your stay here.</p>
//       <br>
//       </br>
//       <button className="get-in-touch-btn" onClick={() => navigate('/contact')}>
//         Get in Touch
//       </button>
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to IT Solutions Providers!</h1><br></br>
        <p>Your one-stop solution for innovative IT services.</p><br></br>
        <button className="get-in-touch-btn" onClick={() => navigate('/contact')}>
          Get in Touch
        </button>
      </div>
    </div>
    
  );
}

export default HomePage;
