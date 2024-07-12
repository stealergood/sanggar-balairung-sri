import { Beranda } from "./page/Beranda/Beranda"
import { Sejarah } from "./page/Belajar/Sejarah/Sejarah"
import { Pakaian } from "./page/Belajar/Pakaian/Pakaian"
import { AlatMusik } from "./page/Belajar/AlatMusik/AlatMusik"
import { LirikMusik } from "./page/Belajar/LirikMusik/LirikMusik"
import { Gerakan } from "./page/Belajar/Gerakan/Gerakan"
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
      </Routes>
    </>
  )
}

export default App
