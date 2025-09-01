import cn from "classnames";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { Countdown } from "./Countdown";

export function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <section
      className={cn(
        "relative h-screen w-screen max-w-full bg-cover bg-fixed bg-center text-center",
        width > height + 50
          ? "bg-[url(./assets/bg-web.jpg)]"
          : "bg-[url(./assets/bg-mobile.jpg)]",
      )}
    >
      <div className="absolute h-full w-full bg-black/50" />
      <div className="absolute flex h-full w-full flex-col items-center justify-center text-white">
        <h1 className="font-cursive text-6xl">Lara & Heitor</h1>
        <p className="mb-5 text-3xl">19 de setembro de 2026</p>
        <Countdown />
      </div>
    </section>
  );
}
