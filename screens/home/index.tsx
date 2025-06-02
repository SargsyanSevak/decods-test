import { Heroleft } from "@/components/organisms";
import { logos } from "@/mock";
import dynamic from "next/dynamic";
import Image from "next/image";

const InfiniteHorizontalScroll = dynamic(() =>
  import("@/components/molecules").then((c) => c.InfiniteHorizontalScroll)
);
const ServiceCarousel = dynamic(() =>
  import("@/components/organisms").then((c) => c.ServiceCarousel)
);
const WhyChooseUs = dynamic(() =>
  import("@/components/organisms").then((c) => c.WhyChooseUs)
);
const DevelopmentProcess = dynamic(() =>
  import("@/components/organisms").then((c) => c.DevelopmentProcess)
);

const Home = () => {
  return (
    <>
      <div className="w-full bg-black text-white content pb-10">
        <div className="w-full flex flex-col gap-10">
          <Heroleft />
          <div className="w-full h-[160px] text-center pt-10">
            <InfiniteHorizontalScroll items={logos} />
          </div>
        </div>
        <div className="absolute top-0 right-4 opacity-[0.075] z-0">
          <div className="w-[485px] h-full bg-gradient-to-b from-transparent to-black">
            <Image
              src="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748768621/OBJECTS_q4iemg.png"
              width={485}
              height={385}
              alt="Background Vector"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full bg-white">
        <div className="w-full section">
          <ServiceCarousel />
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full bg-black">
        <div className="w-full text-white section">
          <WhyChooseUs />
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full bg-[#D4D4D4]">
        <div className="w-full h-full text-black section pr-0">
          <DevelopmentProcess />
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full bg-black">
        <div className="w-full text-white section">Section 5</div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">Section 6</div>
      </div>

      {/* Section 7 */}
      <div className="w-full bg-black">
        <div className="w-full text-white section">Section 7</div>
      </div>

      {/* Section 8 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">Section 8</div>
      </div>

      {/* Footer*/}
      <div className="w-full bg-black">
        <div className="w-full text-white section">Footer</div>
      </div>
    </>
  );
};

export default Home;
