import { Navbar } from "../../../components/Navbar/Navbar"
import { Footer } from "../../../components/Footer/Footer"
import { AlatMusik as Section } from "../../../components/Belajar/AlatMusik"
import { Background3 } from "../../../components/UI/Background/Background3/Background3"

export const AlatMusik = () => {
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
