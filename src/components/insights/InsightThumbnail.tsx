import Image from "next/image";
import { cn } from "@/lib/utils";
import type { InsightArticle } from "@/data/insights";

interface InsightThumbnailProps {
  article: Pick<InsightArticle, "thumbnail" | "title" | "imageWidth" | "imageHeight">;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

export default function InsightThumbnail({
  article,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: InsightThumbnailProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#F4FAF8]",
        className
      )}
    >
      <Image
        src={article.thumbnail}
        alt={article.title}
        fill
        priority={priority}
        className={cn("object-cover object-center", imageClassName)}
        sizes={sizes}
      />
    </div>
  );
}
