import { Navbar } from "../../../components/Navbar/Navbar"
import { Footer } from "../../../components/Footer/Footer"
import { Alamat as Section } from "../../../components/Informasi/Alamat"
import { Background2 } from "../../../components/UI/Background/Background2/Background2"

export const Alamat = () => {
  return (
    <div className="w-full h-fit bg-gradient1 bg-cover">
      <Navbar />
      <Background2>
        <Section />
      </Background2>
      <Footer />
    </div>
  )
}
