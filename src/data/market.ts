export interface MarketIndex {
  name: string;
  value: string;
  change: number;
}

export const marketIndices: MarketIndex[] = [
  { name: "S&P 500", value: "6,584.83", change: -0.66 },
  { name: "DOW", value: "46,341.43", change: 0.66 },
  { name: "NASDAQ", value: "21,863.24", change: -0.6 },
  { name: "VIX", value: "26.05", change: 0.66 },
];
