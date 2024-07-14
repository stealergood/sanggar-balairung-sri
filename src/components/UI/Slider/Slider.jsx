import { Carousel } from "@material-tailwind/react";
import Herobg1 from "../../../assets/images/herobg1.jpeg";
import Herobg2 from "../../../assets/images/herobg2.jpeg";

export const Slider = () => {
  return (
    <Carousel className="brightness-75">
      <img
        src={Herobg1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={Herobg2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};
