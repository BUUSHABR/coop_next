"use client";
import { useState } from "react";

interface Props {
video_url?:string | undefined;
banner?:string | undefined;
}
function VideoBanner({video_url,banner}:Props) {
  const [isPlaying, setIsPlaying] = useState(false);
const ASSEST_BASE_URL = "https://api.coopgames.in/";
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-auto bg-black text-white">
      {/* Show image or video based on play state */}
      {!isPlaying  ? (
        <>
          <img
            src={banner?`${ASSEST_BASE_URL}${banner}`:"/assets/images/video-template-default.png"}
            alt="Video Thumbnail"
            className="w-full h-auto object-cover"
          />
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-orange-500 rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:scale-110 transition">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </div>
          </button>
        </>
      ) : (

        <video
          src={video_url &&`https://www.w3schools.com/html/mov_bbb.mp4`} // Replace with your actual .mp4 path
          className="w-full h-auto object-cover"
          controls
          autoPlay
        />
      )}
    </div>
  );
}

export default VideoBanner;
