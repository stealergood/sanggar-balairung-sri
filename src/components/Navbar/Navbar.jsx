import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/logo.jpg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between bg-white px-16">
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center">
          <img className="w-12 md:w-[10rem]" src={Logo} alt="Logo" />
          {/* <div className="flex flex-col md:items-center ml-2">
            <h1 className="font-blenda text-primary text-base md:text-2xl md:ml-2">Balairung Sri</h1>
            <p className="text-primary text-xs md:font-bold md:ml-2">Sanggar Tari dan Musik</p>
          </div> */}
        </div>
        <button 
          className="md:hidden text-primary" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={` md:flex md:items-center md:justify-around ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <ul className="menu menu-vertical md:menu-horizontal text-primary text-base font-bold w-full md:w-auto">
          <li className="dropdown dropdown-hover">
            <details>
              <summary tabIndex={0}>Beranda</summary>
              <ul className={`dropdown-content menu z-10 p-2 ${menuOpen ? 'bg-transparent shadow-none' : 'bg-white shadow'} rounded w-52`}>
                <li><a href="/">Biodata Balairung Sri</a></li>
              </ul>
            </details>
          </li>
          <li className="dropdown">
            <details>
              <summary tabIndex={0}>Belajar</summary>
              <ul className={`dropdown-content menu z-10 p-2 ${menuOpen ? 'bg-transparent shadow-none' : 'bg-white shadow'} rounded w-52`}>
                <li><a href="/belajar/sejarah">Sejarah</a></li>
                <li><a href="/belajar/pakaian">Pakaian</a></li>
                <li><a href="/belajar/alat-musik">Alat Musik</a></li>
                <li><a href="/belajar/lirik-lagu">Lirik Lagu</a></li>
                <li><a href="/belajar/gerakan">Gerakan</a></li>
                <li><a href="/belajar/tarian">Tarian</a></li>
              </ul>
            </details>
          </li>
          <li className="dropdown dropdown-hover">
            <details>
              <summary tabIndex={0}>Fasilitas</summary>
              <ul className={`dropdown-content menu z-10 p-2 ${menuOpen ? 'bg-transparent shadow-none' : 'bg-white shadow'} rounded w-52`}>
                <li><a href="/fasilitas">Fasilitas Sanggar</a></li>
              </ul>
            </details>
          </li>
          <li className="dropdown dropdown-hover">
            <details>
              <summary tabIndex={0}>Aktifitas</summary>
              <ul className={`dropdown-content menu z-10 p-2 ${menuOpen ? 'bg-transparent shadow-none' : 'bg-white shadow'} rounded w-52`}>
                <li><a href="/aktifitas/latihan">Latihan Rutin</a></li>
                <li><a href="/aktifitas/kegiatan">Kegiatan</a></li>
              </ul>
            </details>
          </li>
          <li className="dropdown dropdown-hover">
            <details>
              <summary tabIndex={0}>Penghargaan</summary>
              <ul className={`dropdown-content menu z-10 p-2 ${menuOpen ? 'bg-transparent shadow-none' : 'bg-white shadow'} rounded w-52`}>
                <li><a href="/penghargaan">Penghargaan</a></li>
              </ul>
            </details>
          </li>
          <li className="dropdown dropdown-hover">
            <details>
              <summary tabIndex={0}>Galeri</summary>
              <ul className={`dropdown-content menu z-10 p-2 ${menuOpen ? 'bg-transparent shadow-none' : 'bg-white shadow'} rounded w-52`}>
                <li><a href="/galeri/foto">Foto</a></li>
                <li><a href="/galeri/video">Video</a></li>
              </ul>
            </details>
          </li>
          <li className="dropdown dropdown-hover">
            <details>
              <summary tabIndex={0}>Informasi</summary>
              <ul className={`dropdown-content menu z-10 p-2 ${menuOpen ? 'bg-transparent shadow-none' : 'bg-white shadow'} rounded w-40`}>
                <li><a href="/informasi/kontak">Kontak</a></li>
                <li><a href="/informasi/alamat">Alamat</a></li>
                <li><a href="/informasi/testimoni">Testimoni</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
