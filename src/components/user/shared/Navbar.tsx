"use client";

import {
  AlignCenter,
  BriefcaseBusiness,
  ChevronDown,
  Search,
  User,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

// Define the type for our category data
type Category = {
  name: string;
  href: string;
  subCategories?: {
    name: string;
    href: string;
  }[];
};

// Static data for categories and sub-categories
const categories = {
  success: true,
  statusCode: 200,
  message: "Navbar Categories Found Successfully !",
  data: [
    {
      _id: "687c72c00f01985ce07a71ab",
      category_name: "Chair",
      category_slug: "Chair",
      category_serial: 1,
      subcategories: [
        {
          _id: "687c767024f4bc2a2137aaeb",
          subcategory_name: "Excecutive Chair",
          subcategory_slug: "Excecutive-Chair",
          subcategory_serial: 1,
        },
      ],
    },
    {
      _id: "687c73710f01985ce07a71b0",
      category_name: "Table",
      category_slug: "Table",
      category_serial: 2,
      subcategories: [],
    },
    {
      _id: "687c73800f01985ce07a71b4",
      category_name: "Sofa",
      category_slug: "Sofa",
      category_serial: 3,
      subcategories: [],
    },
    {
      _id: "687c738e0f01985ce07a71b8",
      category_name: "Storage",
      category_slug: "Storage",
      category_serial: 4,
      subcategories: [],
    },
  ],
};

const navMenuData = categories?.data || [];
// console.log(navMenuData);

const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

  const { data: session, status } = useSession();
  console.log(session);

  const pathName = usePathname();

  return (
    <div className="ms-5 me-2 flex justify-between sm:ms-5 sm:me-3">
      <div>
        <Link href="/">
          <Image
            src="/logo.avif"
            alt=""
            width={87}
            height={87}
            className="w-16 sm:w-[86px]"
          />
        </Link>
      </div>
      <nav className="relative hidden items-center gap-8 px-5 text-lg sm:flex">
        {navMenuData.map((category) => (
          <div
            key={category.category_name}
            className="relative"
            onMouseEnter={() => setHoveredCategory(category.category_name)}
          >
            <div className="flex items-center gap-1">
              <Link
                href={`/categories/${category.category_slug}`}
                className={`${pathName === "/auth/register" || pathName === "/auth/login" ? "text-black" : "text-white hover:text-gray-300"}`}
              >
                {category.category_name}
              </Link>
              {category.subcategories.length > 0 && (
                <ChevronDown
                  className={`${pathName === "/auth/register" || pathName === "/auth/login" ? "text-black" : "h-4 w-4 text-white"}`}
                />
              )}
            </div>

            {/* Sub-categories dropdown */}
            {category.subcategories.length > 0 &&
              hoveredCategory === category.category_name && (
                <div className="absolute top-full left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
                  <div
                    className="py-1"
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {category.subcategories.map((subCategory) => (
                      <Link
                        key={subCategory.subcategory_name}
                        href={subCategory.subcategory_slug}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {subCategory.subcategory_name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="hidden px-3 py-2.5 sm:block">
          <Link
            href={session?.accessToken ? "/" : "/auth/login"}
            className={`${pathName === "/auth/register" || pathName === "/auth/login" ? "text-black" : "text-white"}`}
          >
            <User className="w-6 sm:w-7" />
          </Link>
        </div>

        {/* Search Button with Drawer */}
        <Drawer direction="top">
          <DrawerTrigger asChild>
            <button
              className={`cursor-pointer px-3 py-2.5 ${pathName === "/auth/register" || pathName === "/auth/login" ? "text-black" : "text-white"}`}
            >
              <Search className="w-6 sm:w-7" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="top-0 mt-0 h-fit rounded-none">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-6">
              <div className="mx-auto flex items-center gap-2 lg:w-[1000px]">
                <Search className="w-6 sm:w-7" />
                <Input
                  placeholder="Type to search..."
                  className="flex-1 border-0"
                />
                <DrawerClose asChild>
                  <Button variant="ghost" className="cursor-pointer">
                    X
                  </Button>
                </DrawerClose>
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        {/* Mobile Menu Drawer */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button
              className={`block py-2.5 sm:hidden ${pathName === "/auth/register" || pathName === "/auth/login" ? "text-black" : "text-white"}`}
            >
              <AlignCenter className="w-6 sm:w-7" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="top-0 mt-0 h-full rounded-none">
            <div className="mx-auto w-full p-4">
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
                <div className="flex justify-end">
                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      className="cursor-pointer p-0 font-bold"
                    >
                      X
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="mt-2 space-y-2">
                <hr />
                {navMenuData.map((category) => (
                  <div key={category.category_name}>
                    <div
                      className="flex items-center justify-between rounded px-2 py-3 hover:bg-gray-100"
                      onClick={() => {
                        if (category.subcategories) {
                          setMobileSubMenu(
                            mobileSubMenu === category.category_name
                              ? null
                              : category.category_name,
                          );
                        }
                      }}
                    >
                      <Link
                        href={`/categories/${category.category_slug}`}
                        className="text-lg"
                      >
                        {category.category_name}
                      </Link>
                      {category.subcategories.length > 0 && (
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            mobileSubMenu === category.category_name
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </div>
                    {category.subcategories &&
                      mobileSubMenu === category.category_name && (
                        <div className="mt-1 ml-4 space-y-2">
                          {category.subcategories.map((subCategory) => (
                            <Link
                              key={subCategory.subcategory_name}
                              href={subCategory.subcategory_slug}
                              className="block rounded px-2 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {subCategory.subcategory_name}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        {/* Cart Button with Wide Drawer */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button
              className={`cursor-pointer px-3 py-2.5 ${pathName === "/auth/register" || pathName === "/auth/login" ? "text-black" : "text-white"}`}
            >
              <BriefcaseBusiness className="w-6 sm:w-7" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="top-0 mt-0 h-full w-20 rounded-none">
            <div className="mx-auto w-full">
              <DrawerHeader>
                <div className="mt-5 flex items-center justify-between">
                  <DrawerTitle className="text-base font-bold sm:text-2xl">
                    Cart
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
                  <p className="text-sm sm:text-lg">
                    Your cart is currently empty.
                  </p>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
