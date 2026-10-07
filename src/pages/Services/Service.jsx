import { Link } from "react-router-dom";
import { CiHeart, CiLocationOn} from "react-icons/ci";
import { BsHouse, BsBook } from "react-icons/bs";
import { GiLaserWarning } from "react-icons/gi";
import { LiaTapeSolid } from "react-icons/lia";
import { IoWaterOutline, IoBookOutline } from "react-icons/io5";
import { imagePath } from "../../utils/imagePath";
import "./Services.css";

const services = [
  {
    title: "Consultoria de Amamentação",
    description:
      "Avaliação completa e plano individualizado para você e seu bebê.",
    image: imagePath("/images/Services/Consultoria-Amamentacao.jpg"),
    icon: <CiHeart />,
    link: "/servicos/amamentacao",
  },
  {
    title: "Laserterapia",
    description:
      "Alívio da dor, cicatrização de fissuras e prevenção de complicações.",
    image: imagePath("/images/Services/Laserterapia.jpg"),
    icon: <GiLaserWarning />,
    link: "/servicos/laserterapia",
  },
  {
    title: "Taping",
    description:
      "Técnica que promove suporte, alívio da dor e mobilidade.",
    image: imagePath("/images/service-taping.jpg"),
    icon: <LiaTapeSolid />,
    link: "/servicos/taping",
  },
  {
    title: "Drenagem Linfática",
    description:
      "Redução de inchaço, melhora da circulação e bem-estar no pós-parto.",
    image: imagePath("/images/service-drenagem.jpg"),
    icon: <IoWaterOutline />,
    link: "/servicos/drenagem",
  },
  {
    title: "Mentoria Online",
    description:
      "Formação completa para enfermeiras que desejam se especializar.",
    image: imagePath("/images/service-mentoria.jpg"),
    icon: <IoBookOutline />,
    link: "/mentoria",
  },
];

function Services() {
  return (
    <section className="services">

      <div className="section-heading">

        <span>COMO POSSO TE AJUDAR</span>

        <h2>
          Soluções para cada fase da maternidade
        </h2>

        <p>
          Cuidado individualizado, acolhedor e baseado
          em conhecimento científico.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <article
            className="service-card"
            key={service.title}
          >

            <div className="service-image">

              <img
                src={service.image}
                alt={service.title}
              />

              <div className="service-icon">
                {service.icon}
              </div>

            </div>

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>
                {service.description}
              </p>

              <Link to={service.link}>
                Saiba mais →
              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Services;