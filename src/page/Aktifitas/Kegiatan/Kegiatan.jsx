import { Navbar } from "../../../components/Navbar/Navbar"
import { Footer } from "../../../components/Footer/Footer"
import { Kegiatan as Section } from "../../../components/Aktifitas/Kegiatan"
import { Background2 } from "../../../components/UI/Background/Background2/Background2"

export const Kegiatan = () => {
  return (
    <div className="w-full h-fit bg-gradient2">
      <Navbar />
      <Background2>
        <Section />
      </Background2>
      <Footer />
    </div>
  )
}
