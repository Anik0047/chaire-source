import CommonCard from "@/components/user/shared/CommonCard";
import Footer from "@/components/user/shared/Footer";
import Navbar from "@/components/user/shared/Navbar";
import ProductDetailsNavber from "@/components/user/shared/ProductDetailsNavbar";
import React, { ReactNode } from "react";

const UserAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="relative w-full">
        <div className="absolute left-1/2 z-10 mx-auto mt-4 w-full max-w-[1480px] -translate-x-1/2 sm:mt-8">
          {/* Navbar */}
          <nav>
            {/* Navbar contentd */}
            <ProductDetailsNavber />
          </nav>
        </div>
      </div>
      {children}
      <section className="w-full sm:mt-24">
        <hr />
      </section>

      {/* Section 5 */}
      <section className="mx-auto max-w-[1220px] px-4 py-12">
        <CommonCard />
      </section>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default UserAuthLayout;
