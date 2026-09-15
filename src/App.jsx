import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import Mentoria from "./pages/Mentoria/Mentoria";
import Contato from "./pages/Contato/Contato";
import Sobre from "./pages/Sobre/Sobre";
import Ebook from "./pages/Ebook/Ebook";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mentoria" element={<Mentoria />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/ebooks" element={<Ebook />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
