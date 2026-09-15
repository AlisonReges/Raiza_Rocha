import { Link, useNavigate } from "react-router-dom";
import { LiaWhatsapp } from "react-icons/lia";

import Logo from "../../Logo/Logo";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <Logo />
        </Link>

        {/* Menu */}
        <nav className="navbar-menu">
          <button onClick={() => scrollToSection("inicio")}>Início</button>
          <button onClick={() => scrollToSection("servicos")}>Serviços</button>
          <button onClick={() => scrollToSection("sobre")}>Sobre</button>

          <Link to="/mentoria">Mentoria</Link>

          <Link to="/contato">Contato</Link>
        </nav>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5583999133127"
          target="_blank"
          rel="Raiza Rocha WhatsApp"
          className="navbar-whatsapp"
        >
          <LiaWhatsapp />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

export default Navbar;
