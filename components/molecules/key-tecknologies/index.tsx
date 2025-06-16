import React from "react";
import { Heart, Layers, ShoppingCart } from "lucide-react";
import { IconCloud, IconDollar, IconHome } from "@/assets";
import { FadeContent, FadeDown } from "@/components/molecules";

const KeyTecknologies = () => {
  return (
    <>
      <FadeDown className="bg-[#0505050F] sm:min-w-auto min-w-[350px] p-[20px] rounded-[24px] flex flex-col gap-1">
        <FadeContent>
          <span>
            <Layers size={32} />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Custom ERP and CRM Development
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            for streamlined business operations
          </p>
        </FadeContent>
      </FadeDown>

      <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
        <FadeContent>
          <span>
            <IconCloud />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            SaaS Application Development
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            with multi-tenant architectures
          </p>
        </FadeContent>
      </FadeDown>

      <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
        <FadeContent>
          <span>
            <ShoppingCart size={32} />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            E-commerce Development
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            with integrated payment systems
          </p>
        </FadeContent>
      </FadeDown>
      <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
        <FadeContent>
          <span>
            <Heart size={32} />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Healthcare Solutions
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">(HIPAA compliance)</p>
        </FadeContent>
      </FadeDown>

      <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
        <FadeContent>
          <span>
            <IconDollar />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Financial Applications
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">(PCI, KYC compliance)</p>
        </FadeContent>
      </FadeDown>

      <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
        <FadeContent>
          <span>
            <IconHome />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Real Estate Platforms
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">(CRM, mobile applications)</p>
        </FadeContent>
      </FadeDown>
    </>
  );
};

export default KeyTecknologies;
