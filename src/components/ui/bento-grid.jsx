import { cn } from "../../lib/utils";
import TiltCard from "./TiltCard";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[21rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}) => {
  return (
    <TiltCard
      className={cn(
        "row-span-1 p-6 flex flex-col justify-between group/bento",
        className
      )}
    >
      <div className="w-full h-32 relative overflow-hidden rounded-xl border border-white/[0.04] bg-black/30 flex items-center justify-center">
        {header}
      </div>
      <div className="transform-gpu group-hover/bento:translate-y-[-4px] transition-all duration-500">
        <div className="font-sans font-bold text-white text-lg mb-1 leading-snug">
          {title}
        </div>
        <div className="font-sans font-normal text-text-secondary text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </TiltCard>
  );
};
