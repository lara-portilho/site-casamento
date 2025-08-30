import cn from "classnames";
import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      className={cn(
        "relative h-screen w-screen bg-cover bg-center font-serif",
        width > height + 50
          ? "bg-[url(./assets/bg-web.jpg)]"
          : "bg-[url(./assets/bg-mobile.jpg)]",
      )}
    >
      <div className="absolute h-full w-full bg-black/50" />
      <div className="absolute flex h-full w-full flex-col items-center justify-center text-white">
        <h1 className="font-cursive text-6xl">Lara & Heitor</h1>
        <p className="text-3xl">Em progresso</p>
      </div>
    </div>
  );
}
