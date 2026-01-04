import cn from "classnames";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "solid" | "outline" | "blue";
  size?: "md" | "lg";
};

export function Button({
  className,
  children,
  variant = "solid",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "cursor-pointer rounded-md font-bold transition disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500",
        className,
        {
          "bg-midnight hover:bg-midnight/80 m-[2px] text-white":
            variant === "blue",
          "bg-blush hover:bg-blush/80 text-midnight m-[2px]":
            variant === "solid",
          "border-blush hover:bg-blush/20 text-midnight border-2":
            variant === "outline",
          "px-2 py-1": size === "md",
          "px-3 py-2 text-xl": size === "lg",
        },
      )}
    >
      {children}
    </button>
  );
}
