import Kegiatan1 from "../../assets/images/kegiatan1.png"
import Kegiatan2 from "../../assets/images/kegiatan2.png"

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
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-center gap-10'>
        <div className="w-fit bg-transparent flex justify-center p-5 md:p-10 rounded-badge shadow-[-1px_-1px_33px_9px_rgba(0,0,0,0.54)]">
          <img src={Kegiatan1} alt='kegiatan1'/>
        </div>
        <div className="w-fit bg-transparent flex justify-center p-5 md:p-10 rounded-badge shadow-[-1px_-1px_33px_9px_rgba(0,0,0,0.54)]">
          <img src={Kegiatan2} alt='kegiatan2'/>
        </div>
      </div>
    </div>
  )
}
