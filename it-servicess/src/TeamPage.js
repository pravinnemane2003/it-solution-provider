import React from 'react';
import './TeamPage.css';

const teamMembers = [
  {
    name: 'Vaibhav Dapke',
    role: 'CEO & Founder',
    img: '/images/member1.jpg',
    description: 'Visionary leader with 10+ years in IT solutions, driving innovation and excellence.',
  },
  {
    name: 'Shubham Sahu',
    role: 'CTO',
    img: '/images/member2.jpeg',
    description: 'Tech enthusiast passionate about emerging technologies and system architecture.',
  },
  {
    name: 'Bhushan Sapkale',
    role: 'Lead Developer',
    img: '/images/member3.jpeg',
    description: 'Full-stack developer skilled in React, Node.js, and cloud computing.',
  },
  {
    name: 'Abhishekh Adhude',
    role: 'UI/UX Designer',
    img: '/images/member4.jpeg',
    description: 'Creative designer crafting intuitive and user-friendly interfaces.',
  },
];

function TeamPage() {
  return (
    <div className="team-page" id="team">
      <div className="team-header">
        <h1>Meet Our Team</h1> <br></br>
        <p>Passionate professionals dedicated to delivering exceptional IT solutions.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <div className="team-info">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
