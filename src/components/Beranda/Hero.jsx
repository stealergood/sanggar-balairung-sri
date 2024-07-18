import { Slider } from "../UI/Slider/Slider";
import Logo from '../../assets/svgComponent/Logo';

export const Hero = () => {
  return (
    <div className="w-full lg:h-screen relative">
      <Slider />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:left-[23rem] lg:-translate-x-0 w-fit h-full flex flex-col items-center justify-center  lg:p-0 mb-10 md:mb-0">
        <Logo className="w-20 h-20 lg:h-fit lg:w-[186px]" />
        <h1 className="text-white text-xl md:text-6xl lg:text-8xl font-blenda text-center">
          Balairung Sri
        </h1>
        <p className="text-white text-sm md:text-2xl lg:text-4xl font-bold md:mt-4 text-center">
          Sanggar Tari dan Musik
        </p>
      </div>
    </div>
  );
};
