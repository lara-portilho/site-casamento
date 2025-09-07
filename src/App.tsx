import { Divider } from "@components/Divider";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { Agradecimentos } from "@sections/Agradecimentos";
import { ConfirmacaoPresenca } from "@sections/ConfirmacaoPresenca";
import { DressCode } from "@sections/DressCode";
import { Home } from "@sections/Home";
import { ListaPresentes } from "@sections/ListaPresentes";
import { Localizacao } from "@sections/Localizacao";
import cn from "classnames";
import { ToastContainer } from "react-toastify";

export function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      className={cn(
        "relative bg-cover bg-fixed bg-center",
        width > height + 50
          ? "bg-[url(./assets/bg-web.jpg)]"
          : "bg-[url(./assets/bg-mobile.jpg)]",
      )}
    >
      <div className="fixed size-full bg-black/40" />
      <Home />
      <div className="relative mx-auto max-w-[1200px] shadow-2xl">
        <Divider />
        <div className="bg-off flex flex-col px-8 py-4">
          <Header />
          <Agradecimentos />
          <Localizacao />
          <DressCode />
          <ConfirmacaoPresenca />
          <ListaPresentes />
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
