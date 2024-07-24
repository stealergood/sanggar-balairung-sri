import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [clickedItem, setClickedItem] = useState(false);

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleItemClick = (index) => {
    setClickedItem(clickedItem === index ? false : index);
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between bg-white px-6 md:px-16 shadow-2xl">
      <div className=" flex justify-between items-center py-3">
        <div className="flex items-center">
          <img className="w-20 md:w-[10rem]" src={Logo} alt="Logo" />
        </div>
        <button 
          className="md:hidden text-primary" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`md:items-center md:justify-around ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <ul className="flex flex-col flex-wrap md:flex-row text-primary text-base font-bold w-full md:w-auto">
          {[
            { title: "Beranda", submenu: [{ name: "Biodata Balairung Sri", link: "/" }] },
            { title: "Belajar", submenu: [
              { name: "Sejarah", link: "/belajar/sejarah" },
              { name: "Pakaian", link: "/belajar/pakaian" },
              { name: "Alat Musik", link: "/belajar/alat-musik" },
              { name: "Lirik Lagu", link: "/belajar/lirik-lagu" },
              { name: "Gerakan", link: "/belajar/gerakan" },
              { name: "Tarian", link: "/belajar/tarian" }
            ] },
            { title: "Fasilitas", link: "/fasilitas" },
            { title: "Aktifitas", submenu: [
              { name: "Latihan Rutin", link: "/aktifitas/latihan" },
              { name: "Kegiatan", link: "/aktifitas/kegiatan" }
            ] },
            { title: "Penghargaan", link: "/penghargaan" },
            { title: "Galeri", submenu: [
              { name: "Foto", link: "/galeri/foto" },
              { name: "Video", link: "/galeri/video" }
            ] },
            { title: "Informasi", submenu: [
              { name: "Kontak", link: "/informasi/kontak" },
              { name: "Alamat", link: "/informasi/alamat" },
              { name: "Testimoni", link: "/informasi/testimoni" }
            ] }
          ].map((menu, index) => (
            <li key={index} className="relative group">
              {menu.submenu ? (
                <>
                  <button 
                    className={`flex gap-1 items-center py-3 md:py-0 md:px-6 hover:text-[#EBD75B] ${menu.title === 'Beranda' ? 'py-0' : ''} ${menu.title === 'Informasi' ? 'py-0' : ''}`}
                    onClick={() => {
                      toggleSubmenu(index);
                    }}
                  >
                    {menu.title}
                    <IoIosArrowDown className="inline" />
                  </button>
                  <ul className={`md:absolute ${submenuOpen[index] ? 'block' : 'hidden'} md:group-hover:block md:bg-white md:shadow rounded w-[11rem] z-50 `}>
                    {menu.submenu.map((item, subIndex) => (
                      <li key={subIndex} className="py-1 px-3 hover:bg-gray-200">
                        <a onClick={() => handleItemClick(subIndex)} href={item.link} className={`hover:text-[#EBD75B] ${clickedItem === subIndex ? 'text-[#EBD75B]' : ''}`}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={menu.link} className={`md:py-0 md:px-6 hover:text-[#EBD75B]`}>
                  {menu.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
