import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import ReactPlayer from "react-player";
import Video1 from "../../assets/video/galeri1.mp4";
import Video2 from "../../assets/video/galeri2.mp4";
import Video3 from "../../assets/video/galeri3.mp4";
import Video4 from "../../assets/video/galeri4.mp4";
import Video5 from "../../assets/video/galeri5.mp4";

const ytUrl1 = "https://youtu.be/QVUtMVzt9rs?si=Q6pMlud1bnrDD_qG";
const ytUrl2 = "https://youtu.be/-tx2t3D_hkY?si=XK_KWOHSBacWDJ9y";
const ytUrl3 = "https://youtu.be/M-OjT-t20Dw?si=9WZZTM-PP85U_iUs";
const ytUrl4 = "https://youtu.be/WmEycXQW-lA?si=C1f8P-6AR0AdJTtj";

const videos = [Video1, Video2, Video3, Video4, Video5, ytUrl1, ytUrl2, ytUrl3, ytUrl4];

export const Video = () => {
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
        <h1>Galery - Video</h1>
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
              <Carousel navigation={false}>
                {videos.map((image, index) => (
                  <ReactPlayer
                    key={index}
                    url={image}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        ) : (
          <>
            {videos.map((image, index) => (
              <ReactPlayer
                key={index}
                url={image}
                controls={false}
                width="330px"
                height="220px"
                onClick={openCarousel}
                className="cursor-pointer"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
