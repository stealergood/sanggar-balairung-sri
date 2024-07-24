import { Navbar } from "../../../components/Navbar/Navbar"
import { Footer } from "../../../components/Footer/Footer"
import { Kontak as Section } from "../../../components/Informasi/Kontak"
import { Background1 } from "../../../components/UI/Background/Background1/Background1"

export const Kontak = () => {
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
