import Pendiri1 from '../../assets/images/pendiri1.jpg';
import Pendiri2 from '../../assets/images/pendiri2.jpg';

export const Pendiri = () => {

  return (
    <div className="w-full h-auto min-h-[52rem] bg-motif2 bg-cover bg-center">
      <div className="w-full p-6 md:p-10 flex justify-center">
        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-blenda">Pendiri</h1>
      </div>
      <div className="w-full flex flex-col px-6 lg:px-20 lg:items-center md:gap-10">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="py-10 px-6 md:px-10 lg:px-20">
            <img src={Pendiri1} alt="pendiri 1" className="w-32 md:w-56 lg:w-[310px] h-[210px]  border-4 border-primary rounded-full" />
          </div>
          <div className="w-full h-full flex flex-col justify-center gap-5 text-center md:text-left mb-5">
            <h1 className="text-black lg:text-3xl font-mon-bold underline underline-offset-8 decoration-primary">TUAN RIDWAN, S.SOS</h1>
            <div className="flex justify-center md:justify-start">
              <ul className="text-black text-start list-disc px-5 text-sm md:text-2xl">
                <li><pre>Kelahiran            : Siak Sri Indapura</pre></li>
                <li><pre>Tempat & Tgl Lahir   : Siak 13 Juli 1981</pre></li>
                <li><pre>Lulusan              : S1 (Administrasi Negara)</pre></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="py-10 px-6 md:px-10 lg:px-20">
            <img src={Pendiri2} alt="pendiri 2" className="w-32 md:w-56 lg:w-[310px] h-[210px] border-4 border-primary rounded-full" />
          </div>
          <div className="w-full h-full flex flex-col justify-center gap-5 text-center md:text-left">
            <h1 className="text-black lg:text-3xl font-mon-bold underline underline-offset-8 decoration-primary">TUAN SYAFRIJALDI, S.PD. M.SN</h1>
            <div className="flex justify-center md:justify-start">
              <ul className="text-black text-start list-disc px-5 text-sm md:text-2xl">
                <li><pre>Kelahiran            : kpn besar</pre></li>
                <li><pre>Tempat & Tgl Lahir   : kpn besar, 28 Oktober 1972</pre></li>
                <li><pre>Lulusan              : S2 (Institut Seni Indonesia <br />                       Padang Pajang)</pre></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
