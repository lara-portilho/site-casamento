import { Button } from "@components/Button";
import { generatePix } from "@utils/generatePix";
import cn from "classnames";
import { useState } from "react";
import { toast } from "react-toastify";
import type { Presente } from "../lista";

export function CardPresente(presente: Presente) {
  const [qrCode, setQrCode] = useState("");
  const [pixCode, setPixCode] = useState("");

  async function getPix() {
    try {
      const { pixCode, qrCode } = await generatePix(
        presente.value,
        presente.name,
      );
      setQrCode(qrCode);
      setPixCode(pixCode);
    } catch (err) {
      toast.error(
        "Houve algum problema ao gerar o PIX! Entre em contato com a Lara!",
      );
      console.log(err);
    }
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(pixCode);
      toast.success("Copiado para a área de trasnferência!");
    } catch (err) {
      toast.error(
        "Houve algum problema ao copiar o PIX! Entre em contato com a Lara!",
      );
      console.log(err);
    }
  }

  return (
    <div className="flex h-72 w-52 shrink-0 flex-col items-center justify-center rounded-lg bg-white shadow-lg">
      <div className="perspective relative size-44">
        <div
          className={cn(
            "transform-style-preserve-3d size-full transition-transform duration-700",
            qrCode && "-rotate-y-180",
          )}
        >
          <div className="absolute size-full backface-hidden">
            <img
              src={presente.image}
              alt={presente.name}
              className="size-full rounded-lg"
            />
          </div>
          <div className="absolute size-full -rotate-y-180 backface-hidden">
            <img
              src={qrCode || undefined}
              alt="PIX"
              className="size-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <span>{presente.name}</span>
      <span>R$ {presente.value.toFixed(2).replace(".", ",")}</span>
      {!pixCode ? (
        <Button onClick={getPix}>Comprar com PIX</Button>
      ) : (
        <Button onClick={copyToClipboard} variant="outline">
          Copiar código
        </Button>
      )}
    </div>
  );
}
