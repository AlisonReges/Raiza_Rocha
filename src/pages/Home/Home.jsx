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
      <Hero />

      <Services />

      <About />

      <Testimonials />

      <Ebook />

      <Instagram />

      <CTA />
    </>
  );
}

export default Home;