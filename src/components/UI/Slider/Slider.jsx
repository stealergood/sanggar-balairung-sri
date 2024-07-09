import { Carousel } from "@material-tailwind/react";
import Herobg1 from "../../../assets/images/herobg1.jpeg";
import Herobg2 from "../../../assets/images/herobg2.jpeg";

export const Slider = () => {
  return (
    <Carousel className="rounded-xl brightness-75">
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
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};
