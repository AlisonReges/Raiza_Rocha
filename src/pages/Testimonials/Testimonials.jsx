import "./Testimonials.css";

const testimonials = [
  {
    text: "A consultoria mudou minha forma de amamentar. Me senti acolhida e segura desde o primeiro atendimento.",
    name: "Juliana M.",
    baby: "Mãe do Pedro",
  },
  {
    text: "O laser aliviou muito a dor das fissuras. Recomendo de olhos fechados!",
    name: "Renata A.",
    baby: "Mãe da Laura",
  },
  {
    text: "O taping me ajudou demais no pós-parto! Mais leveza e menos dor.",
    name: "Camila L.",
    baby: "Mãe do Miguel",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="section-heading">

        <span>DEPOIMENTOS</span>

        <h2>
          Histórias de quem já foi acolhido
        </h2>

      </div>

      <div className="testimonials-grid">

        {testimonials.map((item) => (

          <article
            className="testimonial-card"
            key={item.name}
          >

            <div className="quote">
              “
            </div>

            <p>
              {item.text}
            </p>

            <div className="testimonial-author">

              <div className="author-avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <strong>{item.name}</strong>
                <small>{item.baby}</small>
              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;