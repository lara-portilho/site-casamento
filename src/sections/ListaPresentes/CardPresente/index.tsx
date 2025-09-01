import { Button } from "@components/Button";
import type { Presente } from "../lista";
import { generatePix } from "@utils/generatePix";
import { toast } from "react-toastify";
import { useState } from "react";

export function CardPresente(presente: Presente) {
  const [img, setImg] = useState("");
  const [code, setCode] = useState("");

  async function getPix() {
    try {
      const { pixCode, qrCode } = await generatePix(
        presente.value,
        presente.name,
      );
      setImg(qrCode);
      setCode(pixCode);
    } catch (err) {
      toast.error(
        "Houve algum problema ao gerar o PIX! Entre em contato com a Lara!",
      );
      console.log(err);
    }
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Copiado para a área de trasnferência!");
    } catch (err) {
      toast.error(
        "Houve algum problema ao copiar o PIX! Entre em contato com a Lara!",
      );
      console.log(err);
    }
  }

  return (
    <div className="flex h-72 w-52 shrink-0 flex-col items-center justify-center rounded-lg shadow-lg">
      <img src={!img ? presente.image : img} className="size-44 rounded-md" />
      <span>{presente.name}</span>
      <span>R$ {presente.value.toFixed(2).replace(".", ",")}</span>
      {!code ? (
        <Button onClick={getPix}>Comprar com PIX</Button>
      ) : (
        <Button onClick={copyToClipboard}>Copiar código</Button>
      )}
    </div>
  );
}
