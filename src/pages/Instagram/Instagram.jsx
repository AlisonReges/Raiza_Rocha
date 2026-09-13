import "./Instagram.css";

const photos = [
  "/images/instagram-1.jpg",
  "/images/instagram-2.jpg",
  "/images/instagram-3.jpg",
  "/images/instagram-4.jpg",
  "/images/instagram-5.jpg",
];

function Instagram() {
  return (
    <section className="instagram">

      <div className="instagram-container">

        <div className="instagram-content">

          <span>
            ACOMPANHE NO INSTAGRAM
          </span>

          <h2>
            Conteúdo que acolhe
            <br />
            e informa
          </h2>

          <p>
            Dicas diárias, bastidores e muito conteúdo
            para ajudar na sua jornada da maternidade.
          </p>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            Seguir no Instagram
          </a>

        </div>

        <div className="instagram-grid">

          {photos.map((photo, index) => (

            <img
              key={photo}
              src={photo}
              alt={`Conteúdo do Instagram ${index + 1}`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Instagram;