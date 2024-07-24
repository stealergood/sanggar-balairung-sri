import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Sejarah } from "../../components/Beranda/Sejarah";
import { Pendiri } from "../../components/Beranda/Pendiri";
import { Hero } from "../../components/Beranda/Hero";
import { VisiMisi } from "../../components/Beranda/VisiMisi";
import { Background1 } from "../../components/UI/Background/Background1/Background1";
import { Background2 } from "../../components/UI/Background/Background2/Background2";
import { Background3 } from "../../components/UI/Background/Background3/Background3";

export const Beranda = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Background1 className="bg-white">
        <Sejarah />
      </Background1>
      <Background2 className="bg-gradient1">
        <Pendiri />
      </Background2>
      <Background3 className="bg-gradient2">
        <VisiMisi />
      </Background3>
      <Footer />
    </>
  );
};
