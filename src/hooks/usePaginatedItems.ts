"use client";

import { useEffect, useMemo, useState } from "react";
import { paginateItems } from "@/lib/pagination";

export function usePaginatedItems<T>(
  items: T[],
  pageSize: number,
  resetKey?: string
) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [resetKey]);

  const { pageItems, totalPages, currentPage } = useMemo(
    () => paginateItems(items, page, pageSize),
    [items, page, pageSize]
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return {
    page: currentPage,
    setPage,
    pageItems,
    totalPages,
  };
}
