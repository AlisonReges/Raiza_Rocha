import Hero from "../Hero/Hero";
import Services from "../Services/Service";
import About from "../Sobre/Sobre";
import Testimonials from "../Testimonials/Testimonials";
import Ebook from "../Ebook/Ebook";
import Instagram from "../Instagram/Instagram";
import CTA from "../../components/layouts/Footer/CTA";

function Home() {
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>

      <section id="servicos">
        <Services />
      </section>

      <section id="sobre">
        <About />
      </section>

      <Testimonials />

      <Ebook />

      <Instagram />

      <CTA />
    </>
  );
}

export default Home;