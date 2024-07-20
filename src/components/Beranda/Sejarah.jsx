import SejarahPict from "../../assets/images/sejarah.jpeg";
import Gambus from "../../assets/gambus.svg"
import Marwas from "../../assets/marwas.svg"

export const Sejarah = () => {
  return (
    <div className="w-full h-[800px] md:h-[1024px] flex flex-col bg-motif-android1 md:bg-motif bg-cover bg-center">
      <div className="w-full flex justify-center pt-5 md:py-20 text-4xl md:text-6xl">
        <h1 className="font-blenda text-primary">Balairung Sri</h1>
      </div>
      <div className="w-full px-6 lg:px-20 flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-around py-10">
        <div className="w-full lg:w-[50%] flex flex-wrap text-black text-justify text-[12px] md:text-lg mb-5 md:mb-0">
          <p>
            Sanggar Tari dan Musik Balairung Sri adalah komunitas yang terletak
            di Kabupaten Siak, Riau. Didirikan pada 7 Mei 2017, sanggar ini
            berperan penting dalam melestarikan dan mempromosikan budaya Melayu
            tradisional, khususnya tari Zapin Siak. Sanggar ini menjadi pusat
            pendidikan dan penghargaan nilai-nilai budaya Melayu bagi generasi
            muda. Konservasi budaya tradisional di Siak sangat penting untuk
            perkembangan budaya dan merupakan alat berharga dalam melestarikan
            warisan budaya. Sanggar Tari dan Musik Balairung Sri bekerja sama
            dengan masyarakat dan generasi muda untuk mengajar, mempromosikan,
            dan melestarikan budaya tradisional. Upaya komunitas ini sangat
            bermanfaat dalam konservasi budaya di Provinsi Siak.
          </p>
        </div>
        <div className="w-full lg:w-[45%] relative flex justify-center">
          <img src={SejarahPict} alt="foto sejarah" className="rounded-xl w-5/6 md:w-full" />
          <img src={Gambus} alt="gambus" className="absolute w-28 top-[-50px] right-[-10px] md:w-60 md:right-[-70px] md:top-[-150px]"/>
          <img src={Gambus} alt="gambus" className="absolute block md:hidden rotate-[55deg] w-28 top-[-50px] left-[-10px]"/>
          <img src={Marwas} alt="marwas" className="absolute w-12 md:w-28 top-[-20px] right-24 md:top-[-50px] md:right-36"/>
          <img src={Marwas} alt="marwas" className="absolute block md:hidden w-12 top-[-20px] left-24"/>
        </div>
      </div>
    </div>
  );
};
