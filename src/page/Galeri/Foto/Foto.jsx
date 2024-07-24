import { Navbar } from "../../../components/Navbar/Navbar"
import { Footer } from "../../../components/Footer/Footer"
import { Foto as Section } from "../../../components/Galeri/Foto"
import { Background1 } from "../../../components/UI/Background/Background1/Background1"

export const Foto = () => {
  return (
    <div className="w-full h-fit bg-white">
      <Navbar />
      <Background1>
        <Section />
      </Background1>
      <Footer />
    </div>
  )
}
