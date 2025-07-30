"use client";

import Image from "next/image";

const CategoryFurniture = () => {
  return (
    <div>
      <div className="my-9 sm:my-24">
        <div className="text-center">
          <h1 className="mb-8 text-2xl font-bold sm:text-3xl">
            We do work furniture a little bit different.
          </h1>
          <p className="px-3 font-medium sm:text-[17px]">
            That means easy, affordable, and flexible—whether you’re furnishing
            your home office or your business.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <div className="group relative">
          <div className="relative">
            <Image
              src="/chair.webp"
              alt=""
              width={305}
              height={305}
              className="object-cover md:h-[300px] xl:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
          <p className="absolute bottom-4 left-6 z-10 text-xl font-extrabold text-white transition-all duration-300 group-hover:bottom-10 after:mt-1 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full sm:bottom-8 sm:text-2xl">
            Chair
          </p>
        </div>
        <div className="group relative">
          <div className="relative">
            <Image
              src="/table.webp"
              alt=""
              width={305}
              height={305}
              className="object-cover md:h-[300px] xl:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
          <p className="absolute bottom-4 left-6 z-10 text-xl font-extrabold text-white transition-all duration-300 group-hover:bottom-10 after:mt-1 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full sm:bottom-8 sm:text-2xl">
            Table
          </p>
        </div>
        <div className="group relative">
          <div className="relative">
            <Image
              src="/sofa.webp"
              alt=""
              width={305}
              height={305}
              className="object-cover md:h-[300px] xl:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
          <p className="absolute bottom-4 left-6 z-10 text-xl font-extrabold text-white transition-all duration-300 group-hover:bottom-10 after:mt-1 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full sm:bottom-8 sm:text-2xl">
            Sofa
          </p>
        </div>
        <div className="group relative">
          <div className="relative">
            <Image
              src="/drawer.webp"
              alt=""
              width={305}
              height={305}
              className="object-cover md:h-[300px] xl:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
          <p className="absolute bottom-4 left-6 z-10 text-xl font-extrabold text-white transition-all duration-300 group-hover:bottom-10 after:mt-1 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full sm:bottom-8 sm:text-2xl">
            Storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryFurniture;
