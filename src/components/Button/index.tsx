import cn from "classnames";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "solid" | "outline";
};

export function Button({
  className,
  children,
  variant = "solid",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "text-midnight cursor-pointer rounded-md px-2 py-1 font-bold transition disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500",
        variant === "solid"
          ? "bg-blush hover:bg-blush/80 m-[2px]"
          : "border-blush hover:bg-blush/20 border-2",
        className,
      )}
    >
      {children}
    </button>
  );
}
