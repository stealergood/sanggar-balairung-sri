import { Carousel } from "@material-tailwind/react";
import Herobg1 from "../../../assets/images/herobg1.png";
import Herobg2 from "../../../assets/images/herobg2.jpeg";

export const Slider = () => {
  return (
    <Carousel className="brightness-75" transition={{ duration: 1, ease: "easeInOut" }} loop={true}>
      <img
        src={Herobg1}
        alt="image 1"
        className="h-full w-full object-fill"
      />
      <img
        src={Herobg2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};
