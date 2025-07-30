"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ShoppingCart,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommonProductCard from "./CommonProductCard";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
  id: string;
}

const ProductDetails = ({ id }: ProductDetailsProps) => {
  const swiperRef = useRef<any>(null);
  const router = useRouter();
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [selectedImage, setSelectedImage] = useState("/detail-1.png");

  const images = [
    { image: "/detail-1.png" },
    { image: "/detail-2.png" },
    { image: "/detail-3.png" },
    { image: "/detail-4.png" },
    { image: "/detail-5.png" },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const { left, top, width, height } = target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  // Sample data for chairs
  const formattedChairs = [
    {
      _id: "1",
      product_name: "GRID x Steelcase Leap",
      product_slug: "grid-x-steelcase-leap",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "1-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "2",
      product_name: "GRID x Steelcase Gesture Chair",
      product_slug: "grid-x-steelcase-gesture-chair",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "2-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "3",
      product_name: "GRID x Steelcase Leap",
      product_slug: "grid-x-steelcase-leap",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "3-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "4",
      product_name: "GRID x Steelcase Gesture Chair",
      product_slug: "grid-x-steelcase-gesture-chair",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "4-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "5",
      product_name: "GRID x Steelcase Leap",
      product_slug: "grid-x-steelcase-leap",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "5-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "6",
      product_name: "GRID x Steelcase Gesture Chair",
      product_slug: "grid-x-steelcase-gesture-chair",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "6-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "7",
      product_name: "GRID x Steelcase Leap",
      product_slug: "grid-x-steelcase-leap",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "7-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 0,
    },
    {
      _id: "8",
      product_name: "GRID x Steelcase Gesture Chair",
      product_slug: "grid-x-steelcase-gesture-chair",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "8-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "9",
      product_name: "GRID x Steelcase Leap",
      product_slug: "grid-x-steelcase-leap",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "9-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
    {
      _id: "10",
      product_name: "GRID x Steelcase Gesture Chair",
      product_slug: "grid-x-steelcase-gesture-chair",
      thumbnail_image: "/chair-1.webp",
      additional_images: [
        {
          additional_image: "/chair-2.webp",
          additional_image_key: "chair-2.webp",
          _id: "10-img",
        },
      ],
      product_price: 180000,
      product_discount_price: 175000,
      attributes_details: [],
      product_quantity: 20,
    },
  ];

  const handleProductDetailsPage = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <div>
      <div className="mt-20 mb-20 grid grid-cols-1 gap-5 sm:mb-32 md:grid-cols-2">
        <div className="rounded-lg border p-2">
          {/* Main image with zoom effect - No Swiper */}
          <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
            <div
              className="h-full w-full cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={selectedImage}
                alt="Product image"
                fill
                className="object-cover"
                priority
              />
              {hoverPosition && (
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden"
                  style={{
                    backgroundImage: `url(${selectedImage})`,
                    backgroundPosition: `${hoverPosition.x}% ${hoverPosition.y}%`,
                    backgroundSize: "200%",
                    backgroundRepeat: "no-repeat",
                    transform: "scale(1.5)",
                    opacity: 1,
                    zIndex: 10,
                  }}
                />
              )}
            </div>
          </div>

          {/* Thumbnail swiper - Kept as before */}
          <div className="relative mt-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
                disabledClass: "subject-buffer-disabled",
                hiddenClass: "subject-buffer-hidden",
              }}
              modules={[FreeMode, Navigation]}
              className="relative"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative aspect-square cursor-pointer rounded border-2 ${
                      selectedImage === img.image
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(img.image)}
                  >
                    <Image
                      src={img.image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="custom-prev absolute top-1/2 left-0 z-10 -ml-2 -translate-y-1/2 rounded-full bg-white p-1 shadow-md">
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button className="custom-next absolute top-1/2 right-0 z-10 -mr-2 -translate-y-1/2 rounded-full bg-white p-1 shadow-md">
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
        <div className="rounded-lg border sm:p-6">
          <h1 className="mb-7 text-3xl font-bold">Product Title</h1>
          <div className="mb-2 text-sm font-medium">
            Save <span className="text-orange-500">-6%</span>
          </div>
          <div className="mb-8 flex items-center gap-3">
            <p className="font-bold text-red-500 sm:text-2xl">৳ 17,000</p>
            <p className="line-through sm:text-lg">৳ 18,000</p>
          </div>
          <div className="mb-8 w-full rounded-sm bg-[#e2ebf3] p-5">
            <p className="mb-3 text-sm font-bold">Available Options</p>
            <div className="flex items-center gap-8">
              <p>
                Color <span className="text-2xl">*</span>
              </p>
              <div className="space-x-5">
                <span className="cursor-pointer rounded-sm border border-gray-300 px-2 py-1.5 text-sm hover:border-2 hover:shadow-2xl">
                  Black
                </span>
                <span className="cursor-pointer rounded-sm border border-gray-300 px-2 py-1.5 text-sm hover:border-2 hover:shadow-2xl">
                  Gray
                </span>
              </div>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {/* Quantity input with up/down */}
            <div className="flex h-10">
              <input
                type="number"
                defaultValue={1}
                className="w-8 rounded-s border border-gray-300 text-center outline-none sm:w-12"
              />
              <div className="flex flex-col rounded-e border border-l-0 border-gray-300">
                <button className="h-1/2 border-b px-1 hover:bg-gray-100">
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button className="h-1/2 px-1 hover:bg-gray-100">
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button className="h-10 flex-1 rounded bg-gray-600 px-2 text-xs font-medium text-white hover:bg-rose-600 sm:px-6 sm:text-sm">
              Add to Cart
            </button>

            {/* Buy Now button */}
            <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded bg-rose-600 px-2 text-xs font-medium text-white hover:bg-rose-700 sm:px-6 sm:text-sm">
              <ShoppingCart className="hidden h-4 w-4 sm:block" />
              Buy Now
            </button>
          </div>
          <div className="mb-10 rounded-sm bg-[#e9e9e9] p-5">
            <ul className="list-inside list-disc space-y-2 text-sm">
              <li className="">
                Stock: <span className="text-green-700">In Stock</span>
              </li>
              <li>
                Model: <span>Director-Chair-7025</span>
              </li>
            </ul>
          </div>
          <div>
            <Tabs defaultValue="description">
              <TabsList className="mb-7 grid grid-cols-3 border-0 bg-transparent sm:mb-5 sm:gap-4">
                <TabsTrigger
                  value="description"
                  className="border data-[state=active]:border-gray-500"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="border data-[state=active]:border-gray-500"
                >
                  Shipping
                </TabsTrigger>
                <TabsTrigger
                  value="return&refund"
                  className="border data-[state=active]:border-gray-500"
                >
                  Return <span className="hidden sm:block">& Refund</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-sm">
                <ul className="mb-16 space-y-2 ps-5 font-medium">
                  <li>Ergonomic Design</li>
                  <li>Adjustable Headrest</li>
                  <li>Adjustable Lumber Support</li>
                  <li>Adjustable 4D Armrests</li>
                  <li>Premium Materials</li>
                  <li>Adjustable Height</li>
                  <li>Sleek Design</li>
                </ul>
                <div className="space-y-10">
                  <p>
                    New Gesture Chair with Headrest Plus Lumbar Support – A new
                    sitting experience designed with a back and seat that move
                    as a synchronized system moving with each user to provide
                    continue and persistent support
                  </p>
                  <p>
                    Arms move like a human arm which allows users to be
                    supported in any position
                  </p>
                  <p>
                    Seat has comfort all the way to the edge with a flexible
                    perimeter to allow users to sit in a range of positions
                  </p>
                  <p>
                    Arms and shoulders remain supported regardless of device
                    being used
                  </p>
                  <p>
                    Designed to be quickly adjustable and takes into account
                    various body types and sitting preferences
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="space-y-5 text-sm">
                <div className="space-y-2">
                  <p className="font-bold">Delivery Time:</p>
                  <p>
                    Standard delivery time is between 1 to 4 working days for
                    regular orders depending on stock availability and shipping
                    location. For corporate and special cases, delivery may take
                    longer depending on factory workload. Customers will be
                    informed of the delivery timeline on order confirmation.
                    Delivery date may change due to unforeseen circumstances.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold">Delivery Method:</p>
                  <p>
                    For orders within Dhaka city, we offer home delivery and
                    free assembly using our own or third party transport. For
                    orders outside Dhaka city, we offer door-to-door shipping
                    via partner courier service company. In this case,
                    self-assembly of product is required, but we can assist with
                    assembly via video call if needed.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="return&refund" className="text-sm">
                <p>
                  At Living Edge, we’re committed to ensuring you have the best
                  shopping experience possible. If you’re not completely
                  satisfied with your purchase, we offer a straightforward
                  return and refund policy to make your experience hassle-free.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="mb-10">
          <span className="border-b-2 border-black pb-1 font-bold">
            Related Products
          </span>
        </div>
        <div>
          <div className="sm:max-w-8xl">
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
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
              className=""
            >
              {formattedChairs.map((item) => (
                <SwiperSlide key={item?._id}>
                  <CommonProductCard
                    product={item}
                    handleProductDetailsPage={handleProductDetailsPage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="">
              {/* Left arrow */}
              <div className="feature-prev absolute top-1 right-10 z-10 sm:right-14">
                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-all sm:h-10 sm:w-10">
                  <ChevronLeft size={20} />
                </button>
              </div>

              {/* Right arrow */}
              <div className="feature-next absolute top-1 right-1 z-10">
                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-all sm:h-10 sm:w-10">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
