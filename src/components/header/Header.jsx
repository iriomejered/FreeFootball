import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useCart } from '../../services/cartService';

function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/home">
          <img src="logo.png" alt="Logo" className="logo" />
        </a>
      </div>
      <nav className="links-container">
        <ul>
          <li><a href="/shirts">Camisetas</a></li>
          <li><a href="/matches">Partidos</a></li>
          <li><a href="/competitions">Competiciones</a></li>
        </ul>
      </nav>
      <div className="login-cart-container">
        <div className="cart-container">
          <Link to="/cart" className="cart-button">
            <img src="cart-icon.png" alt="Cart" className="cart-icon" />
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
        <div className="login-container">
          <button className="login-button">Iniciar Sesión</button>
        </div>
      </div>
    </header>
  );
}

export default Header;