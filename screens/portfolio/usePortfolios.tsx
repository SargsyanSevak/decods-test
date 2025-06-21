"use client";

import { useEffect, useState, useMemo, useRef } from "react";

import { debounce } from "@/utils/debounce";
import { mockPortfolios, portfolioCategories } from "@/mock";

const PORTFOLIOS_PER_PAGE = 12;

const usePortfolios = () => {
  const [tab, setTab] = useState("All Projects");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const tabs = ["All Projects", ...portfolioCategories];

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
    return mockPortfolios.filter((item) => {
      const matchesTab = tab === "All Projects" || item.category === tab;
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [tab, search]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PORTFOLIOS_PER_PAGE;
    return filtered.slice(start, start + PORTFOLIOS_PER_PAGE);
  }, [filtered, page]);

  const totalPages = Math.ceil(filtered.length / PORTFOLIOS_PER_PAGE);

  return {
    tabs,
    tab,
    setTab,
    page,
    setPage,
    searchInput,
    setSearchInput,
    portfolios: paginated,
    totalPages,
  };
};

export default usePortfolios;
