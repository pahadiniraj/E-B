import React from "react";
import video from "../../../assets/Video/Vid.mp4";
import { useRef } from "react";
import { PiPlayCircleThin } from "react-icons/pi";
import { PiPauseCircleThin } from "react-icons/pi";
import { useState } from "react";
import { useEffect } from "react";
const Video = () => {
  const vidRef = useRef(null);
  const [isplaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    let timer;
    if (showControls) {
      timer = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showControls]);

  const handleClick = () => {
    if (vidRef?.current?.paused) {
      vidRef?.current?.play();
      setIsPlaying(true);
      setShowControls(false);
    } else {
      vidRef?.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };
  const handleMouseLeave = () => {
    setShowControls(false);
    setShowText(true);
  };

  return (
    <div
      className="w-full relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" ">
        <div className=" flex justify-center items-center text-white p-5 md:container md:mx-auto  ">
          <video className="rounded-md " ref={vidRef}>
            <source src={video} />
            <div className="w-50 h-50 bg-red-200"></div>
          </video>
          {showControls && (
            <div className="absolute items-center flex justify-center flex-col w-1/4">
              {showText && (
                <div className="text-xxs xs:text-xl text-center ">
                  We’re the Best Organic Farm in the World
                </div>
              )}
              <button onClick={handleClick}>
                {isplaying ? (
                  <PiPauseCircleThin className="text-3xl xs:text-5xl" />
                ) : (
                  <PiPlayCircleThin className="text-3xl  xs:text-5xl" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
