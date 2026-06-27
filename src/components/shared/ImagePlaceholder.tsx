import { cn } from "@/lib/utils";

type PlaceholderVariant =
  | "hero"
  | "performance-featured"
  | "plant"
  | "chart"
  | "house"
  | "fx"
  | "income"
  | "growth"
  | "data"
  | "institutional"
  | "secure"
  | "newsletter"
  | "generic";

interface ImagePlaceholderProps {
  variant?: PlaceholderVariant;
  className?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  variant = "generic",
  className,
  aspectRatio = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        aspectRatio,
        className
      )}
    >
      {variant === "hero" && <HeroPlaceholder />}
      {variant === "performance-featured" && <PerformanceFeaturedPlaceholder />}
      {variant === "plant" && <PlantPlaceholder />}
      {variant === "chart" && <ChartPlaceholder />}
      {variant === "house" && <HousePlaceholder />}
      {variant === "fx" && <FxPlaceholder />}
      {variant === "income" && <IncomePlaceholder />}
      {variant === "growth" && <GrowthPlaceholder />}
      {variant === "data" && <DataDrivenPlaceholder />}
      {variant === "institutional" && <InstitutionalPlaceholder />}
      {variant === "secure" && <SecurePlaceholder />}
      {variant === "newsletter" && <NewsletterPlaceholder />}
      {variant === "generic" && <GenericPlaceholder />}
    </div>
  );
}

function HeroPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-mint via-mint-soft to-white">
      {/* City skyline line art */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-1/3 w-full opacity-20"
        viewBox="0 0 400 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 L0 80 L30 80 L30 50 L60 50 L60 70 L90 70 L90 40 L120 40 L120 90 L150 90 L150 60 L180 60 L180 30 L210 30 L210 80 L240 80 L240 55 L270 55 L270 75 L300 75 L300 45 L330 45 L330 85 L360 85 L360 65 L400 65 L400 120 Z"
          stroke="#00483F"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      {/* Professional figures */}
      <div className="absolute inset-0 flex items-end justify-center gap-4 pb-8">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-b from-primary/30 to-primary/10" />
          <div className="mt-2 h-20 w-24 rounded-t-2xl bg-gradient-to-b from-primary/40 to-primary/20" />
        </div>
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-b from-accent/30 to-accent/10" />
          <div className="mt-2 h-20 w-24 rounded-t-2xl bg-gradient-to-b from-accent/30 to-accent/15" />
        </div>
      </div>
      {/* Tablet */}
      <div className="absolute bottom-16 left-1/2 h-8 w-14 -translate-x-1/2 rounded-md border-2 border-primary/30 bg-white/60 shadow-soft" />
      {/* Decorative curves */}
      <div className="absolute -right-8 top-8 h-32 w-32 rounded-full border-2 border-accent/20" />
      <div className="absolute -left-4 bottom-20 h-24 w-24 rounded-full border-2 border-primary/15" />
    </div>
  );
}

function PerformanceFeaturedPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-mint via-white to-mint-soft">
      <svg
        className="absolute -left-8 top-4 h-40 w-40 text-accent/20"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg
        className="absolute -right-6 bottom-6 h-32 w-32 text-primary/15"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10 90 Q50 10 90 90"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 flex items-end justify-center gap-6 pb-10">
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-gradient-to-b from-slate-300 to-slate-200" />
          <div className="mt-2 h-24 w-20 rounded-t-2xl bg-gradient-to-b from-slate-600/80 to-slate-500/60" />
        </div>
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-gradient-to-b from-amber-200 to-amber-100" />
          <div className="mt-2 h-24 w-20 rounded-t-2xl bg-gradient-to-b from-amber-700/70 to-amber-600/50" />
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 h-10 w-16 -translate-x-1/2 rounded-md border border-border bg-white/70 shadow-soft" />
    </div>
  );
}

function PlantPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-mint">
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-6 w-6 rounded-full bg-gradient-to-t from-amber-400 to-amber-200"
            style={{ marginTop: `${Math.sin(i) * 4}px` }}
          />
        ))}
      </div>
      <div className="absolute bottom-16 left-1/2 h-16 w-3 -translate-x-1/2 rounded-full bg-green-600" />
      <div className="absolute left-1/2 top-8 h-12 w-20 -translate-x-1/2 rounded-full bg-green-500/60" />
    </div>
  );
}

function ChartPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-mint">
      <svg className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]" viewBox="0 0 200 120">
        <polyline
          points="10,100 40,70 70,80 100,40 130,50 160,20 190,30"
          fill="none"
          stroke="#00483F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="160" cy="20" r="4" fill="#D96500" />
      </svg>
    </div>
  );
}

function HousePlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-mint">
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-0 w-0 border-b-[40px] border-l-[50px] border-r-[50px] border-b-primary/40 border-l-transparent border-r-transparent" />
        <div className="h-16 w-24 rounded-b-lg bg-primary/30" />
      </div>
      <div className="absolute bottom-10 right-8 h-8 w-12 rounded bg-white/80 shadow-soft" />
    </div>
  );
}

function FxPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-mint">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-primary/30">FX</div>
      </div>
      <svg className="absolute bottom-4 left-4 right-4 h-16 opacity-40" viewBox="0 0 200 60">
        <path d="M0 50 Q50 10 100 40 T200 20" fill="none" stroke="#D96500" strokeWidth="2" />
      </svg>
    </div>
  );
}

function IncomePlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-mint">
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        {[40, 60, 50, 70, 55].map((h, i) => (
          <div
            key={i}
            className="w-6 rounded-t bg-primary/40"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function GrowthPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-mint">
      <svg className="absolute inset-4" viewBox="0 0 200 120">
        <polyline
          points="10,100 50,60 90,70 130,30 170,40"
          fill="none"
          stroke="#00483F"
          strokeWidth="3"
        />
        <text x="130" y="25" fill="#D96500" fontSize="14" fontWeight="bold">
          ↑ 12%
        </text>
      </svg>
    </div>
  );
}

function DataDrivenPlaceholder() {
  return (
    <div className="absolute inset-0 bg-mint">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="h-32 w-32 rounded-full border-[12px] border-primary/20" />
          <div
            className="absolute inset-0 h-32 w-32 rounded-full border-[12px] border-transparent border-t-accent border-r-primary"
            style={{ transform: "rotate(-45deg)" }}
          />
          <div className="absolute -right-8 top-4 flex flex-col gap-1">
            {[60, 40, 80, 50].map((h, i) => (
              <div key={i} className="h-2 rounded bg-primary/30" style={{ width: `${h}px` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 h-20 w-16 -translate-x-1/2 rounded-t-3xl bg-gradient-to-b from-primary/25 to-primary/10" />
    </div>
  );
}

function InstitutionalPlaceholder() {
  return (
    <div className="absolute inset-0 bg-mint">
      <div className="absolute inset-4 flex flex-wrap gap-2 content-start">
        {["#D96500", "#00483F", "#E46D19", "#003F38", "#D96500", "#00483F"].map(
          (color, i) => (
            <div
              key={i}
              className="h-12 w-12 rounded-lg opacity-60"
              style={{ backgroundColor: color, transform: `rotate(${i * 5}deg)` }}
            />
          )
        )}
      </div>
      <div className="absolute bottom-6 left-1/2 h-24 w-20 -translate-x-1/2 rounded-t-3xl bg-gradient-to-b from-primary/20 to-transparent" />
    </div>
  );
}

function SecurePlaceholder() {
  return (
    <div className="absolute inset-0 bg-mint">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 120" className="h-40 w-32 opacity-30">
          <path
            d="M50 10 L85 25 L85 60 C85 85 50 110 50 110 C50 110 15 85 15 60 L15 25 Z"
            fill="none"
            stroke="#00483F"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        <div className="h-16 w-14 rounded-t-2xl bg-primary/20" />
        <div className="h-16 w-14 rounded-t-2xl bg-primary/15" />
      </div>
    </div>
  );
}

function NewsletterPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-mint to-mint-soft">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="h-24 w-32 rounded-lg bg-white shadow-card" />
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-lg bg-accent/20" />
          <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-full bg-primary/20" />
        </div>
      </div>
    </div>
  );
}

function GenericPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-mint to-mint-soft">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10" />
      </div>
    </div>
  );
}
