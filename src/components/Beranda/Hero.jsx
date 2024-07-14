import { Slider } from "../UI/Slider/Slider";
import Logo from "../../assets/logo.png";

export const Hero = () => {
  return (
    <div className="w-full lg:h-screen relative">
      <Slider />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:left-[23rem] lg:-translate-x-0 w-fit h-full flex flex-col items-center justify-center p-4 lg:p-0">
        <img src={Logo} alt="logo" className="w-16 md:w-32 lg:w-40" />
        <h1 className="text-white text-xl md:text-6xl lg:text-8xl font-blenda text-center">
          Balairung Sri
        </h1>
        <p className="text-white text-sm md:text-2xl lg:text-4xl font-bold md:mt-4 text-center">
          Sanggar Tari dan Musik
        </p>
        {/* <div className="flex flex-row md:mt-2">
          <button className="bg-white text-primary text-sm md:text-xl lg:text-2xl font-medium px-4 py-2 rounded-md rounded-r-none md:mt-4">
            Aktifitas
          </button>
          <button className="bg-transparent border text-white text-sm md:text-xl lg:text-2xl font-medium px-4 py-2 rounded-md  rounded-l-none md:mt-4">
            Belajar
          </button>
        </div> */}
      </div>
    </div>
  );
};
