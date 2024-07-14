import Kegiatan1 from "../../assets/images/kegiatan1.png"
import Kegiatan2 from "../../assets/images/kegiatan2.png"

export const Kegiatan = () => {
  return (
    <div className='w-full bg-motif2 bg-cover bg-center px-10 pb-20'>
      <div className='w-full flex flex-col gap-10 items-center py-10 font-blenda text-primary text-4xl md:text-6xl'>
        <h1>Kegiatan</h1>
        <h3 className='text-base font-mon-bold'>Kegiatan yang telah diikuti oleh sanggar Balairung Sri</h3>
        <ul className='text-black font-mon-medium text-base list-decimal'>
          <li>lomba tari zapin siak tahun 2014</li>
          <li>pengisi acara festival siak bermadah 2015</li>
          <li>loka karya (workshop) tari zapin tradisional siak 2023</li>
        </ul>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-around gap-10'>
        <div className="w-fit bg-transparent flex justify-center p-5 md:p-10 rounded-badge shadow-xl shadow-black">
          <img src={Kegiatan1} alt='kegiatan1'/>
        </div>
        <div className="w-fit bg-transparent flex justify-center p-5 md:p-10 rounded-badge shadow-xl shadow-black">
          <img src={Kegiatan2} alt='kegiatan2'/>
        </div>
      </div>
    </div>
  )
}
