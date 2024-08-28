import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={require('../hader.jpg')} alt="Menu" className="menu-icon" />
        <img src={require('../lk.png')} alt="Logo" className="logo-icon" />
       
      </div>
      <div className="header-right">
        <img src={require('../s.png')} alt="Search" className="header-icon" />
        <img src={require('../g.png')} alt="Grid" className="header-icon" />
        <img src={require('../f.png')} alt="Profile" className="header-icon" />
      </div>
    </header>
  );
}

export default Header;
