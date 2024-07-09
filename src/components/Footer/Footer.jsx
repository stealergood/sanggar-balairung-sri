import Logo from "../../assets/logo.png";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="footer bg-white text-primary p-5 sm:p-8 md:px-5 flex flex-col lg:flex-row gap-5 lg:justify-around">
      <aside className="flex flex-col lg:flex-col items-start lg:items-center gap-5">
        <div className="flex items-center gap-3 lg:gap-5">
          <img className="w-10 sm:w-12 lg:w-28" src={Logo} alt="Logo" />
          <div className="flex flex-col lg:items-center">
            <h1 className="font-blenda text-primary text-lg sm:text-xl lg:text-4xl">
              Balairung Sri
            </h1>
            <p className="text-primary text-sm sm:text-base lg:font-bold">
              Sanggar Tari dan Musik
            </p>
          </div>
        </div>
        <p className="text-sm sm:text-base lg:text-base mt-3 lg:mt-0">
          © 2024 Sanggar Seni Kartika Budaya.
          <br />
          All Rights Reserved.
        </p>
      </aside>
      <nav className="flex flex-col gap-3 lg:gap-5">
        <h6 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold">Menjelajah</h6>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-7">
          <div className="flex flex-col text-lg sm:text-xl lg:text-xl text-black font-medium gap-2 lg:gap-3">
            <a className="link link-hover">Beranda</a>
            <a className="link link-hover">Belajar</a>
            <a className="link link-hover">Fasilitas</a>
            <a className="link link-hover">Aktifitas</a>
          </div>
          <div className="flex flex-col text-lg sm:text-xl lg:text-xl text-black font-medium gap-2 lg:gap-3">
            <a className="link link-hover">Penghargaan</a>
            <a className="link link-hover">Galeri</a>
            <a className="link link-hover">Informasi</a>
          </div>
        </div>
      </nav>
      <nav className="flex flex-col gap-3 lg:gap-5">
        <h6 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold">Media Sosial</h6>
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
