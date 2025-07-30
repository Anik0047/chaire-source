"use client";

import { ArrowRight, MoveRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative h-[300px] sm:h-[650px]">
        <Image
          src="/hero.webp"
          alt="Hero image"
          width={1950}
          height={650}
          className="h-[300px] w-full object-cover sm:h-full sm:w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/95"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 mt-5 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="mb-1.5 text-4xl font-bold sm:mb-3 sm:text-7xl">
          Modern Furniture
        </h1>
        <p className="mx-auto mb-3 w-[272px] font-bold tracking-widest text-white uppercase sm:mb-6 sm:w-[430px]">
          For a better way to work
        </p>
        <div className="flex justify-center">
          {/* <button className="group relative flex cursor-pointer items-center border-2 border-white px-3 py-1.5 font-bold transition duration-1000 ease-in-out hover:bg-white hover:text-black sm:px-5 sm:py-2.5 sm:text-lg">
            <span className="">Shop Now</span>

            <MoveRight
              size={20}
              className="absolute right-3 w-0 translate-x-[-8px] opacity-0 transition-all duration-500 ease-in-out group-hover:w-auto group-hover:ps-6 sm:group-hover:translate-x-0 sm:group-hover:opacity-100"
            />
          </button> */}

          <button className="group bg-primary text-primary-foreground focus:ring-ring relative overflow-hidden border-2 border-white px-6 py-3 font-medium transition-all duration-300 ease-out hover:bg-white hover:pr-12 hover:pl-6 hover:text-black focus:ring-2 focus:ring-offset-2 focus:outline-none">
            <span className="relative z-10">Shop Now</span>

            {/* Arrow icon that slides in */}
            <MoveRight className="absolute top-1/2 right-3 h-5 w-5 translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
