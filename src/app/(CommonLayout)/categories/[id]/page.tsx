"use client";

import React from "react";
import formattedChairs from "../../../../lib/fakeData.json";
import CommonProductCard from "@/components/user/shared/CommonProductCard";
import { useRouter } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import CommonCard from "@/components/user/shared/CommonCard";
import PaginationComponent from "@/components/user/shared/Pagination";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const page = () => {
  const router = useRouter();

  const handleProductDetailsPage = (slug: string) => {
    router.push(`/products/${slug}`);
  };
  return (
    <div>
      <div
        className="relative h-[250px] bg-fixed bg-center bg-no-repeat sm:h-[450px] sm:bg-cover"
        style={{ backgroundImage: 'url("/chair-bg-banner.webp")' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/95" />

        {/* Text over image */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="mb-1.5 text-4xl font-bold sm:mb-3 sm:text-7xl">
            Chair
          </h1>
        </div>
      </div>

      {/* Fake content to enable scrolling */}
      <div className="mx-auto my-14 max-w-[1220px] px-4">
        <div className="mb-5 flex justify-between">
          <div>
            {/* Search Button with Drawer */}
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <button className="flex items-center gap-3 border px-2.5 py-1.5 text-base sm:px-5 sm:py-2">
                  <SlidersHorizontal size={15} />
                  Filter
                </button>
              </DrawerTrigger>
              <DrawerContent className="top-0 mt-0 h-full w-20 rounded-none">
                <div className="mx-auto w-full">
                  <DrawerHeader>
                    <div className="mt-5 flex items-center justify-between">
                      <DrawerTitle className="text-base font-bold sm:text-2xl">
                        Filter
                      </DrawerTitle>
                      <DrawerClose asChild>
                        <Button
                          variant="ghost"
                          className="cursor-pointer font-bold sm:text-xl"
                        >
                          X
                        </Button>
                      </DrawerClose>
                    </div>
                  </DrawerHeader>
                  <div className="mx-5">
                    <hr />
                    <div className="mt-8">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-3"
                        defaultValue="item-1"
                      >
                        <AccordionItem
                          value="availability"
                          className="space-y-5"
                        >
                          <AccordionTrigger>Availability</AccordionTrigger>
                          <AccordionContent className="flex flex-col gap-4 space-y-2.5 text-balance">
                            <div className="flex items-center gap-3">
                              <Checkbox id="terms" />
                              <Label htmlFor="terms">In Stock [45]</Label>
                            </div>
                            <div className="flex items-center gap-3">
                              <Checkbox id="terms" />
                              <Label htmlFor="terms">Out OF Stock [15]</Label>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="price" className="space-y-5">
                          <AccordionTrigger className="text-sm">
                            Price
                          </AccordionTrigger>
                          <AccordionContent className="pt-4">
                            <div className="space-y-6">
                              <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                className="w-full cursor-pointer rounded-sm bg-black"
                              />

                              <div className="mt-2 flex justify-between text-sm text-gray-600">
                                <span>Tk 0.00</span>
                                <span>Tk 200,000.00</span>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div>
            <select name="" className="border px-3 py-1.5 sm:px-5 sm:py-2">
              <option value="">Sort</option>
              <option value="">Featured</option>
              <option value="">Best selling</option>
              <option value="">Alphabetically, A-Z</option>
              <option value="">Alphabetically, Z-A</option>
              <option value="">Price, low to high</option>
              <option value="">Price, high to low</option>
              <option value="">Date, old to new</option>
              <option value="">Date, new to old</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
          {formattedChairs.map((item) => (
            <CommonProductCard
              product={item}
              key={item._id}
              handleProductDetailsPage={handleProductDetailsPage}
            />
          ))}
        </div>
      </div>
      <div>
        <PaginationComponent />
      </div>
      <div>
        <hr className="mt-20" />
      </div>
      <div>
        <div className="mx-auto max-w-[1220px] px-4 py-12">
          <CommonCard />
        </div>
      </div>
    </div>
  );
};

export default page;
