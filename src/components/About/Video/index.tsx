"use client";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";

const Video = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <section className="pt-12">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative aspect-[39/20] rounded-3xl z-999">
          <button
            onClick={() => setToggler(!toggler)}
            className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-27.5 h-27.5 rounded-full flex items-center justify-center bg-gradient-to-b from-[#A073EE] to-[#6E25ED] shadow-video"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.1688 16.8077L7.26999 27.1727C5.73764 28.0601 3.75 27.0394 3.75 25.3651V4.63517C3.75 2.96091 5.73764 1.94018 7.26997 2.82754L25.1688 13.1925C26.6104 14.0274 26.6104 15.9729 25.1688 16.8077Z"
                fill="white"
              />
            </svg>
          </button>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1 block w-32 h-32 rounded-full backdrop-blur-[5px] bg-white/[0.04]"></span>

          <Image src="/images/video/video.png" fill alt="video" />
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=7PqugXyaSDc&ab"]}
      />
    </section>
  );
};

export default Video;
