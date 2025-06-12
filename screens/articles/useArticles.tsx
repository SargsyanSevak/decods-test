"use client";

import { useEffect, useState, useMemo, useRef } from "react";

import { debounce } from "@/utils/debounce";
import { mockArticles } from "@/mock";

const ARTICLES_PER_PAGE = 16;

const useArticles = () => {
  const [tab, setTab] = useState("All");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const tabs = ["All", "Insights", "Company", "Press"];

  const debouncedSetSearch = useRef(
    debounce((val: string) => {
      setSearch(val);
      setPage(1);
    }, 500)
  ).current;

  useEffect(() => {
    debouncedSetSearch(searchInput);
  }, [searchInput, debouncedSetSearch]);

  const filtered = useMemo(() => {
    return mockArticles.filter((item) => {
      const matchesTab = tab === "All" || item.category === tab;
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [tab, search]);

  const paginated = useMemo(() => {
    const start = (page - 1) * ARTICLES_PER_PAGE;
    return filtered.slice(start, start + ARTICLES_PER_PAGE);
  }, [filtered, page]);

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);

  return {
    tabs,
    tab,
    setTab,
    page,
    setPage,
    searchInput,
    setSearchInput,
    articles: paginated,
    totalPages,
  };
};

export default useArticles;
