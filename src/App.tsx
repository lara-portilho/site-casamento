import { ConfirmacaoPresenca } from "@sections/ConfirmacaoPresenca";
import { DressCode } from "@sections/DressCode";
import { Home } from "@sections/Home";
import { ListaPresentes } from "@sections/ListaPresentes";
import { Localizacao } from "@sections/Localizacao";
import { Sobre } from "@sections/Sobre";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <div className="bg-blush/10">
      <Home />
      <div className="mx-auto flex max-w-[1200px] flex-col gap-20 bg-white px-8 py-4 shadow-2xl">
        <Sobre />
        <Localizacao />
        <ConfirmacaoPresenca />
        <DressCode />
        <ListaPresentes />
      </div>
      <ToastContainer />
    </div>
  );
}
