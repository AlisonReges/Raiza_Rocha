import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* SOBRE */}
        <div className="footer-about">

          <div className="footer-logo">
            <div className="footer-logo-symbol">
              ♡
            </div>

            <div>
              <strong>Cuidado que</strong>
              <strong>acolhe, ciência</strong>
              <strong>que transforma.</strong>
            </div>
          </div>

          <p>
            Apoio especializado para mãe e bebê
            em todas as fases da maternidade,
            com acolhimento e embasamento científico.
          </p>

          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>

        </div>


        {/* NAVEGAÇÃO */}
        <div className="footer-column">

          <h3>Navegação</h3>

          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/ebooks">E-books</Link>
          <Link to="/mentoria">Mentoria</Link>
          <Link to="/conteudo">Conteúdo</Link>
          <Link to="/contato">Contato</Link>

        </div>


        {/* SERVIÇOS */}
        <div className="footer-column">

          <h3>Serviços</h3>

          <Link to="/servicos/amamentacao">
            Consultoria de Amamentação
          </Link>

          <Link to="/servicos/laserterapia">
            Laserterapia
          </Link>

          <Link to="/servicos/taping">
            Taping
          </Link>

          <Link to="/servicos/drenagem">
            Drenagem Linfática
          </Link>

          <Link to="/mentoria">
            Mentoria para Enfermeiras
          </Link>

        </div>


        {/* CONTATO */}
        <div className="footer-column">

          <h3>Contato</h3>

          <p>
            ☎ (83) 99999-9999
          </p>

          <p>
            ✉ contato@seudominio.com.br
          </p>

          <p>
            ♧ João Pessoa - PB
          </p>

          <p>
            Atendimento presencial e domiciliar
          </p>

        </div>


        {/* NEWSLETTER */}
        <div className="footer-column newsletter">

          <h3>Newsletter</h3>

          <p>
            Receba dicas e conteúdos
            exclusivos por e-mail.
          </p>

          <input
            type="email"
            placeholder="Seu melhor e-mail"
          />

          <button>
            Quero receber
          </button>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="footer-bottom">

        <p>
          © 2026 Seu Nome. Todos os direitos reservados.
        </p>

        <div>
          <Link to="/privacidade">
            Política de Privacidade
          </Link>

          <Link to="/termos">
            Termos de Uso
          </Link>
        </div>

      </div>

    </footer>
  );
}

export default Footer;