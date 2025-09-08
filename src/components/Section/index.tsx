import { SectionDivider } from "@components/SectionDivider";
import cn from "classnames";
import type { ComponentProps } from "react";

export function Section({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn("px-8 pt-18 pb-8 text-center", className)}
    >
      <SectionDivider />
      {children}
    </section>
  );
}
