import { Link, useLocation, useNavigate } from "react-router-dom";

import { LiaWhatsapp } from "react-icons/lia";

import Logo from "../../Logo/Logo";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
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

        <Link to="/" className="navbar-logo">
          <Logo />
        </Link>

        <nav className="navbar-menu">
          <button onClick={() => scrollToSection("inicio")}>
            Início
          </button>

          <button onClick={() => scrollToSection("servicos")}>
            Serviços
          </button>

          <button onClick={() => scrollToSection("sobre")}>
            Sobre
          </button>

          <Link to="/mentoria">
            Mentoria
          </Link>

          <Link to="/contato">
            Contato
          </Link>
        </nav>

        <a
          href="https://wa.me/5583999133127"
          target="_blank"
          rel="noopener noreferrer"
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