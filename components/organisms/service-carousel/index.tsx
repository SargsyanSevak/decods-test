import { solutionsData } from "@/mock";
import { SolutionCard } from "@/components/molecules";

const ServiceCarousel = () => {
  return (
    <div className="w-full h-full">
      <h2 className="2xl:text-[54px] text-[40px] max-w-[1200px] text-center mx-auto">
        Leading Software Development Company – Comprehensive Custom Solutions
      </h2>
      <p className="text-[18px] leading-[30px] text-center italic font-semibold max-w-[893px] mx-auto mt-6">
        “The global custom software development market is projected to reach
        $146.18 billion by 2030, with businesses increasingly choosing tailored
        solutions over off-the-shelf alternatives to gain competitive advantage
        and operational efficiency.”
      </p>

      <div className="w-full mt-20 flex flex-col gap-14">
        {solutionsData.map((el) => {
          return <SolutionCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default ServiceCarousel;
