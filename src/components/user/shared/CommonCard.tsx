import Image from "next/image";

const CommonCard = () => {
  return (
    <div className="sm:my-8 lg:my-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="w-fit overflow-hidden rounded-md">
          {/* Wrap image and overlay in a group for hover effect */}
          <div className="group relative overflow-hidden rounded-md">
            {/* Image with zoom effect */}
            <Image
              src="/people-1.webp"
              alt=""
              width={386}
              height={386}
              className="h-[386px] w-[386px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 md:h-[209px] md:w-[209px] lg:h-[386px] lg:w-[386px]"
            />

            {/* Dark overlay on image hover */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition duration-500 group-hover:bg-black/30" />
          </div>

          {/* Text content below, unaffected by hover */}
          <div className="mt-5 text-center">
            <p className="mb-5 font-bold sm:text-xl">
              Exceptional Furniture For The Taskmasters
            </p>
            <p className="font-medium sm:text-base">
              We founded GRID: to make it easy for teams of all sizes to create
              an office you love. We sell direct, so our collection costs half
              as much as premium furniture of comparable quality.
            </p>
          </div>
        </div>
        <div className="w-fit overflow-hidden rounded-md">
          {/* Wrap image and overlay in a group for hover effect */}
          <div className="group relative overflow-hidden rounded-md">
            {/* Image with zoom effect */}
            <Image
              src="/people-2.webp"
              alt=""
              width={386}
              height={386}
              className="h-[386px] w-[386px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 md:h-[209px] md:w-[209px] lg:h-[386px] lg:w-[386px]"
            />

            {/* Dark overlay on image hover */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition duration-500 group-hover:bg-black/30" />
          </div>

          {/* Text content below, unaffected by hover */}
          <div className="mt-5 text-center">
            <p className="mb-5 font-bold sm:text-xl">Ergonomic Design</p>
            <p className="font-medium sm:text-base">
              Enjoy stylish and ergonomic work seating for every budget, from
              the home office to the open office. Durable, adjustable and built
              to inspire: make your office feel like home with contract-grade
              desks & chairs from GRID Furniture.
            </p>
          </div>
        </div>
        <div className="w-fit overflow-hidden rounded-md">
          {/* Wrap image and overlay in a group for hover effect */}
          <div className="group relative overflow-hidden rounded-md">
            {/* Image with zoom effect */}
            <Image
              src="/people-3.webp"
              alt=""
              width={386}
              height={386}
              className="h-[386px] w-[386px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 md:h-[209px] md:w-[209px] lg:h-[386px] lg:w-[386px]"
            />

            {/* Dark overlay on image hover */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition duration-500 group-hover:bg-black/30" />
          </div>

          {/* Text content below, unaffected by hover */}
          <div className="mt-5 text-center">
            <p className="mb-5 font-bold sm:text-xl">
              Wherever you are, work your best.
            </p>
            <p className="font-medium sm:text-base">
              Our breathable mesh material provides an optimal air flow to avoid
              sweating and sticking, keep air circulation for extra comfy, and
              the mesh office chair resists abrasion and transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
