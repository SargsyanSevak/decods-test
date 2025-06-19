import React from "react";
import {
  IconDb,
  IconDevops,
  IconPc,
  IconPhone,
  IconStars,
  IconTerminal,
} from "@/assets";
import { FadeContent, FadeDown } from "@/components/molecules";

const StackCoverageItems = ({
  disableAnimation,
}: {
  disableAnimation: boolean;
}) => {
  return (
    <>
      <FadeDown
        disable={disableAnimation}
        className="bg-[#0505050F] sm:min-w-auto min-w-[350px] p-[20px] rounded-[24px] flex flex-col gap-1"
      >
        <FadeContent>
          <span>
            <IconPc />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2 text-black">
            Frontend
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            React, Vue.js, Angular, Next.js, TypeScript, Flutter
          </p>
        </FadeContent>
      </FadeDown>

      <FadeDown
        disable={disableAnimation}
        className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]"
      >
        <FadeContent>
          <span>
            <IconTerminal />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-black text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Backend
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            Node.js, Python, Java, Go, PHP, .NET, Ruby
          </p>
        </FadeContent>
      </FadeDown>

      <FadeDown
        disable={disableAnimation}
        className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]"
      >
        <FadeContent>
          <span>
            <IconPhone />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] text-black leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Mobile
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            React Native, Flutter, Swift, Kotlin, Xamarin
          </p>
        </FadeContent>
      </FadeDown>
      <FadeDown
        disable={disableAnimation}
        className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]"
      >
        <FadeContent>
          <span>
            <IconDevops />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] text-black leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            DevOps
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            AWS, Azure, Docker, Kubernetes, Jenkins, Terraform
          </p>
        </FadeContent>
      </FadeDown>

      <FadeDown
        disable={disableAnimation}
        className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]"
      >
        <FadeContent>
          <span>
            <IconDb />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] text-black leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Database
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch
          </p>
        </FadeContent>
      </FadeDown>

      <FadeDown
        disable={disableAnimation}
        className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]"
      >
        <FadeContent>
          <span>
            <IconStars />
          </span>
        </FadeContent>
        <FadeContent>
          <h2 className="2xl:text-[24px] text-[18px] text-black leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
            Emerging
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph slate-text">
            AI/ML, Blockchain, IoT, Web3, AR/VR
          </p>
        </FadeContent>
      </FadeDown>
    </>
  );
};

export default StackCoverageItems;
