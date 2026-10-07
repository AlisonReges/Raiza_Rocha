import { Link } from "react-router-dom";
import { imagePath } from "../../utils/imagePath";
import "./Mentoria.css";

function Mentoria() {
  return (
    <main className="mentoria-page">

      {/* HERO */}

      <section className="mentoria-hero">

        <div className="mentoria-hero-container">

          <div className="mentoria-hero-content">

            <span className="mentoria-label">
              MENTORIA PROFISSIONAL
            </span>

            <h1>
              Transforme seu conhecimento
              <span> em uma carreira de sucesso.</span>
            </h1>

            <p>
              Uma mentoria para enfermeiras que desejam
              se posicionar no mercado, conquistar clientes
              e construir uma carreira sólida como consultora
              de amamentação.
            </p>

            <div className="mentoria-buttons">

              <a
                href="https://wa.me/5583999133127?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria"
                target="_blank"
                rel="Raiza Rocha - Mentoria para enfermeiras"
                className="mentoria-button primary"
              >
                Quero conhecer a mentoria
              </a>

              <a
                href="#programa"
                className="mentoria-button secondary"
              >
                Conhecer o programa
              </a>

            </div>

          </div>

          <div className="mentoria-hero-image">

            <img
              src={imagePath("/images/mentoria-enfermeiras.jpg")}
              alt="Mentoria para enfermeiras"
            />

          </div>

        </div>

      </section>


      {/* PARA QUEM É */}

      <section className="mentoria-publico">

        <div className="mentoria-section-title">

          <span>PARA QUEM É</span>

          <h2>
            Essa mentoria é para você que...
          </h2>

        </div>

        <div className="publico-grid">

          <div className="publico-card">
            <div>01</div>

            <h3>
              Quer começar
            </h3>

            <p>
              Deseja entrar no mercado de consultoria
              de amamentação, mas não sabe por onde começar.
            </p>
          </div>

          <div className="publico-card">
            <div>02</div>

            <h3>
              Já atende
            </h3>

            <p>
              Já realiza atendimentos, mas sente dificuldade
              em se posicionar e atrair novas clientes.
            </p>
          </div>

          <div className="publico-card">
            <div>03</div>

            <h3>
              Quer crescer
            </h3>

            <p>
              Busca aumentar seu faturamento e transformar
              a consultoria em uma carreira sustentável.
            </p>
          </div>

        </div>

      </section>


      {/* O QUE VOCÊ VAI APRENDER */}

      <section
        className="mentoria-programa"
        id="programa"
      >

        <div className="mentoria-section-title">

          <span>O QUE VOCÊ VAI APRENDER</span>

          <h2>
            Uma visão completa para construir sua carreira
          </h2>

          <p>
            Mais do que aprender uma profissão, você vai
            aprender a construir um negócio.
          </p>

        </div>


        <div className="programa-grid">

          <div className="programa-card">

            <span>01</span>

            <h3>
              Identidade profissional
            </h3>

            <p>
              Descubra seus diferenciais, fortaleça sua
              identidade e desenvolva uma comunicação
              profissional.
            </p>

          </div>


          <div className="programa-card">

            <span>02</span>

            <h3>
              Posicionamento
            </h3>

            <p>
              Aprenda a se posicionar como referência
              e transmitir autoridade no mercado.
            </p>

          </div>


          <div className="programa-card">

            <span>03</span>

            <h3>
              Marketing e redes sociais
            </h3>

            <p>
              Estratégias para criar conteúdo, gerar conexão
              e atrair clientes através das redes sociais.
            </p>

          </div>


          <div className="programa-card">

            <span>04</span>

            <h3>
              Atendimento e vendas
            </h3>

            <p>
              Aprenda a conduzir o atendimento desde o
              primeiro contato até o pós-consulta.
            </p>

          </div>


          <div className="programa-card">

            <span>05</span>

            <h3>
              Gestão e precificação
            </h3>

            <p>
              Organize sua rotina, defina seus valores
              e tenha mais segurança para cobrar pelo seu trabalho.
            </p>

          </div>


          <div className="programa-card">

            <span>06</span>

            <h3>
              Crescimento profissional
            </h3>

            <p>
              Crie estratégias para aumentar seu faturamento
              e ampliar suas possibilidades de atuação.
            </p>

          </div>

        </div>

      </section>


      {/* DIFERENCIAL */}

      <section className="mentoria-diferencial">

        <div className="diferencial-container">

          <div className="diferencial-image">

            <img
              src={imagePath("/images/mentoria-amamentacao.jpg")}
              alt="Profissional durante mentoria"
            />

          </div>

          <div className="diferencial-content">

            <span>
              POR QUE FAZER ESSA MENTORIA?
            </span>

            <h2>
              Você não precisa construir
              sua carreira sozinha.
            </h2>

            <p>
              Ter conhecimento técnico é apenas uma parte
              da construção de uma carreira de sucesso.
            </p>

            <p>
              É preciso saber se posicionar, comunicar seu
              valor, conquistar clientes e administrar seu
              negócio.
            </p>

            <ul>

              <li>Direcionamento profissional</li>

              <li>Estratégias práticas para o mercado</li>

              <li>Posicionamento e autoridade</li>

              <li>Marketing e vendas com ética</li>

              <li>Gestão e organização profissional</li>

            </ul>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="mentoria-final">

        <div>

          <span>
            SUA PRÓXIMA FASE PODE COMEÇAR AGORA
          </span>

          <h2>
            Pronta para transformar
            sua profissão?
          </h2>

          <p>
            Entre em contato e saiba como funciona
            a próxima turma da mentoria.
          </p>

          <Link
            to="/contato"
            className="mentoria-final-button"
          >
            Quero fazer parte
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Mentoria;