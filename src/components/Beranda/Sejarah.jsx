import SejarahPict from "../../assets/images/sejarah.jpeg";
import Gambus from "../../assets/gambus.svg"
import Marwas from "../../assets/marwas.svg"

export const Sejarah = () => {
  return (
    <div className="w-full h-[800px] md:h-[1024px] flex flex-col">
      <div className="w-full flex justify-center py-5 md:py-20 text-4xl md:text-6xl">
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
        <div className="w-full lg:w-[45%] flex justify-center items-center">
          <div className="w-5/6 lg:w-full flex relative justify-center">
            <img src={SejarahPict} alt="foto sejarah" className="rounded-xl w-full h-full" />
            <img src={Gambus} alt="gambus" className=" absolute w-24 sm:w-32 top-[-25%] right-[-10%] md:w-52 md:right-[-10%] lg:right-[-15%] md:top-[-25%] lg:top-[-35%]"/>
            <img src={Gambus} alt="gambus" className=" absolute block md:hidden rotate-[60deg] w-24 sm:w-32 top-[-25%] left-[-10%]"/>
            <img src={Marwas} alt="marwas" className=" absolute w-12 sm:w-20 md:w-28 top-[-10%] right-[28%] md:top-[-13%] md:right-[30%]"/>
            <img src={Marwas} alt="marwas" className=" absolute block md:hidden w-12 sm:w-20 top-[-10%] left-[28%]"/>
          </div>
        </div>
      </div>
    </div>
  );
};
