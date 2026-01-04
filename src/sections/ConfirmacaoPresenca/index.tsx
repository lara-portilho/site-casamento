import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";

export function ConfirmacaoPresenca() {
  return (
    <Section id="confirmacao-presenca">
      <SectionTitle>Confirmação de Presença</SectionTitle>
      <p>Em breve você poderá confirmar a presença aqui!</p>
      {/* <p className="mt-5">
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-midnight underline"
        >
          Clique aqui
        </a>{" "}
        para confirmar sua presença!
      </p> */}
    </Section>
  );
}
