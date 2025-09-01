import cn from "classnames";
import type { ComponentProps } from "react";

export function Button({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "bg-blush text-midnight hover:bg-blush/80 cursor-pointer rounded-md px-2 py-1 font-bold transition disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500",
        className,
      )}
    >
      {children}
    </button>
  );
}
