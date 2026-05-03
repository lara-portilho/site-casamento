import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import { useState } from "react";
import { BuscaForm } from "./BuscaForm";
import { ConfirmacaoForm } from "./ConfirmacaoForm";

export type GrupoConvidado = {
  id: string;
  tagConvite: string;
  inicioTelefone: string;
  escrito: boolean;
  searchTerms: string[];
  convidados: {
    nome: string;
    confirmado: boolean;
  }[];
};

export function ConfirmacaoPresenca() {
  const [grupos, setGrupos] = useState<GrupoConvidado[]>([]);

  return (
    <Section id="confirmacao-presenca">
      <SectionTitle>Confirmação de Presença</SectionTitle>
      <BuscaForm setGrupos={setGrupos} />
      {!!grupos.length && <ConfirmacaoForm grupos={grupos} />}
    </Section>
  );
}
