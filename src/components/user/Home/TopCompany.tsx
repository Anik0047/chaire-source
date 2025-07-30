import { Award, Box, MoveRight, MoveUpRight, Wallet } from "lucide-react";
import Image from "next/image";

const TopCompany = () => {
  const trustedCompanies = [
    {
      id: 1,
      name: "BRAC",
      logo: "/brac.avif",
      alt: "BRAC logo",
    },
    {
      id: 2,
      name: "Rangs",
      logo: "/rangs.png",
      alt: "Rangs logo",
    },
    {
      id: 3,
      name: "Standard Chartered",
      logo: "/standard_chartered.png",
      alt: "Standard Chartered logo",
    },
    {
      id: 4,
      name: "Lanka Bangla",
      logo: "/lankaBangla.png",
      alt: "Lanka Bangla logo",
    },
    {
      id: 5,
      name: "IDLC",
      logo: "/idlc.png",
      alt: "IDLC logo",
    },
    {
      id: 6,
      name: "10 Minutes School",
      logo: "/10minutesschool.avif",
      alt: "10 Minutes School logo",
    },
    {
      id: 7,
      name: "ShopUp",
      logo: "/ShopUp-Logo.avif",
      alt: "ShopUp logo",
    },
    {
      id: 8,
      name: "Sheba",
      logo: "/sheba_logo.webp",
      alt: "Sheba logo",
    },
    {
      id: 9,
      name: "Aksid",
      logo: "/aksid_logo.webp",
      alt: "Aksid logo",
    },
    {
      id: 10,
      name: "GB",
      logo: "/GB-Logo.avif",
      alt: "GB logo",
    },
  ];
  return (
    <div>
      <div className="mx-5 mt-80 sm:mx-auto sm:my-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
          <div className="flex flex-col items-center px-7">
            <Box className="mb-5 h-[60px] w-[60px] sm:h-[70px] sm:w-[70px]" />

            <p className="mb-5 text-2xl font-bold sm:text-3xl">Free Delivery</p>
            <p className="text-center text-[17px]">
              FREE home delivery with assembling inside Dhaka within 3 days and
              5-7 days anywhere in Bangladesh. Inside Dhaka City, we offer free
              home delivery to the ground floor through courier.
            </p>
          </div>
          <div className="flex flex-col items-center px-7">
            <Award className="mb-5 h-[60px] w-[60px] sm:h-[70px] sm:w-[70px]" />

            <p className="mb-5 text-2xl font-bold sm:text-3xl">
              Returns & Warranty
            </p>
            <p className="text-center text-[17px]">
              GRID provides an easy, hassle-free servicing system where we pick
              up your product from your home if there is any problem and get it
              back to you.
            </p>
          </div>
          <div className="flex flex-col items-center px-7">
            <Wallet className="mb-5 h-[60px] w-[60px] sm:h-[70px] sm:w-[70px]" />

            <p className="mb-5 text-2xl font-bold sm:text-3xl">EMI Policy</p>
            <p className="text-center text-[17px]">
              To avail EMI, Place your order through Website and share your
              order ID in our Inbox. We will share the EMI payment link.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          Trusted By Top Companies
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-8">
          {trustedCompanies.map((company) => (
            <div key={company.id} className="grid items-center justify-center">
              <Image
                src={company.logo}
                alt={company.alt}
                width={160}
                height={160}
                className="w-[110px] sm:w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 items-center justify-center sm:grid-cols-2">
        <div>
          <Image
            src="/big_chair.webp"
            alt=""
            width={500}
            height={500}
            className="lg:h-[765px] lg:w-[612px]"
          />
        </div>
        <div className="mx-auto mt-20 sm:mt-0 md:w-[300px] lg:w-[450px]">
          <p className="text-3xl font-bold md:text-4xl lg:text-5xl">
            We Create
          </p>
          <p className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
            Meaningful Design
          </p>
          <p className="mb-6 text-[17px]">
            GRID ensures you 100% authenticity and originality of the products
            which are imported via China, Vietnam & Taiwan. We never want you to
            compromise with the quality that is why we ensure you get the best
            furniture delivered via GRID!
          </p>
          <p className="mb-6 text-[17px]">
            1. We assure you 100% premium quality of our products and before the
            delivery of each product, we have 4 product experts who do the
            quality check while the product is ready for delivery.
          </p>
          <p className="mb-6 text-[17px]">
            2. At GRID, we deliver you premium quality and stylish design which
            also delivers the meaning of elegance at your home.
          </p>
          <p className="mb-6 text-[17px]">
            3. Our products are made of strong materials imported from China
            which ensure 100% durability.
          </p>

          <button className="group bg-primary text-primary-foreground focus:ring-ring relative overflow-hidden border-2 border-black bg-black px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:pr-12 hover:pl-6 focus:ring-2 focus:ring-offset-2 focus:outline-none">
            <span className="relative z-10">Show More</span>

            {/* Arrow icon that slides in */}
            <MoveRight className="absolute top-1/2 right-3 h-5 w-5 translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>
      <div className="my-12 grid grid-cols-1 gap-8 sm:mt-24  lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-0">
        <div className="grid justify-center">
          <Image src="/top_drawer.avif" alt="" width={280} height={225} />
        </div>
        <div className="mx-auto lg:w-[450px]">
          <p className="pb-1.5 text-base tracking-[3px] uppercase sm:text-lg">
            INTRODUCING
          </p>
          <p className="text-3xl font-bold sm:text-4xl">GRID LINE COLLECTION</p>
          {/* <p className="mb-5 text-3xl font-bold sm:text-4xl">COLLECTION</p> */}
          <p className="mb-5">
            You can customize your own shelves from our multiple line items
          </p>
          <button className="group bg-primary text-primary-foreground focus:ring-ring relative overflow-hidden border-2 border-black bg-black px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:pr-12 hover:pl-6 focus:ring-2 focus:ring-offset-2 focus:outline-none">
            <span className="relative z-10">Know More</span>

            {/* Arrow icon that slides in */}
            <MoveRight className="absolute top-1/2 right-3 h-5 w-5 translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
