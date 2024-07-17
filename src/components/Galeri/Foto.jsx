import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import Galeri1 from "../../assets/images/galeri-foto/galeri1.png";
import Galeri2 from "../../assets/images/galeri-foto/galeri2.png";
import Galeri3 from "../../assets/images/galeri-foto/galeri3.png";
import Galeri4 from "../../assets/images/galeri-foto/galeri4.png";
import Galeri5 from "../../assets/images/galeri-foto/galeri5.png";
import Galeri6 from "../../assets/images/galeri-foto/galeri6.png";

const images = [Galeri1, Galeri2, Galeri3, Galeri4, Galeri5, Galeri6];

export const Foto = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <div className="w-full h-[800px] md:h-[1024px] bg-motif-android1 md:bg-motif bg-cover bg-center px-5 md:px-0 lg:px-10 pb-16 overflow-y-scroll">
      <div className="w-full flex justify-center text-center py-20 font-blenda text-primary text-5xl md:text-6xl">
        <h1>Galery - Foto</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {isCarouselOpen ? (
          <div className="relative w-full h-[500px] flex justify-center items-center">
            <div className="relative w-full max-w-3xl h-full">
              <button
                onClick={closeCarousel}
                className="absolute top-5 right-5 text-white text-2xl z-10"
              >
                X
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
                className="cursor-pointer"
                onClick={openCarousel}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
