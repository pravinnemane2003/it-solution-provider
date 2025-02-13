import React from 'react';
import './App.css';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const backgroundImageStyle = {
    backgroundImage: 'url(/images/background.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={backgroundImageStyle}>
      {/* Navbar visible on every page */}
      <NavBar />
      {/* Content for each route will be rendered here */}
      <Outlet />
    </div>
  );
}

export default App;
