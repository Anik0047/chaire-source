"use client";

import { Award, Box, Wallet } from "lucide-react";

const VideoComponent = () => {
  return (
    <div>
      <div className="relative h-full w-full">
        <div className="">
          <div className="aspect-auto h-full w-full overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8UPPwMNxGvQ?autoplay=1&mute=1&controls=0&loop=1&playlist=8UPPwMNxGvQ&modestbranding=1&playsinline=1&rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="pointer-events-none h-[240px] scale-155 sm:h-[720px] sm:scale-135"
            ></iframe>
          </div>
        </div>
        <div className="absolute top-56 mx-5 sm:top-44 sm:left-16">
          <div className="h-full w-full bg-white p-7 sm:h-[326] sm:w-[380px] sm:p-10">
            <p className="mb-1.5 font-bold sm:text-lg">GRID Furniture</p>
            <p className="mb-5 text-3xl font-bold sm:text-4xl">
              For 21st Century
            </p>
            <p className="font-medium sm:text-lg">
              We're a furniture brand that carries everything needed to make
              your house or office look modern with minimal furnitures and
              boosts up your work energy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
