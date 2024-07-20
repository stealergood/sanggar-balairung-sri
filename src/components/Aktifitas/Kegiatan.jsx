import Kegiatan1 from "../../assets/images/kegiatan1.png"
import Kegiatan2 from "../../assets/images/kegiatan2.png"
import Gambus from "../../assets/gambus.svg"
import Marwas from "../../assets/marwas.svg"

export const Kegiatan = () => {
  return (
    <div className='w-full h-[800px] md:h-[1024px] bg-motif-android2 md:bg-motif2 bg-cover bg-center px-6 md:px-10 pb-20 overflow-y-scroll'>
      <div>
        <div className='w-full flex justify-center font-blenda text-primary text-4xl md:text-6xl py-16 md:py-20'>
          <h1>Kegiatan</h1>
        </div>
      </div>
      <div className='w-full flex flex-col md:gap-5 items-center pb-14 font-blenda text-primary'>
        <h3 className='text-[14px] md:text-base font-mon-bold'>Kegiatan yang telah diikuti oleh sanggar Balairung Sri</h3>
        <ul className='text-black font-mon-regular flex flex-col list-decimal list-inside text-[12px] md:text-base'>
          <li>lomba tari zapin siak tahun 2014</li>
          <li>pengisi acara festival siak bermadah 2015</li>
          <li>loka karya (workshop) tari zapin tradisional siak 2023</li>
        </ul>
      </div>
      <div className=' w-full flex flex-col md:flex-row justify-center md:justify-center gap-16'>
        <div className="relative w-fit bg-transparent flex justify-center p-5 md:p-10 rounded-badge shadow-[-1px_-1px_33px_9px_rgba(0,0,0,0.54)]">
          <img src={Kegiatan1} alt='kegiatan1'/>
          <img src={Gambus} alt="gambus" className="absolute hidden md:block w-24 rotate-[55deg] bottom-1 left-[-10px] md:w-40 md:left-[-15px] md:top-[-50px]"/>
          <img src={Gambus} alt="gambus" className="absolute md:hidden w-28 rotate-[55deg] top-[-40px] left-[-20px]"/>
          <img src={Marwas} alt="marwas" className="absolute hidden md:block w-16 bottom-3 md:w-24 md:bottom-3 md:right-2"/>
          <img src={Marwas} alt="marwas" className="absolute md:hidden w-16 bottom-3 right-0"/>
        </div>
        <div className="relative w-fit bg-transparent flex justify-center p-5 md:p-10 rounded-badge shadow-[-1px_-1px_33px_9px_rgba(0,0,0,0.54)]">
          <img src={Kegiatan2} alt='kegiatan2'/>
          <img src={Gambus} alt="gambus" className="absolute hidden md:block w-24 bottom-1 right-[-10px] md:w-40 md:right-[-15px] md:top-[-50px]"/>
          <img src={Gambus} alt="gambus" className="absolute md:hidden w-28 top-[-40px] right-[-20px]"/>
          <img src={Marwas} alt="marwas" className="absolute hidden md:block w-16 bottom-3 md:w-24 md:bottom-3 md:left-2"/>
          <img src={Marwas} alt="marwas" className="absolute md:hidden w-16 bottom-3 left-0"/>
        </div>
      </div>
    </div>
  )
}
