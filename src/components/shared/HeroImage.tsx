import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroImageProps {
  className?: string;
  imageClassName?: string;
  bleed?: boolean;
}

export default function HeroImage({
  className,
  imageClassName = "object-contain object-bottom md:object-bottom-right",
  bleed = false,
}: HeroImageProps) {
  const image = (
    <Image
      src="/images/hero.png"
      alt="Professionals reviewing financial insights together"
      fill
      className={imageClassName}
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority
    />
  );

  if (bleed) {
    return (
      <div className={className}>
        <div className="relative ml-auto h-full w-[108%] max-w-none">
          {image}
        </div>
      </div>
    );
  }

  return <div className={cn(className)}>{image}</div>;
}
