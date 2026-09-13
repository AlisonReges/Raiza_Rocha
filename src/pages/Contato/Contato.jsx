import { LiaWhatsapp } from "react-icons/lia";
import { CiMail, CiLocationOn, CiHome } from "react-icons/ci";
import "./Contato.css";

function Contato() {
  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Mensagem enviada! Em breve entraremos em contato."
    );
  }

  return (
    <main className="contato-page">

      {/* HERO */}

      <section className="contato-hero">

        <span>
          ENTRE EM CONTATO
        </span>

        <h1>
          Vamos conversar?
        </h1>

        <p>
          Estou aqui para acolher você e ajudar a encontrar
          o melhor cuidado para sua jornada.
        </p>

      </section>


      {/* CONTEÚDO */}

      <section className="contato-section">

        <div className="contato-container">

          {/* INFORMAÇÕES */}

          <div className="contato-info">

            <span className="contato-label">
              FALE COMIGO
            </span>

            <h2>
              Será um prazer
              cuidar de você.
            </h2>

            <p>
              Entre em contato para tirar suas dúvidas,
              conhecer os atendimentos ou agendar sua consulta.
            </p>


            <div className="contato-items">

              <div className="contato-item">

                <div className="contato-icon">
                  <LiaWhatsapp />
                </div>

                <div>
                  <strong>
                    WhatsApp
                  </strong>

                  <span>
                    (83) 99913-3127
                  </span>
                </div>

              </div>


              <div className="contato-item">

                <div className="contato-icon">
                  <CiMail />
                </div>

                <div>
                  <strong>
                    E-mail
                  </strong>

                  <span>
                    raizaconsultoradeamamentacao@gmail.com
                  </span>
                </div>

              </div>


              <div className="contato-item">

                <div className="contato-icon">
                  <CiLocationOn />
                </div>

                <div>
                  <strong>
                    Atendimento
                  </strong>

                  <span>
                    João Pessoa - PB
                  </span>
                </div>

              </div>


              <div className="contato-item">

                <div className="contato-icon">
                  <CiHome />
                </div>

                <div>
                  <strong>
                    Modalidade
                  </strong>

                  <span>
                    Consultório e atendimento domiciliar
                  </span>
                </div>

              </div>

            </div>


            <a
              href="https://wa.me/5583999133127"
              target="_blank"
              rel="Raiza Rocha - Consultora de Amamentação"
              className="contato-whatsapp"
            >
              Falar pelo WhatsApp
            </a>

          </div>


          {/* FORMULÁRIO */}

          <div className="contato-form-wrapper">

            <h2>
              Envie uma mensagem
            </h2>

            <p>
              Preencha o formulário e entraremos
              em contato com você.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label htmlFor="nome">
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@email.com"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="telefone">
                  WhatsApp
                </label>

                <input
                  id="telefone"
                  type="tel"
                  placeholder="(83) 99999-9999"
                />

              </div>


              <div className="form-group">

                <label htmlFor="assunto">
                  Como posso ajudar?
                </label>

                <select
                  id="assunto"
                  defaultValue=""
                >

                  <option value="" disabled>
                    Selecione uma opção
                  </option>

                  <option value="amamentacao">
                    Consultoria de Amamentação
                  </option>

                  <option value="laserterapia">
                    Laserterapia
                  </option>

                  <option value="taping">
                    Taping
                  </option>

                  <option value="drenagem">
                    Drenagem Linfática
                  </option>

                  <option value="mentoria">
                    Mentoria
                  </option>

                  <option value="outro">
                    Outro assunto
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label htmlFor="mensagem">
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  rows="5"
                  placeholder="Escreva sua mensagem..."
                />

              </div>


              <button type="submit">
                Enviar mensagem
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* INSTAGRAM */}

      <section className="contato-instagram">

        <span>
          ACOMPANHE MEU TRABALHO
        </span>

        <h2>
          Conteúdos e dicas todos os dias
        </h2>

        <p>
          Acompanhe meu Instagram para receber
          informações sobre maternidade e amamentação.
        </p>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="Raiza Rocha - Consultora de Amamentação"
        >
          @seuinstagram →
        </a>

      </section>

    </main>
  );
}

export default Contato;