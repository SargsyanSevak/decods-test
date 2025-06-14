import Image from "next/image";
import SocLinks from "../soc-links";
import { footerTexts } from "@/mock";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import FadeContent from "../fade-content";
import FadeDown from "../fade-down";

const Footer = () => {
  return (
    <div className="w-full bg-black relative overflow-hidden">
      <div className="w-full text-white section pb-8 relative z-20">
        <div className="flex justify-between gap-6 ">
          <div className="flex flex-col gap-4">
            <FadeContent>
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749114870/Group_21_f82grw.png"
                width={242}
                height={41}
                alt="logo"
              />
            </FadeContent>

            <FadeContent>
              <p className="paragraph text-white/50 font-medium leading-[24px] max-w-[280px] mt-5">
                DECODS is a programming company that builds high-performance
                digital products through clean code, smart architecture, and
                modern design.
              </p>
            </FadeContent>

            <div className="w-full mt-8">
              <SocLinks />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <FadeContent>
              <h2 className="text-[16px] text-white font-semibold">
                {footerTexts.company.title}
              </h2>
            </FadeContent>

            {
              <ul className="flex flex-col gap-2 font-normal  max-w-[180px]">
                {footerTexts.company.items.map((el, i) => {
                  return (
                    <li key={el.title}>
                      <FadeDown delay={0.2 * i}>
                        <Link
                          href={el.href}
                          className="paragraph text-white/50 font-medium link-hover"
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
          <div className="flex flex-col gap-8 max-w-[180px]">
            <FadeContent>
              <h2 className="text-[16px] text-white uppercase font-semibold ">
                {footerTexts.dev_and_design.title}
              </h2>
            </FadeContent>

            {
              <ul className="flex flex-col gap-2 font-normal">
                {footerTexts.dev_and_design.items.map((el, index) => {
                  return (
                    <li key={el.title}>
                      <FadeDown delay={0.3 * index}>
                        <Link
                          href={el.href}
                          className="paragraph text-white/50 font-medium link-hover"
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
          <div className="flex flex-col gap-8 max-w-[180px]">
            <FadeContent>
              <h2 className="text-[16px] text-white uppercase font-semibold">
                {footerTexts.support.title}
              </h2>
            </FadeContent>

            {
              <ul className="flex flex-col gap-2 font-normal ">
                {footerTexts.support.items.map((el, i) => {
                  return (
                    <li key={el.title}>
                      <FadeDown delay={0.3 * i}>
                        <Link
                          href={el.href}
                          className="paragraph text-white/50 font-medium link-hover"
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
          <div className="flex flex-col gap-8">
            <FadeContent>
              <h2 className="text-[16px] text-white font-semibold">
                SUBSCRIBE
                <br /> TO NEWSLETTER
              </h2>
            </FadeContent>

            <div className="flex flex-col gap-6">
              <FadeDown>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="py-6 pl-0 placeholder:text-white/50 placeholder:text-[16px] border-0 border-b border-b-[#BCBCCA] rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0"
                />
              </FadeDown>
              <FadeDown delay={0.6}>
                <Button
                  variant="secondary"
                  className="!h-[44px] w-[145px] !text-[16px]"
                >
                  Subscribe
                </Button>
              </FadeDown>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <FadeContent>
            <Image
              src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749642572/footer__logo_ylx5hq.png"
              width={1700}
              height={136}
              alt="logo"
              className="w-full"
            />
          </FadeContent>
        </div>
        <div className="w-full mt-6 flex justify-center items-center">
          <FadeContent>
            <p className="text-[14px] text-white/50">
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
