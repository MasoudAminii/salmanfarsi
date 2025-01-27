"use client";

import { useRef, useState } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

const ContactVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="Video group relative z-10 aspect-video max-h-[300px] overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        className="w-full"
        src="/video/school-video.mp4"
        onPause={() => setIsPlaying(false)} // Sync state if video is paused externally
        onPlay={() => setIsPlaying(true)} // Sync state if video is played externally
      ></video>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center transition ${!isPlaying ? "bg-black/30" : "group-hover:bg-black/30"}`}
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
      >
        {!isPlaying && (
          <span className="z-10 rounded-full bg-[var(--secondary-color)] p-6 text-white transition-all duration-300 hover:scale-105">
            {!isPlaying && <IoPlay size={34} />}
          </span>
        )}
        {isPlaying && (
          <span className="z-10 rounded-full bg-[var(--secondary-color)] p-6 text-white opacity-0 transition-all duration-300 hover:scale-105 group-hover:opacity-100">
            {isPlaying && <IoPause size={34} />}
          </span>
        )}
        {!isPlaying && (
          <>
            <div className="ping-slow absolute animate-ping rounded-full border-4 border-white p-5 transition-all delay-200"></div>
            <div className="ping-slow absolute animate-ping rounded-full border-4 border-white p-6 transition-all delay-700"></div>
          </>
        )}
      </button>
    </div>
  );
};

export default ContactVideo;
