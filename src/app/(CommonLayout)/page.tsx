import CategoryFurniture from "@/components/user/Home/CategoryFurniture";
import Featured from "@/components/user/Home/Featured";
import Hero from "@/components/user/Home/Hero";
import TopCompany from "@/components/user/Home/TopCompany";
import VideoComponent from "@/components/user/Home/VideoComponent";


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
