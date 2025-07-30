"use client";

import {
  ChevronLeft,
  ChevronRight,
  MoveRight,
  MoveUpRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import CommonProductCard from "../shared/CommonProductCard";
import formattedChairs from "../../../lib/fakeData.json";

const Featured = () => {
  const swiperRef = useRef<any>(null);
  const router = useRouter();

  const handleProductDetailsPage = (slug: string) => {
    router.push(`/products/${slug}`);
  };


  return (
    <div className="py-8">
      <p className="pb-1.5 text-center text-base tracking-[3px] uppercase sm:text-lg">
        featured
      </p>
      <div className="mb-10 flex flex-col items-center">
        <Tabs
          defaultValue="chair"
          className="flex w-full flex-col items-center"
        >
          <TabsList className="mb-9 flex justify-center space-x-4 border-0 bg-transparent sm:mb-12">
            <TabsTrigger
              value="chair"
              className="relative text-2xl font-extrabold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 after:content-[''] data-[state=active]:shadow-none data-[state=active]:after:w-full sm:text-3xl"
            >
              Chair
            </TabsTrigger>
            <TabsTrigger
              value="table"
              className="relative text-2xl font-extrabold after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 after:content-[''] data-[state=active]:shadow-none data-[state=active]:after:w-full sm:text-3xl"
            >
              Table
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chair">
            <div className="w-screen px-4 sm:max-w-7xl">
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                navigation={{
                  nextEl: ".feature-next",
                  prevEl: ".feature-prev",
                  disabledClass: "subject-buffer-disabled", // Using Swiper's disabled class
                  hiddenClass: "subject-buffer-hidden", // Using Swiper's hidden class
                }}
                slidesPerView={2}
                spaceBetween={16}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1440: { slidesPerView: 5 },
                }}
                className="relative"
              >
                {formattedChairs.map((item) => (
                  <SwiperSlide key={item?._id} className="sm:w-[222px] sm:px-2">
                    <CommonProductCard
                      product={item}
                      handleProductDetailsPage={handleProductDetailsPage}
                    />
                  </SwiperSlide>
                ))}

                {/* Left arrow */}
                <div className="feature-prev absolute top-1/3 left-0 z-10 -translate-y-1/2">
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-all sm:h-10 sm:w-10">
                    <ChevronLeft size={20} />
                  </button>
                </div>

                {/* Right arrow */}
                <div className="feature-next absolute top-1/3 right-0 z-10 -translate-y-1/2">
                  <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-all sm:h-10 sm:w-10">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </Swiper>
            </div>
          </TabsContent>

          <TabsContent value="table">
            {/* You can add table items carousel here similarly */}
            <div className="py-12 text-center">
              <p>Table items coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-center">
        <button className="group bg-primary text-primary-foreground focus:ring-ring relative overflow-hidden border-2 border-black bg-black px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:pr-12 hover:pl-6 focus:ring-2 focus:ring-offset-2 focus:outline-none">
          <span className="relative z-10">View More</span>

          {/* Arrow icon that slides in */}
          <MoveRight className="absolute top-1/2 right-3 h-5 w-5 translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
};

export default Featured;
