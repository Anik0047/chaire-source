import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black pt-24 font-medium text-white sm:h-[420px]">
      <div className="mx-auto grid max-w-[1220px] px-4 sm:grid-cols-4">
        <div className="flex justify-between sm:block">
          <div className="sm:mb-5">
            <Image
              src="/logo.avif"
              alt=""
              width={500}
              height={500}
              className="h-10 w-10"
            />
          </div>
          <div className="flex items-center gap-3">
            <Instagram size={26} />
            <Facebook size={26} />
            <Youtube size={26} />
          </div>
        </div>
        <hr className="my-5 border-gray-500 sm:my-0 sm:hidden" />
        <div className="">
          <ul>
            <li className="mb-3">
              <Link href="#">Search</Link>
            </li>
            <li className="mb-3">
              <Link href="#">Terms of Service</Link>
            </li>
            <li className="mb-3">
              <Link href="#">Return & Warranty Policy</Link>
            </li>
          </ul>
        </div>
        <hr className="my-5 border-gray-500 sm:my-0 sm:hidden" />
        <div className="">
          <ul>
            <li className="mb-3">
              <Link href="#">Home</Link>
            </li>
            <li className="mb-3">
              <Link href="#">Chair Collection</Link>
            </li>
            <li className="mb-3">
              <Link href="#">Steelcase Chair Collection</Link>
            </li>
            <li className="mb-3">
              <Link href="#">Table Collection</Link>
            </li>
            <li className="mb-3">
              <Link href="#">Sofa Collection</Link>
            </li>
            <li className="mb-3">
              <Link href="#">All Collections</Link>
            </li>
          </ul>
        </div>
        <hr className="my-5 border-gray-500 sm:my-0 sm:hidden" />
        <div className="mx-auto max-w-md">
          <p className="mb-4">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div className="relative">
            <button className="absolute top-1/2 left-2 -translate-y-1/2 transform">
              <Mail />
            </button>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="mt-10 pb-5 text-center text-sm">
          © 2025 GRID Furniture© GRID Ventures Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
