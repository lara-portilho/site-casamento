import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";

export function DressCode() {
  return (
    <Section id="dress-code">
      <SectionTitle>Dress Code</SectionTitle>
      <p>
        O traje solicitado é <b>Esporte Fino</b>.
      </p>
      <p className="mt-5 font-bold text-red-500">Atenção mulheres:</p>
      <p>
        A cerimônia acontecerá em um gramado, para o seu conforto{" "}
        <b>evite utilizar saltos finos</b>!
      </p>
    </Section>
  );
}
