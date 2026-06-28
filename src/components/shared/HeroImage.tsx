import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroImageProps {
  className?: string;
  imageClassName?: string;
  bleed?: boolean;
  src?: string;
  alt?: string;
}

export default function HeroImage({
  className,
  imageClassName = "object-contain object-bottom md:object-bottom-right",
  bleed = false,
  src = "/images/hero.png",
  alt = "Professionals reviewing financial insights together",
}: HeroImageProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
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
