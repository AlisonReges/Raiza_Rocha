
import "./Ebook.css";
import {imagePath} from "../../utils/imagePath";

const ebooks = [
  {
    title: "Rotina do sono do bebê",
    description:
      "Um guia prático para ajudar seu bebê a dormir melhor.",
    image: imagePath("/images/ebooks/rotina_do_sono_do_bebe.webp"),
  },
  {
    title: "Guia de amamentação para mães de primeira viagem",
    description:
      "Tudo o que você precisa saber para começar com mais segurança.",
    image: imagePath("/images/ebooks/guia_de_amamentacao_para_maes_de_primeira_viagem.webp"),
  },
  {
    title: "Como continuar a amamentação ao voltar ao trabalho",
    description:
      "Dicas e estratégias para manter a amamentação com leveza.",
    image: imagePath("/images/ebooks/como_continuar_a_amamentacao_ao_volta_ao_trabalho.webp"),
  },
];

function Ebook() {
  return (
    <section className="ebooks">
      <div className="section-heading">
        <span>MATERIAIS PARA TE AJUDAR</span>

        <h2>Baixe nossos e-books gratuitos</h2>
      </div>

      <div className="ebooks-grid">
        {ebooks.map((ebook) => (
          <article className="ebook-card" key={ebook.title}>
            <img
              src={ebook.image}
              alt={ebook.title}
            />

            <div className="ebook-content">
              <h3>{ebook.title}</h3>

              <p>{ebook.description}</p>

              <a href="#">
                Baixar agora →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Ebook;
