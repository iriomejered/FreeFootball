import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="links-container">
        <ul>
          <li><a href="/shirts">Camisetas</a></li>
          <li><a href="#partidos">Partidos</a></li>
          <li><a href="#competiciones">Competiciones</a></li>
        </ul>
      </nav>
      <div className="login-container">
        <button className="login-button">Iniciar Sesión</button>
      </div>
    </header>
  );
}

export default Header;
