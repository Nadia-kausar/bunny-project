import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.css'; // Ensure this imports your CSS

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>ShopEasy</h1>
      </div>
      <SearchBar />
      <Navbar />
      {/* Use Link styled as button */}
      <Link to="/login" className="login-button">
        Login
      </Link>
    </header>
  );
}

export default Header;
