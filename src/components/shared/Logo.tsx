import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
  size?: "sm" | "md";
}

export default function Logo({
  className,
  variant = "default",
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-auto md:h-7",
    md: "h-8 w-auto md:h-9",
  };

  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/images/rove-logo.svg"
        alt="Rove10"
        width={167}
        height={49}
        priority
        className={cn(
          sizeClasses[size],
          variant === "light" && "brightness-0 invert"
        )}
      />
    </Link>
  );
}
