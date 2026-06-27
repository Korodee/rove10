export interface InsightArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  publishedAt?: string;
  thumbnail: string;
  imageWidth: number;
  imageHeight: number;
  body: string[];
  intro?: string[];
  sections?: InsightArticleSection[];
  inlineImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  inlineImageAfterSection?: number;
}

export const featuredArticle: InsightArticle = {
  id: "featured-1",
  slug: "navigating-volatility-in-emerging-fx-markets",
  title: "Navigating Volatility in Emerging FX Markets",
  description:
    "Here's how investors can manage risk and identify opportunities in a volatile FX environment.",
  category: "Newsletter",
  readTime: "4 min Read",
  publishedAt: "20 Mar 2024",
  thumbnail: "/images/navigating.png",
  imageWidth: 746,
  imageHeight: 734,
  intro: [
    "Emerging market currencies can move sharply on policy shifts, commodity prices, and global risk sentiment. For investors with exposure to these markets, volatility is not a temporary inconvenience — it is a structural feature of the opportunity set.",
  ],
  sections: [
    {
      heading: "What's Driving FX Volatility?",
      paragraphs: [
        "Policy uncertainty, commodity price swings, and shifts in global risk appetite all contribute to sharp moves in emerging market FX. When investors reassess growth prospects or liquidity conditions, currencies at the margin often adjust first.",
        "A disciplined approach starts with understanding what is driving price action. Separating short-term noise from durable trends helps teams size positions appropriately and avoid reactive decision-making when markets turn.",
        "Tracking local inflation dynamics, current account balances, and central bank communication provides a clearer picture of whether moves reflect fundamentals or temporary positioning shifts.",
      ],
    },
    {
      heading: "Managing Risk in Uncertain Conditions",
      paragraphs: [
        "Risk management matters most when liquidity thins and correlations spike. Maintaining diversification across regions, using clearly defined entry and exit criteria, and keeping adequate liquidity buffers can help portfolios stay resilient through periods of stress.",
        "Hedging tools — including forwards, options, and natural offsets through revenue diversification — should be evaluated as part of a broader risk framework rather than applied reactively after volatility has already risen.",
        "Investors who document decision rules in advance are better positioned to act consistently when markets become disorderly, reducing the likelihood of emotional responses during drawdowns.",
      ],
    },
    {
      heading: "Identifying Opportunity in Volatility",
      paragraphs: [
        "Opportunity often appears when sentiment is weakest. Investors who combine rigorous research with patience are better placed to identify mispriced assets and capture long-term value in emerging FX markets.",
        "Periods of elevated volatility can create entry points for investors with a longer horizon, provided position sizing reflects the risk of further near-term disruption.",
      ],
    },
    {
      heading: "The Importance of Strategy and Insight",
      paragraphs: [
        "Sustainable outcomes in emerging FX require a repeatable process: clear objectives, disciplined research, and ongoing portfolio review. Strategy should guide when to add exposure, when to reduce it, and when to stay patient.",
      ],
    },
    {
      heading: "Conclusions",
      paragraphs: [
        "Volatility in emerging FX markets is a constant, not an exception. Investors who prepare for it — through diversification, liquidity planning, and structured decision-making — are more likely to protect capital and capture opportunity over time.",
        "Combining macro awareness with local market insight remains the foundation for navigating uncertainty and building durable portfolio outcomes.",
      ],
    },
  ],
  inlineImage: {
    src: "/images/strategic.png",
    alt: "Investor reviewing market strategy outdoors",
    width: 746,
    height: 734,
  },
  inlineImageAfterSection: 2,
  body: [
    "Emerging market currencies can move sharply on policy shifts, commodity prices, and global risk sentiment. For investors with exposure to these markets, volatility is not a temporary inconvenience — it is a structural feature of the opportunity set.",
    "A disciplined approach starts with understanding what is driving price action. Separating short-term noise from durable trends helps teams size positions appropriately and avoid reactive decision-making when markets turn.",
    "Risk management matters most when liquidity thins and correlations spike. Maintaining diversification across regions, using clearly defined entry and exit criteria, and keeping adequate liquidity buffers can help portfolios stay resilient through periods of stress.",
    "Opportunity often appears when sentiment is weakest. Investors who combine rigorous research with patience are better placed to identify mispriced assets and capture long-term value in emerging FX markets.",
  ],
};

export const insightTabs = [
  "All Insights",
  "Latest",
  "Market Updates",
  "Rove10 News",
  "Blogs",
] as const;

export type InsightTab = (typeof insightTabs)[number];

