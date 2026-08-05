import { cn } from "@/utils/cn";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="mb-3 inline-flex rounded-full bg-[#E8F5E9] px-4 py-2 text-sm font-semibold text-[#234D20]">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}