import { InfiniteHorizontalScroll } from "@/components/molecules";
import { Heroleft } from "@/components/organisms";
import { logos } from "@/mock";
import Image from "next/image";
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="w-full bg-black text-white content pb-10">
      <div className="w-full flex flex-col gap-10">
        <Heroleft />
        <div className="w-full h-[80px] text-center pt-10">
          <InfiniteHorizontalScroll items={logos} />
        </div>
      </div>
      <div className="absolute top-40 right-4">
        <Image
          src="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748691210/Vector_2_ztyg2b.png"
          width={485}
          height={385}
          alt="Background Vector"
        />
      </div>
    </div>
  );
}
