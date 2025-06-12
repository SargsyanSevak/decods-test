"use client";
import React, { FC } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import { IconFacebook, IconLinkedin, IconXBlack } from "@/assets";
import Image from "next/image";
import { mockArticles } from "@/mock";
import { ArticleCard } from "@/components/molecules";
interface ArticleContentItem {
  id: number;
  title: string;
  subTitle: string;
  description: string;
}

interface RandomArticles {
  id: number;
  title: string;
  description: string;
  by: string;
  date: string;
  timeToRead: string;
  category: string;
  image: string;
  content: ArticleContentItem[];
}
interface Article {
  data: RandomArticles;
}

const SingleArticleScreen: FC<Article> = ({ data }) => {
  const href = typeof window !== "undefined" ? window.location.href : "";

  function getRandomArticles(
    articles: RandomArticles[],
    count = 4
  ): RandomArticles[] {
    const shuffled = [...articles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomFour = getRandomArticles(mockArticles);

  console.log(randomFour);

  return (
    <div className="text-white section">
      <div className="w-full max-w-[832px] mx-auto">
        <h2 className="section-title text-black max-w-[712px]">{data.title}</h2>
        <p className="text-[#05050580] text-[18px] leading-[24px] mt-4">
          By <span className="font-medium text-black">{data.by}</span> on{" "}
          <span className="font-medium text-black">{data.date}</span> In{" "}
          {data.category}{" "}
        </p>
        <p className="text-[#05050580] text-[18px] leading-[24px] mt-4">
          {data.description}
        </p>

        <div className="flex items-center justify-between mt-14">
          <h2 className="text-black text-[20px] font-semibold">
            Share this insight
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] border-[1px] border-[gray] rounded-full flex justify-center items-center cursor-pointer">
              <FacebookShareButton url={href} quote={data.title}>
                <IconFacebook width={20} height={20} fill="#05050580" />
              </FacebookShareButton>
            </div>
            <div className="w-[40px] h-[40px] border-[1px] border-[gray] rounded-full flex justify-center items-center cursor-pointer">
              <LinkedinShareButton url={href}>
                <IconLinkedin width={18} height={18} fill="#05050580" />
              </LinkedinShareButton>
            </div>
            <div className="w-[40px] h-[40px] border-[1px] border-[gray] rounded-full flex justify-center items-center cursor-pointer">
              <TwitterShareButton url={href} title={data.title}>
                <IconXBlack width={17} height={17} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-[24px] h-full max-h-[800px] overflow-hidden mt-[40px]">
        <Image
          src={data.image}
          alt={data.title}
          width={1440}
          height={810}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-[40px] w-full max-w-[872px] mx-auto flex flex-col gap-8">
        {data.content.map((el) => {
          return (
            <div key={el.id}>
              <h2 className="text-black text-[32px] font-semibold leading-[36px]">
                {el.id}. {el.title}
              </h2>
              <p className="text-[18px] text-[#05050580] leading-[24px] font-medium mt-4">
                {el.subTitle}
              </p>
              <p className="text-[18px] text-[#05050580] leading-[24px] font-medium mt-4">
                {el.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full mt-24">
        <h2 className="text-black text-[42px] leading-[42px] font-bold">
          Might be interesting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 mt-8">
          {randomFour.map((item) => (
            <ArticleCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleArticleScreen;
