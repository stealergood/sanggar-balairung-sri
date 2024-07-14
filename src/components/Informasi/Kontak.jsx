import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

export const Kontak = () => {
  return (
    <div className='w-full bg-motif bg-cover bg-center px-5 md:px-10 pb-16'>
      <div className="w-full flex justify-center font-blenda text-primary text-6xl py-10">
        <h1>Kontak</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center lg:p-10 py-16 gap-20">
        <div className="w-5/6 md:w-[40%] lg:w-[28%] h-48 md:h-44 bg-[#C2B4B4] relative flex flex-col justify-center items-center rounded-3xl text-black gap-2">
          <div className="absolute w-20 h-20 bg-[#EBD75B] rounded-full top-[-40px] flex justify-center items-center border-4 border-primary">
            <FaWhatsapp size={40} color="#491D21"/>
          </div>
          <h1 className="font-mon-bold text-xl lg:text-3xl text-center">Telephone</h1>
          <p className="font-mon-semiBold text-xl">082285042211</p>
        </div>
        <div className="w-5/6 md:w-[40%] lg:w-[28%] h-48 md:h-44 bg-[#C2B4B4] relative flex flex-wrap flex-col justify-center items-center rounded-3xl text-black gap-2">
          <div className="absolute w-20 h-20 bg-[#EBD75B] rounded-full top-[-40px] flex justify-center items-center border-4 border-primary">
            <TfiEmail size={40} color="#491D21"/>
          </div>
          <h1 className="font-mon-bold text-xl lg:text-3xl text-center">Email</h1>
          <p className="md:hidden font-mon-semiBold text-center">sanggarnalairungsri@ gmail.com</p>
          <p className="hidden md:block font-mon-semiBold text-center">sanggarnalairungsri@gmail.com</p>
        </div>
        <div className="w-5/6 md:w-[40%] lg:w-[28%] h-48 md:h-44 bg-[#C2B4B4] relative flex flex-col justify-center items-center rounded-3xl text-black gap-2">
          <div className="absolute w-20 h-20 bg-[#EBD75B] rounded-full top-[-40px] flex justify-center items-center border-4 border-primary">
            <FaInstagram size={40} color="#491D21"/>
          </div>
          <h1 className="font-mon-bold text-xl lg:text-3xl text-center">Instagram</h1>
          <p className="font-mon-semiBold text-xl">@balairungsri</p>
        </div>
        <div className="w-5/6 md:w-[40%] lg:w-[28%] h-48 md:h-44 bg-[#C2B4B4] relative flex flex-col justify-center items-center rounded-3xl text-black gap-2">
          <div className="absolute w-20 h-20 bg-[#EBD75B] rounded-full top-[-40px] flex justify-center items-center border-4 border-primary">
            <IoLocationOutline size={40} color="#491D21"/>
          </div>
          <h1 className="font-mon-bold text-xl lg:text-3xl text-center">Location</h1>
          <p className="font-mon-semiBold text-center">JL. Suak Lanjut, kec. Siak,Kab. Siak Sri Indrapura,Prov. Riau</p>
        </div>
        <div className="w-5/6 md:w-[40%] lg:w-[28%] h-48 md:h-44 bg-[#C2B4B4] relative flex flex-col justify-center items-center rounded-3xl text-black gap-2">
          <div className="absolute w-20 h-20 bg-[#EBD75B] rounded-full top-[-40px] flex justify-center items-center border-4 border-primary">
            <AiOutlineYoutube size={40} color="#491D21"/>
          </div>
          <h1 className="font-mon-bold text-xl lg:text-3xl text-center">Youtube</h1>
          <p className="font-mon-semiBold text-xl">Athantanjak chanel</p>
        </div>
      </div>
    </div>
  )
}
