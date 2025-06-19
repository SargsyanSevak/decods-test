import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";
import { FadeContent, StackCoverageItems } from "@/components/molecules";
import { ArrowRight } from "lucide-react";
import React from "react";

const StackCoverage = () => {
  return (
    <div className="relative">
      <FadeContent>
        <h2 className="text-black section-title font-bold lg:max-w-[900px] max-w-[340px] text-center mx-auto">
          Technology Stack Coverage
        </h2>
        <p className="paragraph slate-text max-w-[900px] text-center mx-auto mt-4">
          Our IT solutions staff augmentation covers every modern development
          need. By the way, we&lsquo;ve noticed a 40% increase in demand for
          blockchain and AI specialists since early 2024 - our talent pool
          adapted accordingly.
        </p>
        <div
          className="sm:hidden  absolute bottom-3 left-0 flex items-center gap-2  w-full justify-end pr-4"
          style={{ animation: "scroll-right 1.2s ease-in-out infinite" }}
        >
          <p className="text-[12px] font-semibold text-black">Scroll</p>
          <ArrowRight size={14} color="black" />
        </div>
      </FadeContent>

      <div className="sm:grid hidden xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mt-16 mt-8 xl:gap-4 gap-2">
        <StackCoverageItems disableAnimation={false} />
      </div>
      <ScrollArea className="w-full sm:hidden block -mb-10">
        <div className="flex  gap-4 flex-row py-10 pr-4">
          <StackCoverageItems disableAnimation={true} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default StackCoverage;
