import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import { useMemo, useState } from "react";
import camicado from "../../assets/presentes/camicado.svg";
import magalu from "../../assets/presentes/magalu.png";
import { CardPresente } from "./CardPresente";
import { presentes } from "./lista";

type SortType = "asc" | "desc";

export function ListaPresentes() {
  const [sort, setSort] = useState<SortType>("asc");
  const sortedPresentes = useMemo(() => {
    return [...presentes].sort((a, b) =>
      sort === "asc" ? a.value - b.value : b.value - a.value,
    );
  }, [sort]);

  return (
    <Section id="lista-presentes">
      <SectionTitle>Lista de Presentes</SectionTitle>
      <p>
        A sua presença é nosso maior presente! Mas caso queira nos presentear,
        temos aqui algumas sugestões:
      </p>

      <div className="text-midnight mt-2 flex items-center justify-center gap-2">
        Ordenar por:
        <select
          onChange={(e) => setSort(e.currentTarget.value as SortType)}
          className="border-midnight shrink-0 border-b px-1 py-1 font-bold outline-none"
        >
          <option value="asc">Mais baratos primeiro</option>
          <option value="desc">Mais caros primeiro</option>
        </select>
      </div>
      <div className="mb-5 flex gap-5 overflow-auto px-2 py-4">
        {sortedPresentes.map((presente) => (
          <CardPresente {...presente} key={presente.id} />
        ))}
      </div>
      <p>Se preferir, também temos listas de presente nas seguintes lojas:</p>
      <div className="mt-5 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-10">
        <a
          className="w-48"
          href="https://www.finalfeliz.de/laraeheitor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={magalu} alt="Magalu" className="size-full" />
        </a>
        <a
          className="w-48"
          href="https://lista.camicado.com.br/laraeheitor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={camicado} alt="Camicado" className="size-full" />
        </a>
      </div>
    </Section>
  );
}