export const blogPosts: InsightArticle[] = [
  featuredArticle,
  {
    id: "blog-2",
    slug: "fixed-income-strategies-for-stable-returns",
    title: "Fixed Income Strategies for Stable Returns",
    description:
      "Explore proven fixed income strategies designed to deliver consistent returns in uncertain markets.",
    category: "Blog",
    readTime: "5 min Read",
    thumbnail: "/images/fixed.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "Fixed income remains a core building block for investors seeking stability, predictable cash flows, and portfolio balance. In uncertain markets, the quality of issuer selection and duration management becomes even more important.",
      "Laddering maturities, diversifying across sectors, and monitoring rate sensitivity can help reduce concentration risk while preserving income potential. Active oversight allows portfolios to adapt as the rate environment evolves.",
      "For investors prioritizing capital preservation, prioritizing credit quality and liquidity profile over yield alone is essential. Stable returns are often the result of disciplined process rather than reaching for the highest headline rate.",
    ],
  },
  {
    id: "blog-3",
    slug: "positioning-for-growth-in-a-high-interest-rate-cycle",
    title: "Positioning for Growth in a High Interest Rate Cycle",
    description:
      "Learn how to position your portfolio for growth when interest rates remain elevated.",
    category: "Blog",
    readTime: "6 min Read",
    thumbnail: "/images/positioning.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "Elevated interest rates reshape the return landscape for both savers and investors. While borrowing costs rise, selective growth opportunities can still emerge for portfolios built around quality and cash-flow durability.",
      "Investors should evaluate how higher discount rates affect valuations across asset classes and adjust growth exposure accordingly. Companies with strong balance sheets and pricing power often navigate rate cycles more effectively.",
      "Balancing growth assets with income-generating holdings can improve resilience. A thoughtful allocation framework helps investors participate in upside while managing drawdown risk through prolonged tightening phases.",
    ],
  },
  {
    id: "blog-4",
    slug: "portfolio-positioning-through-rate-cycles",
    title: "Positioning for Growth in a High Interest Rate Cycle",
    description:
      "Strategic approaches to capitalizing on opportunities during sustained rate cycles.",
    category: "Blog",
    readTime: "5 min Read",
    thumbnail: "/images/interest-rate.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "Sustained rate cycles create distinct winners and losers across sectors. Mapping macro signals to portfolio positioning helps teams stay aligned with the broader economic backdrop.",
      "Rebalancing into areas of relative strength — while trimming exposure where margins are most pressured — can improve risk-adjusted outcomes. Regular review cadences keep strategy responsive without encouraging excessive turnover.",
      "Long-term growth objectives should remain anchored even as tactical adjustments are made. Consistency in process supports better decisions when markets are volatile and narratives shift quickly.",
    ],
  },
];

export interface HomeInsightCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export const homeInsightCards: HomeInsightCard[] = [
  {
    id: "home-1",
    slug: featuredArticle.slug,
    title: featuredArticle.title,
    description: featuredArticle.description,
    image: featuredArticle.thumbnail,
    imageWidth: featuredArticle.imageWidth,
    imageHeight: featuredArticle.imageHeight,
  },
  {
    id: "home-2",
    slug: blogPosts[2].slug,
    title: blogPosts[2].title,
    description: blogPosts[2].description,
    image: blogPosts[2].thumbnail,
    imageWidth: blogPosts[2].imageWidth,
    imageHeight: blogPosts[2].imageHeight,
  },
  {
    id: "home-3",
    slug: blogPosts[1].slug,
    title: blogPosts[1].title,
    description: blogPosts[1].description,
    image: blogPosts[1].thumbnail,
    imageWidth: blogPosts[1].imageWidth,
    imageHeight: blogPosts[1].imageHeight,
  },
];

export const marketUpdates: InsightArticle[] = [
  {
    id: "market-1",
    slug: "key-developments-investors-should-know",
    title: "Key Developments Investors Should Know",
    description:
      "A roundup of the most significant market developments affecting global investors this week.",
    category: "Market Updates",
    publishedAt: "Jun 20, 2026",
    thumbnail: "/images/real-time.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "Global markets continue to react to shifting policy expectations, cross-border capital flows, and regional growth data. This week's developments reinforce the importance of staying informed across multiple asset classes.",
      "Equity markets showed mixed performance as investors weighed earnings revisions against macro uncertainty. Fixed income markets remained sensitive to forward guidance from major central banks.",
      "For portfolio teams, the key takeaway is to maintain flexibility. Scenario planning and clear risk limits remain essential tools for navigating a fast-moving market environment.",
    ],
  },
  {
    id: "market-2",
    slug: "inflation-report-implications-for-investors",
    title: "What This Week's Inflation Report Means for Investors",
    description:
      "Breaking down the latest inflation data and its implications for portfolio positioning.",
    category: "Market Updates",
    publishedAt: "Jun 20, 2026",
    thumbnail: "/images/interest-rate.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "The latest inflation release provided new insight into the pace of disinflation and the potential path for policy rates. Markets moved quickly to price the implications for both bonds and equities.",
      "Investors should assess how persistent services inflation and wage trends may influence central bank decisions over the coming quarters. Duration positioning and sector allocation may need refinement as data evolves.",
      "A measured response — grounded in fundamentals rather than short-term headlines — helps avoid over-rotation when volatility increases around major economic releases.",
    ],
  },
  {
    id: "market-3",
    slug: "what-is-driving-the-naira-this-month",
    title: "What Is Driving the Naira This Month?",
    description:
      "An analysis of the key factors influencing Naira performance in the current economic climate.",
    category: "Market Updates",
    publishedAt: "Jun 20, 2026",
    thumbnail: "/images/fx.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "Naira performance this month reflects a combination of FX demand dynamics, policy measures, and external reserve trends. Understanding these drivers is critical for businesses and investors with local currency exposure.",
      "Liquidity conditions and import demand continue to influence short-term pricing, while medium-term sentiment depends on macro stability and policy credibility.",
      "Hedging strategies and careful cash-flow planning can help reduce uncertainty for stakeholders navigating currency volatility in the current environment.",
    ],
  },
];

