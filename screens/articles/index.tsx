"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/atoms/tabs";

import useArticles from "./useArticles";
import { ArticleCard, DynamicPagination } from "@/components/molecules";
import { useEffect } from "react";
import { Input } from "@/components/atoms/input";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";

const Articles = () => {
  const { width } = useWindowSize();
  const {
    tabs,
    tab,
    setTab,
    page,
    setPage,
    searchInput,
    setSearchInput,
    articles,
    totalPages,
  } = useArticles();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [tab, page]);

  return (
    <div className="text-white section">
      <h2 className="section-title text-black xl:max-w-[800px] max-w-[600px]">
        Explore the Future of Tech — One Article at a Time
      </h2>
      <div className="lg:mt-20 mt-12 w-full">
        <div className="flex justify-between gap-6 items-center">
          {width > 764 ? (
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
                  placeholder={"All"}
                  defaultValue={"All"}
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
          {articles.map((item) => (
            <ArticleCard {...item} key={item.id} />
          ))}
          {!articles.length && (
            <div className="mt-10">
              <p className="text-black text-[24px] font-semibold">
                Results not found
              </p>
            </div>
          )}
        </div>
        <div className="mt-10">
          {!!articles.length && (
            <DynamicPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
