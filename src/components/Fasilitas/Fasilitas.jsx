import Fasilitas1 from '../../assets/images/fasilitas1.png'
import Fasilitas2 from '../../assets/images/fasilitas2.png'

export const Fasilitas = () => {
  return (
    <div className='w-full bg-motif bg-cover bg-center pb-16'>
      <div className='w-full flex justify-center font-blenda text-primary text-4xl md:text-6xl py-10'>
        <h1>Fasilitas Sanggar</h1>
      </div>
      <div className='w-full px-5 lg:px-0 flex flex-col md:flex-row justify-center gap-7'>
        <div className='md:w-3/6 lg:w-2/6 h-[43rem] bg-[#C2B4B4] p-6 md:p-16 lg:py-10 flex flex-col items-center gap-5 rounded-badge'>
          <img src={Fasilitas1} alt="" />
          <h1 className='font-blenda text-primary text-3xl text-center'>Fasilitas Luar</h1>
          <ul className='text-black list-disc'>
            <li>Area Parkir</li>
            <li>Lapangan Terbuka</li>
          </ul>
        </div>
        <div className='md:w-3/6 lg:w-2/6 h-[43rem] bg-[#C2B4B4] p-6 md:p-16 lg:py-10 flex flex-col flex-wrap items-center gap-5 rounded-badge'>
          <img src={Fasilitas2} alt="" />
          <h1 className='font-blenda text-primary text-3xl text-center'>Fasilitas Dalam</h1>
          <ul className='text-black list-disc lg:px-10'>
            <li>Perlengkapan busana tari</li>
            <li>Ruang studio tari</li>
            <li>Ruang ganti</li>
            <li>Peralatan latihan : alat musik tradisional (gambus dan marwas), sound sistem, komputer, proyektor, set audio, dll</li>
            <li>Kantor untuk administrasi, pendaftaran dan informasi</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
