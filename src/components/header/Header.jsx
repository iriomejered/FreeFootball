import './Header.css'

function Header() {
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
      <div className="login-container">
        <button className="login-button">Iniciar Sesión</button>
      </div>
    </header>
  );
}

export default Header;
