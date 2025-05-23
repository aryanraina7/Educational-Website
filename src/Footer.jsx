import React from 'react';

const Footer = () => {
  const footerStyle = {
    padding: '5px 10px', 
    textAlign: 'center',
    backgroundColor: '#d0040c', 
  };

  const linkStyle = {
    color: 'white', 
    marginRight: '5px',
    marginLeft: '5px',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: '0', fontSize: '14px', color: 'white' }}>
        Copyright 2023 © MC-Council All Rights Reserved
         |  Made by 
        <a href="https://www.linkedin.com/in/pratyushchowdhury/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Pratyush,</a>
        <a href="https://www.linkedin.com/in/cyber-mukherjee/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Gaurav &</a>
        <a href="https://www.linkedin.com/in/aryan-raina-5b545231b/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Aryan.</a>
      </p>
    </footer>
  );
};

export default Footer;
