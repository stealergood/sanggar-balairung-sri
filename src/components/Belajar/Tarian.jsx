import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import ReactPlayer from "react-player";
import { RxCross2 } from "react-icons/rx";
import Video1 from "../../assets/video/tarian1.mp4";
import Video2 from "../../assets/video/tarian2.mp4";
import Video3 from "../../assets/video/tarian3.mp4";
import Video4 from "../../assets/video/tarian4.mp4";
import Video5 from "../../assets/video/tarian5.mp4";
import Video6 from "../../assets/video/tarian6.mp4";

const videos = [Video1, Video2, Video6, Video4, Video5, Video3];

export const Tarian = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openCarousel = (index) => {
    setIsCarouselOpen(true);
    setCurrentVideo(index);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="w-full h-[800px] md:h-[1024px] px-6 md:px-20 pb-10 overflow-y-scroll">
      <div className="w-full flex justify-center font-blenda text-primary text-4xl md:text-6xl py-10 md:py-20">
        <h1>Tarian</h1>
      </div>
      <p className="text-black">
        Berikut adalah video tari tradisional zapin siak yang dapat di akses
        untuk dipelajari secara daring :{" "}
      </p>
      <div className="w-full flex justify-center text-black text-[12px] md:text-base mt-10">
        <div className="w-full bg-transparent md:py-16 shadow-[-1px_-1px_20px_9px_rgba(0,0,0,0.54)] rounded-2xl p-5">
          {/* Carousel for larger screens */}
          <div className="hidden md:block">
            {isCarouselOpen && currentVideo !== null ? (
              <div className="relative w-full h-[500px] flex justify-center items-center">
                <div className="relative w-full max-w-3xl h-full">
                  <button
                    onClick={closeCarousel}
                    className="absolute top-0 right-0 bg-primary rounded-full text-[#EBD75B] text-2xl z-10"
                  >
                    <RxCross2 size={30} />
                  </button>
                  <Carousel navigation={false} prevArrow={false} nextArrow={false}>
                    <ReactPlayer
                      url={videos[currentVideo]}
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                  </Carousel>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap flex-col md:flex-row w-full justify-center gap-10">
                {videos.map((videos, index) => (
                  <ReactPlayer
                    key={index}
                    url={videos}
                    controls={false}
                    width="320px"
                    height="220px"
                    onClick={() => openCarousel(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Static images for smaller screens */}
          <div className="block md:hidden">
            <div className="flex flex-wrap flex-col w-full justify-center gap-10">
              {videos.map((video, index) => (
                <ReactPlayer
                  key={index}
                  url={video}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
