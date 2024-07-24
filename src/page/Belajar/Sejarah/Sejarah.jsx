import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Sejarah as Section } from "../../../components/Belajar/Sejarah";
import { Background1 } from "../../../components/UI/Background/Background1/Background1";

export const Sejarah = () => {
  return (
    <div className="w-full h-fit bg-white">
      <Navbar />
      <Background1>
        <Section />
      </Background1>
      <Footer />
    </div>
  );
};
