import Pendiri1 from "../../assets/images/pendiri1.jpg";
import Pendiri2 from "../../assets/images/pendiri2.jpg";
import Gambus from "../../assets/gambus.svg"
import Marwas from "../../assets/marwas.svg"

export const Pendiri = () => {
  return (
    <div className="w-full h-[800px] md:h-[1024px] bg-motif-android2 md:bg-motif2 bg-cover bg-center py-16 md:py-52">
      <div className="w-full px-6  flex justify-center">
        <h1 className="text-primary text-4xl md:text-4xl lg:text-6xl font-blenda">
          Pendiri
        </h1>
      </div>
      <div className="w-full flex flex-col px-6 lg:px-20 lg:items-center">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="relative py-5 md:py-8 px-6 md:px-10 lg:px-20">
            <img
              src={Pendiri1}
              alt="pendiri 1"
              className="w-32 md:w-56 lg:w-[310px] border-4 border-primary rounded-full"
            />
            <img src={Gambus} alt="gambus" className="absolute w-24 rotate-[50deg] bottom-[1%] right-[-5%] md:right-[-3%] md:w-32 lg:w-40 lg:right-[5%] lg:top-[25%]"/>
          </div>
          <div className="w-full h-full flex flex-col justify-center gap-5 text-center md:text-left mb-5">
            <h1 className="text-black lg:text-3xl font-mon-bold underline underline-offset-8 decoration-primary">
              TUAN RIDWAN, S.SOS
            </h1>
            <div className="flex justify-center md:justify-start">
              <ul className="text-black text-start list-disc text-xs md:text-2xl">
                <li className="flex">
                  <span className="flex-shrink-0 w-28 lg:w-52">Kelahiran</span>
                  <span>: Siak Sri Indrapura</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-28 lg:w-52">Tempat & Tgl Lahir</span>
                  <span>: Siak 13 Juli 1981</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-28 lg:w-52">Lulusan</span>
                  <span>: S1 Administrasi Negara</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="relative py-5 md:py-8 px-6 md:px-10 lg:px-20">
            <img
              src={Pendiri2}
              alt="pendiri 2"
              className="w-32 md:w-56 lg:w-[310px] border-4 border-primary rounded-full"
            />
            <img src={Marwas} alt="marwas" className="absolute w-14 md:w-16 bottom-[10%] lg:w-24 lg:right-[20%]"/>
          </div>
          <div className="w-full h-full flex flex-col justify-center gap-5 text-center md:text-left">
            <h1 className="text-black lg:text-3xl font-mon-bold underline underline-offset-8 decoration-primary">
              TUAN SYAFRIJALDI, S.PD. M.SN
            </h1>
            <div className="flex justify-center md:justify-start">
              <ul className="text-black text-start list-disc text-xs md:text-2xl">
                <li className="flex">
                  <span className="flex-shrink-0 w-28 lg:w-52">Kelahiran</span>
                  <span>: kpn besar</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-28 lg:w-52">Tempat & Tgl Lahir</span>
                  <span>: kpn besar, 28 Oktober 1972</span>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 w-28 lg:w-52">Lulusan</span>
                  <span>: S2 (Institut Seni Indonesia Padang Pajang)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
