import cn from "classnames";
import type { ComponentProps } from "react";

export function SectionTitle({
  className,
  children,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2 {...props} className={cn("font-cursive mb-3 text-5xl", className)}>
      {children}
    </h2>
  );
}
