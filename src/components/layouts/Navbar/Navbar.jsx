import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-symbol">
            ♡
          </div>

          <div className="logo-text">
            <strong>Cuidado que</strong>
            <strong>acolhe, ciência</strong>
            <strong>que transforma.</strong>
          </div>
        </Link>

        {/* Menu */}
        <nav className="navbar-menu">

          <Link to="/">Início</Link>

          <Link to="/sobre">Sobre</Link>

          <Link to="/servicos">Serviços</Link>

          <Link to="/ebooks">E-books</Link>

          <Link to="/mentoria">Mentoria</Link>

          <Link to="/contato">Contato</Link>

        </nav>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5583999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-whatsapp"
        >
          <span>◉</span>
          Falar no WhatsApp
        </a>

      </div>
    </header>
  );
}

export default Navbar;