import Penghargaan1 from '../../assets/images/penghargaan/penghargaan1.png'
import Penghargaan2 from '../../assets/images/penghargaan/penghargaan2.png'
import Penghargaan3 from '../../assets/images/penghargaan/penghargaan3.png'
import Penghargaan4 from '../../assets/images/penghargaan/penghargaan4.png'

export const Penghargaan = () => {
  return (
    <div className="w-full bg-motif bg-cover bg-center md:px-10 pb-16 flex flex-col items-center">
      <div className="w-full flex justify-center font-blenda text-primary text-4xl md:text-6xl py-10">
        <h1>Penghargaan</h1>
      </div>
      <div className='w-5/6 bg-[#C2B4B4] rounded-xl flex justify-around flex-wrap md:px-10'>
        <div className="w-fit bg-transparent flex flex-col flex-wrap items-center p-5 md:p-10 text-black">
          <img src={Penghargaan1} alt='penghargaan1'/>
          <h2 className='font-mon-bold'>Penghargaan</h2>
          <p className='font-mon-medium text-center'>Festival Keraton Nusantara VI Tahun 2008</p>
        </div>
        <div className="w-fit bg-transparent flex flex-col flex-wrap items-center p-5 md:p-10 text-black">
          <img src={Penghargaan2} alt='penghargaan1'/>
          <h2 className='font-mon-bold'>Penghargaan</h2>
          <p className='font-mon-medium text-center'>Festival Keraton Nusantara VI Tahun 2008</p>
        </div>
        <div className="w-fit bg-transparent flex flex-col flex-wrap items-center p-5 md:p-10 text-black">
          <img src={Penghargaan3} alt='penghargaan1'/>
          <h2 className='font-mon-bold'>Penghargaan</h2>
          <p className='font-mon-medium text-center'>Festival Keraton Nusantara VI Tahun 2008</p>
        </div>
        <div className="w-fit bg-transparent flex flex-col flex-wrap items-center p-5 md:p-10 text-black">
          <img src={Penghargaan4} alt='penghargaan1'/>
          <h2 className='font-mon-bold'>Penghargaan</h2>
          <p className='font-mon-medium text-center'>Festival Keraton Nusantara VI Tahun 2008</p>
        </div>
      </div>
    </div>
  )
}
