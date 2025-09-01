import { presentes } from "./lista";
import { CardPresente } from "./CardPresente";
import { SectionTitle } from "@components/SectionTitle";

export function ListaPresentes() {
  return (
    <section id="lista-presentes" className="h-screen text-center">
      <SectionTitle>Lista de Presentes</SectionTitle>
      <p>
        A sua presença é nosso maior presente! Mas caso queira nos presentear,
        temos aqui algumas sugestões!
      </p>
      <div className="mb-1 flex gap-5 overflow-auto px-2 py-4">
        {presentes.map((presente, i) => (
          <CardPresente {...presente} key={i} />
        ))}
      </div>
      <p>Se preferir, também temos listas de presente nas seguintes lojas:</p>
    </section>
  );
}
