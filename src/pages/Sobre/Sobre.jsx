import { Link } from "react-router-dom";
import "./Sobre.css";

function Sobre() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-image">

          <img
            src="/images/about.jpg"
            alt="Profissional da área materno-infantil"
          />

        </div>

        <div className="about-content">

          <span className="about-label">
            SOBRE A PROFISSIONAL
          </span>

          <h2>
            Prazer, sou Raiza Rocha
          </h2>

          <p>
            Enfermeira especialista em saúde materno-infantil
            e apaixonada por apoiar famílias nessa jornada
            transformadora.
          </p>

          <p>
            Minha missão é oferecer um cuidado humanizado,
            baseado em evidências científicas, respeitando
            a individualidade de cada mãe e bebê.
          </p>

          <ul>

            <li>Especialista em Amamentação</li>
            <li>Laserterapia aplicada à amamentação</li>
            <li>Taping e Drenagem Linfática</li>
            <li>Mentora de enfermeiras</li>

          </ul>

          <Link
            to="/sobre"
            className="about-button"
          >
            Minha história completa
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Sobre;