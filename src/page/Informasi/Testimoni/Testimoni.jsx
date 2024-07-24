import { Navbar } from "../../../components/Navbar/Navbar"
import { Footer } from "../../../components/Footer/Footer"
import { Testimoni as Section } from "../../../components/Informasi/Testimoni"
import { Background3 } from "../../../components/UI/Background/Background3/Background3"

export const Testimoni = () => {
  return (
    <div className="w-full h-fit bg-gradient2 bg-cover">
      <Navbar />
      <Background3>
        <Section />
      </Background3>
      <Footer />
    </div>
  )
}
