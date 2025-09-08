import { createStaticPix } from "pix-utils";

export async function generatePix(amount: number, description: string) {
  const pix = createStaticPix({
    merchantName: import.meta.env.VITE_PIX_MERCHANTNAME,
    merchantCity: import.meta.env.VITE_PIX_MERCHANTCITY,
    pixKey: import.meta.env.VITE_PIX_PIXKEY,
    transactionAmount: amount,
    infoAdicional: description,
  }).throwIfError();

  const pixCode = pix.toBRCode();
  const qrCode = await pix.toImage();

  return { pixCode, qrCode };
}
