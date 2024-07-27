import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import ReactPlayer from "react-player";
import { RxCross2 } from "react-icons/rx";
import Video1 from "../../assets/video/galeri1.mp4";
import Video2 from "../../assets/video/galeri2.mp4";
import Video3 from "../../assets/video/galeri3.mp4";
import Video4 from "../../assets/video/galeri4.mp4";
import Video5 from "../../assets/video/galeri5.mp4";
import Video6 from "../../assets/video/galeri6.mp4";
import Video7 from "../../assets/video/galeri7.mp4";
import Video8 from "../../assets/video/galeri8.mp4";
import Video9 from "../../assets/video/galeri9.mp4";

const videos = [
  Video1,
  Video2,
  Video3,
  Video4,
  Video7,
  Video5,
  Video6,
  Video8,
  Video9,
];

export const Video = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openCarousel = (index) => {
    setCurrentVideo(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setCurrentVideo(null);
  };

  console.log(currentVideo);
  return (
    <div className="w-full h-[800px] md:h-[1024px] px-5 md:px-0 lg:px-10 pb-16 overflow-y-scroll">
      <div className="w-full flex justify-center text-center py-20 font-blenda text-primary text-5xl md:text-6xl">
        <h1>Galery - Video</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10">
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
          <>
            {videos.map((videos, index) => (
              <ReactPlayer
                key={index}
                url={videos}
                controls={false}
                width="330px"
                height="220px"
                onClick={() => openCarousel(index)}
                className="cursor-pointer"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
