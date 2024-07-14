import { Beranda } from "./page/Beranda/Beranda"
import { Sejarah } from "./page/Belajar/Sejarah/Sejarah"
import { Pakaian } from "./page/Belajar/Pakaian/Pakaian"
import { AlatMusik } from "./page/Belajar/AlatMusik/AlatMusik"
import { LirikMusik } from "./page/Belajar/LirikMusik/LirikMusik"
import { Gerakan } from "./page/Belajar/Gerakan/Gerakan"
import { Tarian } from "./page/Belajar/Tarian/Tarian"
import { Fasilitas } from "./page/Fasilitas/Fasilitas"
import { Kegiatan } from "./page/Aktifitas/Kegiatan/Kegiatan"
import { Latihan } from "./page/Aktifitas/Latihan/Latihan"
import { Penghargaan } from "./page/Penghargaan/Penghargaan"
import { Foto } from "./page/Galeri/Foto/Foto"
import { Video } from "./page/Galeri/Video/Video"
import { Kontak } from "./page/Informasi/Kontak/Kontak"
import { Alamat } from "./page/Informasi/Alamat/Alamat"
import { Testimoni } from "./page/Informasi/Testimoni/Testimoni"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/belajar/sejarah" element={<Sejarah />} />
        <Route path="/belajar/pakaian" element={<Pakaian />} />
        <Route path="/belajar/alat-musik" element={<AlatMusik />} />
        <Route path="/belajar/lirik-lagu" element={<LirikMusik />} />
        <Route path="/belajar/gerakan" element={<Gerakan />} />
        <Route path="/belajar/tarian" element={<Tarian />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/aktifitas/kegiatan" element={<Kegiatan />} />
        <Route path="/aktifitas/latihan" element={<Latihan />} />
        <Route path="/penghargaan" element={<Penghargaan />} />
        <Route path="/galeri/foto" element={<Foto />} />
        <Route path="/galeri/video" element={<Video />} />
        <Route path="/informasi/kontak" element={<Kontak />} />
        <Route path="/informasi/alamat" element={<Alamat />} />
        <Route path="/informasi/testimoni" element={<Testimoni />} />
      </Routes>
    </>
  )
}

export default App
