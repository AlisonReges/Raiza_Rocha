import { Link } from "react-router-dom";
import { CiHeart, CiLocationOn} from "react-icons/ci";
import { BsHouse } from "react-icons/bs";
import { GiLaserBurst, GiLaserWarning } from "react-icons/gi";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            CUIDADO ESPECIALIZADO PARA MÃES E BEBÊS
          </span>

          <h1>
            Você não precisa
            <br />
            enfrentar a amamentação
            <span> sozinha.</span>
          </h1>

          <p>
            Apoio especializado para mãe e bebê em todas
            as fases da maternidade, com acolhimento,
            conhecimento e embasamento científico.
          </p>

          <div className="hero-buttons">

            <a
              href="https://wa.me/5583999133127?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento"
              target="_blank"
              rel="Raiza Rocha - Atendimento especializado para mães e bebês"
              className="hero-button primary"
            >
              Agendar atendimento
            </a>

            <Link
              to="/sobre"
              className="hero-button secondary"
            >
              Conheça minha história
            </Link>

          </div>

          <div className="hero-features">

            <div className="hero-feature">
              <span><CiHeart /></span>
              <div>
                <strong>Mais de 500</strong>
                <small>famílias atendidas</small>
              </div>
            </div>

            <div className="hero-feature">
              <span><CiLocationOn /></span>
              <div>
                <strong>Atendimento em</strong>
                <small>João Pessoa e região</small>
              </div>
            </div>

            <div className="hero-feature">
              <span><BsHouse /></span>
              <div>
                <strong>Atendimento</strong>
                <small>presencial e domiciliar</small>
              </div>
            </div>

            <div className="hero-feature">
              <span><GiLaserWarning /></span>
              <div>
                <strong>Especialista em</strong>
                <small>Amamentação</small>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={`${import.meta.env.BASE_URL}images/hero.jpg`}
            alt="Profissional atendendo mãe e bebê"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;