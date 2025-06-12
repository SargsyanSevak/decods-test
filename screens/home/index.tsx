"use client";
import { Heroleft } from "@/components/organisms";
import { logos } from "@/mock";
import dynamic from "next/dynamic";
import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";

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
const TechnologyStack = dynamic(() =>
  import("@/components/organisms").then((c) => c.TechnologyStack)
);
const Testimonials = dynamic(() =>
  import("@/components/organisms").then((c) => c.Testimonials)
);
const FAQ = dynamic(() => import("@/components/organisms").then((c) => c.FAQ));

const Banner = dynamic(() =>
  import("@/components/organisms").then((c) => c.Banner)
);

const Home = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current as HTMLElement,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="smooth-scroll-container" data-scroll-container ref={scrollRef}>
      <div className="w-full bg-black text-white content mt-20">
        <div className="w-full flex flex-col gap-10">
          <Heroleft />
          <div className="w-full h-[120px] text-center">
            <InfiniteHorizontalScroll items={logos} />
          </div>
        </div>
        <div className="absolute top-0 right-4 opacity-[0.075] z-0">
          <div className="w-[485px] h-full bg-gradient-to-b from-transparent to-black">
            <Image
              src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749122519/Group_7_yzjage.png"
              width={485}
              height={385}
              alt="Background"
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
      <div className="w-full bg-white">
        <div className="w-full h-full text-black section pr-0">
          <DevelopmentProcess />
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full bg-black">
        <div className="w-full text-white section">
          <TechnologyStack />
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">
          <Testimonials />
        </div>
      </div>

      {/* Section 7 */}
      <div className="w-full bg-black overflow-hidden">
        <div className="w-full text-white section">
          <FAQ />
        </div>
      </div>

      {/* Section 8 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Home;
