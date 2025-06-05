import Image from "next/image";
import SocLinks from "../soc-links";
import { footerTexts } from "@/mock";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";

const Footer = () => {
  return (
    <div className="w-full bg-black relative overflow-hidden">
      <div className="w-full text-white section relative z-20">
        <div className="">
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749114267/Group_20_2_ydltw7.png"
            width={1700}
            height={136}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="flex justify-between gap-6 mt-20">
          <div className="flex flex-col gap-4">
            <Image
              src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749114870/Group_21_f82grw.png"
              width={242}
              height={41}
              alt="logo"
            />
            <p className="paragraph text-[#838384] max-w-[280px] mt-5">
              DECODS is a programming company that builds high-performance
              digital products through clean code, smart architecture, and
              modern design.
            </p>
            <div className="w-full mt-1">
              <SocLinks />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-[18px] text-[#C2B8B8] font-medium">
              {footerTexts.company.title}
            </h2>
            {
              <ul className="flex flex-col gap-2 font-normal">
                {footerTexts.company.items.map((el) => {
                  return (
                    <li key={el.title}>
                      <Link
                        href={el.href}
                        className="text-[16px] text-[#A6A0A0] link-hover"
                      >
                        {el.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-[18px] text-[#C2B8B8] font-medium">
              {footerTexts.dev_and_design.title}
            </h2>
            {
              <ul className="flex flex-col gap-2 font-normal">
                {footerTexts.dev_and_design.items.map((el) => {
                  return (
                    <li key={el.title}>
                      <Link
                        href={el.href}
                        className="text-[16px] text-[#A6A0A0] link-hover"
                      >
                        {el.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-[18px] text-[#C2B8B8] font-medium">
              {footerTexts.support.title}
            </h2>
            {
              <ul className="flex flex-col gap-2 font-normal">
                {footerTexts.support.items.map((el) => {
                  return (
                    <li key={el.title}>
                      <Link
                        href={el.href}
                        className="text-[16px] text-[#A6A0A0] link-hover"
                      >
                        {el.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            }
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-[18px] text-[#C2B8B8] font-medium">
              SUBSCRIBE TO NEWSLETTER
            </h2>
            <div className="flex flex-col gap-6">
              <Input
                placeholder="Enter your email"
                type="email"
                className="py-6 pl-0 placeholder:text-[#BCBCCA] placeholder:text-[16px] border-0 border-b border-b-[#BCBCCA] rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0"
              />

              <Button variant="secondary" className="!h-[50px] w-[145px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full mt-20 flex justify-center items-center">
          <p className="text-[16px] text-[#A59F9F]">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            DECODS.
          </p>
        </div>
      </div>
      <div className="absolute top-[-400px] left-0 bottom-0">
        <Image
          src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749121090/Group_6_flqkj9.png"
          width={800}
          height={900}
          alt="layer"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;
