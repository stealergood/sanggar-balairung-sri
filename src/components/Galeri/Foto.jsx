import { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import Galeri1 from "../../assets/images/galeri-foto/galeri1.jpeg";
import Galeri2 from "../../assets/images/galeri-foto/galeri2.jpeg";
import Galeri3 from "../../assets/images/galeri-foto/galeri3.jpeg";
import Galeri4 from "../../assets/images/galeri-foto/galeri4.jpeg";
import Galeri5 from "../../assets/images/galeri-foto/galeri5.jpeg";
import Galeri6 from "../../assets/images/galeri-foto/galeri6.jpeg";
import Galeri7 from "../../assets/images/galeri-foto/galeri7.jpg";
import Galeri8 from "../../assets/images/galeri-foto/galeri8.jpg";
import Galeri9 from "../../assets/images/galeri-foto/galeri9.jpg";
import Galeri10 from "../../assets/images/galeri-foto/galeri10.jpg";
import Galeri11 from "../../assets/images/galeri-foto/galeri11.jpg";
import Galeri12 from "../../assets/images/galeri-foto/galeri12.jpg";
import Galeri20 from "../../assets/images/galeri-foto/galeri20.jpeg";
import Galeri21 from "../../assets/images/galeri-foto/galeri21.jpeg";
import Galeri22 from "../../assets/images/galeri-foto/galeri22.jpeg";
import Galeri23 from "../../assets/images/galeri-foto/galeri23.jpeg";
import Galeri24 from "../../assets/images/galeri-foto/galeri24.jpeg";
import Galeri25 from "../../assets/images/galeri-foto/galeri25.jpeg";
import Galeri26 from "../../assets/images/galeri-foto/galeri26.jpeg";
import Galeri27 from "../../assets/images/galeri-foto/galeri27.jpeg";

const images = [Galeri1, Galeri2, Galeri3, Galeri4, Galeri5, Galeri6, Galeri7, Galeri8, Galeri9, Galeri10, Galeri11, Galeri12, Galeri20, Galeri21, Galeri22, Galeri23, Galeri24, Galeri25, Galeri26, Galeri27];

export const Foto = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openCarousel = () => {
    if (!isMobile) {
      setIsCarouselOpen(true);
    }
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <div className="w-full h-[800px] md:h-[1024px] px-5 md:px-0 lg:px-10 pb-16 overflow-y-scroll">
      <div className="w-full flex justify-center text-center py-20 font-blenda text-primary text-5xl md:text-6xl">
        <h1>Galery - Foto</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {isCarouselOpen ? (
          <div className="relative w-full h-[500px] flex justify-center items-center">
            <div className="relative w-full max-w-3xl h-full">
              <button
                onClick={closeCarousel}
                className="absolute top-0 right-0 bg-primary rounded-full text-[#EBD75B] text-2xl z-10"
              >
                <RxCross2 size={30} />
              </button>
              <Carousel>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-full "
                  />
                ))}
              </Carousel>
            </div>
          </div>
        ) : (
          <>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="cursor-pointer w-[330px] md:h-[220px] h-[200px]  rounded-3xl"
                onClick={openCarousel}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
