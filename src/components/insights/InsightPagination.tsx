"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPaginationItems } from "@/lib/pagination";
import { cn } from "@/lib/utils";

interface InsightPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function InsightPagination({
  page,
  totalPages,
  onPageChange,
  className,
}: InsightPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const items = getPaginationItems(page, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-4 md:gap-6", className)}
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="flex items-center gap-2 text-sm font-semibold text-textDark transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous page"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-primary">
          <ChevronLeft size={18} strokeWidth={2.5} />
        </span>
        Prev
      </button>

      <div className="flex items-center gap-1 rounded-full bg-mint px-3 py-2 md:gap-2 md:px-4">
        {items.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-1 text-sm font-semibold text-textDark"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-label={`Page ${item}`}
              aria-current={item === page ? "page" : undefined}
              className={cn(
                "flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-sm font-semibold transition-colors",
                item === page
                  ? "bg-primary text-white"
                  : "text-textDark hover:text-primary"
              )}
            >
              {item}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="flex items-center gap-2 text-sm font-semibold text-textDark transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next page"
      >
        Next
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-primary">
          <ChevronRight size={18} strokeWidth={2.5} />
        </span>
      </button>
    </nav>
  );
}
