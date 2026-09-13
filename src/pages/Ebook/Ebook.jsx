import "./Ebook.css";

const ebooks = [
  {
    title: "Rotina do sono do bebê",
    description:
      "Um guia prático para ajudar seu bebê a dormir melhor.",
    image: "/images/ebook-sono.jpg",
  },
  {
    title: "Guia de amamentação para mães de primeira viagem",
    description:
      "Tudo o que você precisa saber para começar com mais segurança.",
    image: "/images/ebook-amamentacao.jpg",
  },
  {
    title: "Como continuar a amamentação ao voltar ao trabalho",
    description:
      "Dicas e estratégias para manter a amamentação com leveza.",
    image: "/images/ebook-trabalho.jpg",
  },
];

function Ebook() {
  return (
    <section className="ebooks">

      <div className="section-heading">

        <span>MATERIAIS PARA TE AJUDAR</span>

        <h2>
          Baixe nossos e-books gratuitos
        </h2>

      </div>

      <div className="ebooks-grid">

        {ebooks.map((ebook) => (

          <article
            className="ebook-card"
            key={ebook.title}
          >

            <img
              src={ebook.image}
              alt={ebook.title}
            />

            <div className="ebook-content">

              <h3>{ebook.title}</h3>

              <p>
                {ebook.description}
              </p>

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