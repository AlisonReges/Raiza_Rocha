import { Link } from "react-router-dom";
import "./Footer.css";

function CTA() {
  return (
    <section className="footer-cta">

      <div className="footer-cta-container">

        <div className="cta-icon">
          ♡
        </div>

        <div className="cta-content">

          <span>PRONTA PARA COMEÇAR?</span>

          <h2>
            Vamos juntas nessa jornada?
          </h2>

          <p>
            Agende seu atendimento e receba o cuidado
            que você e seu bebê merecem.
          </p>

        </div>

        <Link
          to="/contato"
          className="cta-button"
        >
          Agendar agora
        </Link>

      </div>

    </section>
  );
}

export default CTA;