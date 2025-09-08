import { FaAngleDoubleDown } from "react-icons/fa";
import { Countdown } from "./Countdown";

export function Home() {
  return (
    <section className="text-off relative flex h-screen w-screen max-w-full flex-col items-center justify-center select-none">
      <h1 className="font-cursive mt-20 text-6xl md:text-8xl">Lara & Heitor</h1>
      <p className="mb-5 text-3xl">19 de setembro de 2026</p>
      <Countdown />
      <a href="#agradecimentos" className="mt-5">
        <FaAngleDoubleDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
