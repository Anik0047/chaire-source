import Hero from "@/components/user/home/Hero";
import CategoryFurniture from "@/components/user/home/CategoryFurniture";
import Featured from "@/components/user/home/Featured";
import VideoComponent from "@/components/user/home/VideoComponent";

import TopCompany from "@/components/user/home/TopCompany";
// import Navbar from "@/components/user/shared/Navbar";
import CommonCard from "@/components/user/shared/CommonCard";
import Footer from "@/components/user/shared/Footer";

export default function Home() {
  return (
    <div className="w-full">
      {/* Banner Section */}

      {/* Banner Content (Full Width) */}
      <div className="">
        <Hero />
      </div>
      {/* Section 1 */}
      <section className="mx-auto max-w-[1220px] px-4 py-12">
        <CategoryFurniture />
      </section>

      {/* Section 2 */}
      <section className="mx-auto max-w-[1220px] px-4 py-12">
        <Featured />
      </section>

      {/* Section 3 (Full Width) */}
      <section className="w-full py-12">
        <VideoComponent />
      </section>

      {/* Section 4 */}
      <section className="mx-auto max-w-[1220px] px-4">
        <TopCompany />
      </section>

      {/* <section className="w-full sm:mt-24">
        <hr />
      </section> */}

      {/* Section 5 */}
      {/* <section className="mx-auto max-w-[1220px] px-4 py-12">
        <CommonCard />
      </section> */}

      {/* Section 6 */}
    </div>
  );
}
