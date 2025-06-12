"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/atoms/tabs";

import useArticles from "./useArticles";
import { ArticleCard, DynamicPagination } from "@/components/molecules";
import { useEffect } from "react";
import { Input } from "@/components/atoms/input";

const Articles = () => {
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
      <h2 className="section-title text-black max-w-[800px]">
        Explore the Future of Tech — One Article at a Time
      </h2>
      <div className="mt-20">
        <div className="flex justify-between items-center">
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
