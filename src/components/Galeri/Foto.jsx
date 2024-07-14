import Galeri1 from "../../assets/images/galeri-foto/galeri1.png";
import Galeri2 from "../../assets/images/galeri-foto/galeri2.png";
import Galeri3 from "../../assets/images/galeri-foto/galeri3.png";
import Galeri4 from "../../assets/images/galeri-foto/galeri4.png";
import Galeri5 from "../../assets/images/galeri-foto/galeri5.png";
import Galeri6 from "../../assets/images/galeri-foto/galeri6.png";

export const Foto = () => {
  return (
    <div className="w-full bg-motif bg-cover bg-center px-5 md:px-0 lg:px-10 pb-16">
      <div className="w-full flex justify-center py-10 font-blenda text-primary text-4xl md:text-6xl">
        <h1>Galery - Foto</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10">
        <img src={Galeri1} alt="" />
        <img src={Galeri2} alt="" />
        <img src={Galeri3} alt="" />
        <img src={Galeri4} alt="" />
        <img src={Galeri5} alt="" />
        <img src={Galeri6} alt="" />
      </div>
      <div></div>
    </div>
  );
};
