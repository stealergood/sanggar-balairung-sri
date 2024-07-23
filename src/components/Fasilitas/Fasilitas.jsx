import Fasilitas1 from '../../assets/images/fasilitas1.png'
import Fasilitas2 from '../../assets/images/fasilitas2.png'
import Gambus from "../../assets/gambus.svg"
import Marwas from "../../assets/marwas.svg"

export const Fasilitas = () => {
  return (
    <div className='w-full min-h-[800px] md:h-[1024px] bg-motif-android1 md:bg-motif bg-cover bg-center pb-10'>
      <div className='w-full flex justify-center text-center font-blenda text-primary text-4xl md:text-6xl py-10 md:py-20'>
        <h1>Fasilitas Sanggar</h1>
      </div>
      <div className='w-full px-6 lg:px-20 flex flex-col md:flex-row justify-center gap-7 md:gap-20'>
        <div className='md:w-3/6 lg:w-3/6 pb-16  bg-[#C2B4B4] p-6 md:p-14 lg:py-10 flex flex-col items-center gap-5 rounded-badge'>
          <div className='relative '>
            <img src={Fasilitas2} alt=""/>
            <img src={Gambus} alt="gambus" className=" absolute w-24 rotate-[10deg] md:rotate-[60deg] left-[-16%] top-[50%] md:w-32 md:left-[-23%] lg:left-[-13%] md:top-[-50%] lg:top-[-30%]"/>
            <img src={Marwas} alt="marwas" className=" absolute w-16 top-[-10%] right-[-10%] md:w-20 md:top-[-20%] lg:top-[-15%] md:right-[-18%] lg:right-[-10%]"/>
          </div>
          <h1 className='font-blenda text-primary text-2xl md:text-3xl text-center'>Fasilitas Luar</h1>
          <ul className='text-black list-disc text-[12px] md:text-base'>
            <li>Area Parkir</li>
            <li>Lapangan Terbuka</li>
          </ul>
        </div>
        <div className='md:w-3/6 lg:w-3/6 pb-16  bg-[#C2B4B4] p-6 md:p-14 lg:py-10 flex flex-col flex-wrap items-center  gap-5 rounded-badge'>
          <div className='relative'>
            <img src={Fasilitas1} alt="" />
            <img src={Gambus} alt="gambus" className="absolute w-24 rotate-[50deg] md:rotate-[-4deg] right-[-16%] top-[50%] md:w-32 md:right-[-23%] lg:right-[-13%] md:top-[-50%] lg:top-[-30%]"/>
            <img src={Marwas} alt="marwas" className="absolute w-16 top-[-10%] left-[-10%] md:w-20 md:top-[-20%] lg:top-[-15%] md:left-[-18%] lg:left-[-10%]"/>
          </div>
          <h1 className='font-blenda text-primary text-2xl md:text-3xl text-center'>Fasilitas Dalam</h1>
          <ul className='text-black list-disc text-[12px] md:text-base'>
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
