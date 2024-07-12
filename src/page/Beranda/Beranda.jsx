import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Sejarah } from "../../components/Beranda/Sejarah";
import { Pendiri } from "../../components/Beranda/Pendiri";
import { Hero } from "../../components/Beranda/Hero";
import { VisiMisi } from "../../components/Beranda/VisiMisi";

export const Beranda = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sejarah />
      <Pendiri />
      <VisiMisi />
      <Footer />
    </>
  );
};
