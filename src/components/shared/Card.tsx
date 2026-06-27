import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white",
        hover && "transition-shadow duration-300 hover:shadow-cardHover",
        className
      )}
    >
      {children}
    </div>
  );
}
