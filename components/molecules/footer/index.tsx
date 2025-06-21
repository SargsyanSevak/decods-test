import Image from "next/image";
import SocLinks from "../soc-links";
import { footerTexts } from "@/mock";
import Link from "next/link";
import FadeContent from "../fade-content";
import FadeDown from "../fade-down";
import Subscribe from "../subscribe";
import { useWindowSize } from "@/hooks/useWindowSize";

const Footer = () => {
  const { width } = useWindowSize();
  return (
    <div className="w-full dark-bg relative overflow-hidden">
      <div className="w-full text-white section pb-8 relative z-20">
        <div className="flex justify-between gap-10 md:flex-row flex-col">
          <div className="flex flex-col gap-4 lg:w-max w-full min-w-[300px]">
            <FadeContent>
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749114870/Group_21_f82grw.png"
                width={242}
                height={41}
                alt="logo"
              />
            </FadeContent>

            <FadeContent>
              <p className="paragraph dark-bg-text font-medium leading-[24px] md:max-w-[280px] max-w-full mt-5">
                DECODS is a programming company that builds high-performance
                digital products through clean code, smart architecture, and
                modern design.
              </p>
            </FadeContent>

            <div className="w-full sm:mt-8 mt-4">
              <SocLinks />
            </div>
            <div className="xl:hidden block mt-8 lg:mb-0 mb-6">
              <Subscribe />
            </div>
          </div>

          <div className="w-full grid sm:grid-cols-3 grid-cols-2 [@media(max-width:360px)]:grid-cols-1 gap-10">
            {/* Company Links */}
            <div className="flex flex-col sm:gap-8 gap-5 ">
              <FadeContent>
                <h2 className="text-[16px] text-white font-semibold">
                  {footerTexts.company.title}
                </h2>
              </FadeContent>

              {
                <ul className="flex flex-col gap-2 font-normal  sm:max-w-[180px] max-w-full">
                  {footerTexts.company.items.map((el, i) => {
                    return (
                      <li key={el.title}>
                        <FadeDown delay={0.1 * i}>
                          <Link
                            href={el.href}
                            className="paragraph dark-bg-text font-medium link-hover"
                          >
                            {el.title}
                          </Link>
                        </FadeDown>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>

            {/* Development Services Links */}
            <div className="flex flex-col sm:gap-8 gap-5 sm:max-w-[180px] max-w-[220px]">
              <FadeContent>
                <h2 className="text-[16px] text-white uppercase font-semibold max-w-[180px]">
                  {footerTexts.dev_and_design.title}
                </h2>
              </FadeContent>

              {
                <ul className="flex flex-col gap-2 font-normal">
                  {footerTexts.dev_and_design.items.map((el, index) => {
                    return (
                      <li key={el.title}>
                        <FadeDown delay={0.05 * index}>
                          <Link
                            href={el.href}
                            className="paragraph dark-bg-text font-medium link-hover"
                          >
                            {el.title}
                          </Link>
                        </FadeDown>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>

            {/* Business Links */}
            <div className="flex flex-col sm:gap-8 gap-5 sm:max-w-[180px] max-w-[220px]">
              <FadeContent>
                <h2 className="text-[16px] text-white uppercase font-semibold max-w-[180px]">
                  {footerTexts.support.title}
                </h2>
              </FadeContent>

              {
                <ul className="flex flex-col gap-2 font-normal ">
                  {footerTexts.support.items.map((el, i) => {
                    return (
                      <li key={el.title}>
                        <FadeDown delay={0.05 * i}>
                          <Link
                            href={el.href}
                            className="paragraph dark-bg-text font-medium link-hover"
                          >
                            {el.title}
                          </Link>
                        </FadeDown>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>
          </div>

          <div className="xl:block hidden">
            <Subscribe />
          </div>
        </div>
        <div className="mt-20">
          <FadeContent>
            <Image
              src={
                width > 430
                  ? "https://res.cloudinary.com/dudf3yqtz/image/upload/v1749642572/footer__logo_ylx5hq.png"
                  : "https://res.cloudinary.com/dudf3yqtz/image/upload/v1749973613/hero__logo_r4notj.png"
              }
              width={1700}
              height={136}
              alt="logo"
              className="w-full"
            />
          </FadeContent>
        </div>
        <div className="w-full mt-6 flex justify-center items-center">
          <FadeContent>
            <p className="text-[14px] dark-bg-text">
              © Copyright {new Date().getFullYear()}, All Rights Reserved by
              DECODS.
            </p>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default Footer;
