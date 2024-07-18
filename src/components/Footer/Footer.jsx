import Logo from "../../assets/logo.png";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="footer bg-[#C9BBB2] text-primary p-5 sm:p-8 md:px-5 flex flex-col lg:flex-row gap-5 lg:justify-around border-t-4 border-[#582022]">
      <aside className="flex flex-col lg:flex-col items-start lg:items-start gap-5">
        <div className="flex items-start justify-start gap-3 lg:gap-5">
          <img className="w-56" src={Logo} alt="Logo" />
        </div>
        <p className="text-xs mt-3 lg:mt-5">
          © 2024 Sanggar Seni Kartika Budaya. All Rights Reserved.
        </p>
      </aside>
      <nav className="flex flex-col gap-5 lg:gap-5 md:ml-10">
        <h6 className="text-2xl sm:text-3xl lg:text-2xl font-extrabold">Menjelajah</h6>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-16">
          <div className="flex flex-col text-lg sm:text-xl lg:text-[17px] text-black font-medium gap-1">
            <a className="link link-hover">Beranda</a>
            <a className="link link-hover">Belajar</a>
            <a className="link link-hover">Fasilitas</a>
            <a className="link link-hover">Aktifitas</a>
          </div>
          <div className="flex flex-col text-lg sm:text-xl lg:text-[17px] text-black font-medium gap-1">
            <a className="link link-hover">Penghargaan</a>
            <a className="link link-hover">Galeri</a>
            <a className="link link-hover">Informasi</a>
          </div>
        </div>
      </nav>
      <nav className="flex flex-col gap-3 lg:gap-5">
        <h6 className="text-2xl sm:text-3xl lg:text-2xl font-extrabold">Media Sosial</h6>
        <div className="flex gap-3 lg:gap-5">
          <a href="" className="link link-hover"><FaInstagram className="size-6 lg:size-9 md:size-7" color="#000000"/></a>
          <a href="" className="link link-hover"><FaWhatsapp className="size-6 lg:size-9 md:size-7" color="#000000"/></a>
          <a href="" className="link link-hover"><FiYoutube className="size-6 lg:size-9 md:size-7" color="#000000"/></a>
          <a href="" className="link link-hover"><TfiEmail className="size-6 lg:size-9 md:size-7" color="#000000"/></a>
        </div>
      </nav>
    </footer>
  );
};
