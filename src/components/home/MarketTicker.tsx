"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { marketIndices } from "@/data/market";
import { cn } from "@/lib/utils";

function TickerCard({
  name,
  value,
  change,
}: {
  name: string;
  value: string;
  change: number;
}) {
  const isPositive = change >= 0;

  return (
    <div className="inline-flex shrink-0 rounded-xl bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex min-w-[148px] flex-col gap-2 md:min-w-[160px]">
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              "h-4 w-[3px] shrink-0 rounded-full",
              isPositive ? "bg-[#22A06B]" : "bg-[#E34949]"
            )}
          />
          <span className="text-sm font-bold leading-none text-[#1A1A1A]">
            {name}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 pl-[13px]">
          <span className="text-xs font-medium text-[#6B7775] md:text-sm">
            {value}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold leading-none",
              isPositive
                ? "bg-[#E3F5EC] text-[#1F845A]"
                : "bg-[#FDECEC] text-[#C9372C]"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
            ) : (
              <TrendingDown className="h-3 w-3" strokeWidth={2.5} />
            )}
            {isPositive ? "+" : ""}
            {change}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MarketTicker() {
  const doubled = [...marketIndices, ...marketIndices, ...marketIndices];

  return (
    <section className="flex h-[88px] w-full shrink-0 overflow-hidden md:h-[96px]">
      {/* Left — peach title panel */}
      <div className="hidden min-w-[140px] w-[28%] max-w-[260px] shrink-0 items-center border-r border-[#F0D4C8] bg-[#FDE6D8] pl-10 pr-4 md:w-[22%] md:min-w-[220px] md:max-w-[280px] md:pl-14 md:pr-6 lg:flex">
        <p className="text-[13px] font-bold leading-snug text-[#2C2419] md:text-[15px] md:leading-tight">
          Global Markets,
          <br />
          at a Glance.
        </p>
      </div>

      {/* Right — cream ticker track */}
      <div className="relative min-w-0 flex-1 overflow-hidden bg-[#FFF9F1]">
        <div className="flex h-full items-center">
          <div className="ticker-animate flex items-center gap-3 px-4 md:gap-4 md:px-5">
            {doubled.map((index, i) => (
              <TickerCard
                key={`${index.name}-${i}`}
                name={index.name}
                value={index.value}
                change={index.change}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
