import { differenceInMilliseconds } from "date-fns";
import { useEffect, useState } from "react";

const dataCasamento = new Date("2026-09-19T16:00:00");

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = differenceInMilliseconds(dataCasamento, new Date());
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    if (ms <= 0) return "Chegou a hora!";

    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return `${days} dias, ${hours} horas ${minutes} minutos, ${seconds} segundos`;
  };

  return <p className="text-xl">{formatTime(timeLeft)}</p>;
}
