import { notFound } from "next/navigation";
import type { Metadata } from "next";
import InsightArticleHero from "@/components/insights/InsightArticleHero";
import InsightArticleBody from "@/components/insights/InsightArticleBody";
import MoreArticlesLikeThis from "@/components/insights/MoreArticlesLikeThis";
import CTASection from "@/components/home/CTASection";
import {
  getAllInsightSlugs,
  getInsightBySlug,
  getRelatedArticles,
} from "@/data/insights";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return { title: "Insight Not Found | Rove10" };
  }

  return {
    title: `${article.title} | Rove10 Insights`,
    description: article.description,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug);

  return (
    <>
      <InsightArticleHero article={article} />
      <InsightArticleBody article={article} />
      <MoreArticlesLikeThis articles={relatedArticles} />
      <CTASection />
    </>
  );
}
