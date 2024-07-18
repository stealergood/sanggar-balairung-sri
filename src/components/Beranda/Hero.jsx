import { Slider } from "../UI/Slider/Slider";
import Logo from '../../assets/svgComponent/Logo';

export const Hero = () => {
  return (
    <div className="w-full lg:h-screen relative">
      <Slider />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-fit flex flex-col items-center justify-center lg:p-0 md:mb-0">
          <Logo className="w-20 h-20 lg:h-fit lg:w-[186px]" />
          <h1 className="text-white text-xl md:text-6xl lg:text-8xl font-blenda text-center">
            Balairung Sri
          </h1>
          <p className="text-white text-sm md:text-2xl lg:text-4xl font-bold md:mt-4 text-center">
            Sanggar Tari dan Musik
          </p>
        </div>
      </div>
    </div>
  );
};
