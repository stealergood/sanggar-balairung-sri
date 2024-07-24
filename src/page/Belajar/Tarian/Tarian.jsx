import { Navbar } from "../../../components/Navbar/Navbar"
import { Footer } from "../../../components/Footer/Footer"
import { Tarian as Section } from "../../../components/Belajar/Tarian"
import { Background2 } from "../../../components/UI/Background/Background2/Background2"

export const Tarian = () => {
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