const dividendIncomePlan: InsightArticle = {
  id: "news-2",
  slug: "introducing-the-dividend-income-plan",
  title: "Introducing the Dividend Income Plan",
  description:
    "A new investment product designed for steady dividend income.",
  category: "News",
  readTime: "3 min Read",
  thumbnail: "/images/high-yeild.png",
  imageWidth: 746,
  imageHeight: 734,
  body: [
    "Rove10 is introducing a Dividend Income Plan built for investors seeking regular income distributions alongside disciplined portfolio management.",
    "The plan focuses on quality issuers, transparent reporting, and a repeatable investment process designed to support long-term income objectives.",
    "Clients can speak with our team to review suitability, expected distribution mechanics, and how the plan fits within a broader wealth strategy.",
  ],
};

export const roveNewsFeatured: InsightArticle[] = [
  {
    ...featuredArticle,
    category: "Rove10 News",
    readTime: "4 min Read",
    thumbnail: "/images/strategic.png",
  },
  {
    ...blogPosts[2],
    category: "Rove10 News",
    readTime: "4 min Read",
  },
];

export const roveNews: InsightArticle[] = [blogPosts[1], dividendIncomePlan];

export const roveNewsList = [
  { title: blogPosts[1].title, slug: blogPosts[1].slug },
  { title: dividendIncomePlan.title, slug: dividendIncomePlan.slug },
  {
    title: "Investing in dollars as a Nigerian",
    slug: "investing-in-dollars-as-a-nigerian",
  },
  {
    title: "Building a stable financial future",
    slug: "building-a-stable-financial-future",
  },
];

const supplementalArticles: InsightArticle[] = [
  {
    id: "news-3",
    slug: "investing-in-dollars-as-a-nigerian",
    title: "Investing in dollars as a Nigerian",
    description:
      "Practical considerations for building dollar exposure as part of a diversified wealth plan.",
    category: "News",
    readTime: "4 min Read",
    thumbnail: "/images/fx.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "Dollar exposure can play an important role in preserving purchasing power and diversifying local currency risk. For Nigerian investors, the decision should be guided by goals, time horizon, and liquidity needs.",
      "Accessible instruments vary in complexity, fees, and regulatory considerations. Evaluating each option against clear investment criteria helps avoid unnecessary friction and concentration risk.",
      "A long-term plan that combines disciplined allocation with periodic reviews is often more effective than reactive currency decisions driven by short-term market moves.",
    ],
  },
  {
    id: "news-4",
    slug: "building-a-stable-financial-future",
    title: "Building a stable financial future",
    description:
      "How structured planning and consistent execution support durable financial outcomes.",
    category: "News",
    readTime: "3 min Read",
    thumbnail: "/images/secure.png",
    imageWidth: 746,
    imageHeight: 734,
    body: [
      "Financial stability is built through intentional planning, diversified exposure, and habits that persist across market cycles. Short-term performance matters less than staying aligned with long-term objectives.",
      "Investors who define clear priorities — growth, income, preservation, or flexibility — can construct portfolios that better reflect their real-world needs.",
      "Regular check-ins, transparent reporting, and expert guidance help turn strategy into durable progress over time.",
    ],
  },
];

export const roveNewsPosts: InsightArticle[] = [
  ...roveNewsFeatured,
  dividendIncomePlan,
  supplementalArticles[0],
];

export const insightArticles: InsightArticle[] = Array.from(
  new Map(
    [
      ...blogPosts,
      ...marketUpdates,
      dividendIncomePlan,
      ...supplementalArticles,
    ].map((article) => [article.slug, article])
  ).values()
);

export function getInsightBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 4) {
  const related = blogPosts.filter((article) => article.slug !== slug);

  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const extras = insightArticles.filter(
    (article) =>
      article.slug !== slug &&
      !related.some((item) => item.slug === article.slug)
  );

  return [...related, ...extras].slice(0, limit);
}

export function getAllInsightSlugs() {
  return insightArticles.map((article) => article.slug);
}
