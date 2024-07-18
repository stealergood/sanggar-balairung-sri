import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import Tarian1 from "../../assets/images/tarian/tarian1.jpeg";
import Tarian2 from "../../assets/images/tarian/tarian2.jpeg";
import Tarian3 from "../../assets/images/tarian/tarian3.jpeg";

const images = [Tarian1, Tarian2, Tarian3, Tarian1, Tarian2, Tarian3];

export const Tarian = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <div className="w-full h-[800px] md:h-[1024px] bg-motif-android2 md:bg-motif2 px-6 md:px-20 bg-cover bg-center pb-10 overflow-y-scroll">
      <div className="w-full flex justify-center font-blenda text-primary text-4xl md:text-6xl py-10 md:py-20">
        <h1>Tarian</h1>
      </div>
      <p>
        Berikut adalah video tari tradisional zapin siak yang dapat di akses
        untuk dipelajari secara daring :{" "}
      </p>
      <div className="w-full flex justify-center text-black text-[12px] md:text-base mt-10">
        <div className="w-full bg-transparent md:py-16 shadow-[-1px_-1px_20px_9px_rgba(0,0,0,0.54)] rounded-2xl p-5">
          {/* Carousel for larger screens */}
          <div className="hidden md:block">
            {isCarouselOpen ? (
              <div className="relative w-full h-[500px] flex justify-center items-center">
                <div className="relative w-full max-w-3xl h-full">
                  <button
                    onClick={closeCarousel}
                    className="absolute top-5 right-5 text-black text-2xl z-10"
                  >
                    <RxCross2 size={30} />
                  </button>
                  <Carousel>
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-full"
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap flex-col md:flex-row w-full justify-around gap-10">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="cursor-pointer w-80"
                    onClick={openCarousel}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Static images for smaller screens */}
          <div className="block md:hidden">
            <div className="flex flex-wrap flex-col w-full justify-around gap-10">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-80"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
