"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import type { InsightArticle } from "@/data/insights";

interface InsightArticleBodyProps {
  article: InsightArticle;
}

function ArticleImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-[#F4FAF8]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </div>
  );
}

export default function InsightArticleBody({ article }: InsightArticleBodyProps) {
  const sections = article.sections;
  const inlineAfter = article.inlineImageAfterSection ?? -1;

  return (
    <section className="bg-white pb-12 pt-8 md:pb-16 md:pt-10">
      <Container>
        <div className="mx-auto max-w-3xl space-y-10 md:space-y-12">
          <AnimatedSection>
            <ArticleImage
              src={article.thumbnail}
              alt={article.title}
              width={article.imageWidth}
              height={article.imageHeight}
              priority
            />
          </AnimatedSection>

          {sections ? (
            sections.map((section, index) => (
              <div key={section.heading} className="space-y-10 md:space-y-12">
                <AnimatedSection delay={0.05}>
                  <div className="space-y-5">
                    <h2 className="text-2xl font-extrabold leading-snug text-textDark md:text-[2rem]">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-relaxed text-secondary md:text-[17px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AnimatedSection>

                {article.inlineImage && index === inlineAfter && (
                  <AnimatedSection delay={0.08}>
                    <ArticleImage
                      src={article.inlineImage.src}
                      alt={article.inlineImage.alt}
                      width={article.inlineImage.width}
                      height={article.inlineImage.height}
                    />
                  </AnimatedSection>
                )}
              </div>
            ))
          ) : (
            <AnimatedSection delay={0.05}>
              <div className="space-y-6">
                {article.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-secondary md:text-[17px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </Container>
    </section>
  );
}
