import SejarahPict from "../../assets/images/sejarah.jpeg";

export const Sejarah = () => {
  return (
    <div className="w-full h-[800px] md:h-[1024px] relative flex flex-col bg-motif-android1 md:bg-motif bg-cover bg-center">
      <div className="w-full flex justify-center pt-5 md:py-20 text-4xl md:text-6xl">
        <h1 className="font-blenda text-primary">Balairung Sri</h1>
      </div>
      <div className="w-full px-6 lg:px-20 flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-around py-10">
        <div className="w-full lg:w-[40%] flex flex-wrap text-black text-justify text-[12px] md:text-lg mb-5 md:mb-0">
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
        <div className="w-full lg:w-[45%]">
          <img src={SejarahPict} alt="foto sejarah" className="rounded-xl" />
        </div>
        {/* <Gambus className="top-3 md:top-12  w-28 md:w-48 lg:w-fit rotate-12 md:rotate-0 right-0 md:right-0 absolute lg:top-10" />
        <Marwas className="top-28 md:top-36 w-14 md:w-32 lg:w-fit right-24 md:right-36 absolute lg:right-52 lg:top-32" />
        <Gambus className="lg:hidden w-28 md:w-48 rotate-45 top-3 md:top-12 left-0 absolute lg:top-10" />
        <Marwas className="lg:hidden w-14 md:w-32 top-28 md:top-36 left-24 md:left-36 absolute lg:right-52 lg:top-32" /> */}
      </div>
    </div>
  );
};
