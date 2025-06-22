"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/atoms/tabs";

import usePortfolios from "./usePortfolios";
import {
  PortfolioCard,
  DynamicPagination,
  FadeContent,
  FadeDown,
} from "@/components/molecules";
import { useRef } from "react";
import { Input } from "@/components/atoms/input";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";

import Image from "next/image";
import { DevApproach, FAQ } from "@/components/organisms";
import { Button } from "@/components/atoms/button";
import { portfolioFaqDataLeft } from "@/mock";

const PortfolioScreen = () => {
  const { width } = useWindowSize();
  const {
    tabs,
    tab,
    setTab,
    page,
    setPage,
    searchInput,
    setSearchInput,
    portfolios,
    totalPages,
  } = usePortfolios();

  const contentRef = useRef<HTMLDivElement | null>(null);

  const scroolToContent = () => {
    contentRef.current?.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  };

  return (
    <div className="text-white overflow-hidden">
      <div className="w-full bg-white">
        <div className="w-full text-white section md:pt-20 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
            {/* Text Left */}
            <div className="flex flex-col gap-4 lg:max-w-[588px] max-w-full  h-full pb-10">
              <FadeContent className="lg:max-w-[500px] max-w-[500px]">
                <h1 className=" text-black section-title">
                  Our Portfolio - Custom Software Examples & Case Studies
                </h1>
              </FadeContent>
              <FadeContent>
                <p className="paragraph slate-text mt-4">
                  Our software development portfolio includes 150+ custom
                  software examples, from startup MVP development portfolio
                  projects to enterprise software solutions showcase. Each web
                  development case studies entry highlights real-world
                  challenges solved with modern technologies. Our software
                  engineering portfolio covers fintech development examples,
                  healthcare software portfolio, and education software cases.
                </p>
              </FadeContent>
              <FadeDown className="mt-10">
                <a
                  href="https://calendly.com/help-decods/30min"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="calendly"
                  className="w-fit [@media(max-width:480px)]:w-full mt-6"
                >
                  <Button
                    iconArrow
                    iconPosition="right"
                    className="!h-[56px] w-[180px] [@media(max-width:480px)]:w-full"
                    type="button"
                  >
                    Book a Call
                  </Button>
                </a>
              </FadeDown>
            </div>

            {/* Image Right */}
            <div className="lg:h-[500px] md:h-[400px] h-[360px] min-w-[300px] rounded-[24px] overflow-hidden rounded-tr-[80px] lg:rounded-tr-[120px]">
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750509629/c479d766139e7899bef2eb01415ac00321da56bf_r8hnmb.jpg"
                width={715}
                height={550}
                alt="How we work"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="w-full text-white section md:pt-20 pt-10">
          <h2
            className="section-title text-center mx-auto text-black xl:max-w-[800px] max-w-[600px]"
            ref={contentRef}
          >
            Filter Projects by Category
          </h2>
          <div className="lg:mt-16 mt-10 w-full">
            <div className="flex justify-between gap-6 items-center">
              {width > 1300 ? (
                <Tabs
                  value={tab}
                  onValueChange={(e) => {
                    setTab(e);
                    setPage(1);
                  }}
                >
                  <TabsList className="flex items-center gap-2">
                    {tabs.map((el) => (
                      <TabsTrigger key={el} value={el}>
                        {el}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              ) : (
                <Select onValueChange={(e) => setTab(e)}>
                  <SelectTrigger className="w-fit bg-black !text-white text-[16px]  rounded-[999]  px-[20px] !py-[8px] !h-[44px]">
                    <SelectValue
                      className="!text-white"
                      placeholder={"All Projects"}
                      defaultValue={"All Projects"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {tabs.map((el) => {
                      return (
                        <SelectItem key={el} value={el}>
                          {el}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              )}

              <Input
                className="max-w-[300px] py-5 text-black"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 mt-8">
              {portfolios.map((item) => (
                <PortfolioCard {...item} key={item.id} />
              ))}
              {!portfolios.length && (
                <div className="mt-10">
                  <p className="text-black text-[24px] font-semibold">
                    Results not found
                  </p>
                </div>
              )}
            </div>
            <div className="mt-16">
              {!!portfolios.length && (
                <DynamicPagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={(e) => {
                    setPage(e);
                    scroolToContent();
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full dark-bg">
        <div className="w-full text-white section">
          <DevApproach />
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="w-full text-black section">
          <h2 className="section-title text-black text-center mx-auto lg:max-w-[800px] max-w-[600px]">
            Ready to Start Your Project?
          </h2>
          <p className="paragraph slate-text mt-6 max-w-[900px] text-center mx-auto">
            Let&lsquo;s discuss your software development needs and create a
            solution that drives results.
          </p>
          <div className="flex justify-center items-center gap-4 sm:mt-16 mt-10">
            <Button
              iconArrow
              iconPosition="right"
              className="w-[260px] h-[56px] [@media(max-width:640px)]:w-full"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full dark-bg overflow-hidden">
        <div className="w-full text-white section">
          <FAQ faqDataLeft={portfolioFaqDataLeft} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreen;
