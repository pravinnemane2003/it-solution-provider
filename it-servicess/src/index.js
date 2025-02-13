// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import ContactPage from './contact';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/contact" element={<ContactPage />} />
//     </Routes>
//   </BrowserRouter>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import TeamPage from './TeamPage';
import ServicesPage from './ServicesPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* App as a layout route */}
      <Route path="/" element={<App />}>
        {/* Default page */}
        <Route index element={<HomePage />} />
        {/* Contact page route */}
        <Route path="contact" element={<ContactPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />

      </Route>
    </Routes>
  </BrowserRouter>
);
