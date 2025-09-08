import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";

export function Agradecimentos() {
  return (
    <Section id="agradecimentos" className="-mt-15">
      <SectionTitle>Agradecimentos</SectionTitle>
      <div className="mx-auto flex flex-col gap-5 md:max-w-8/10">
        <b>Queridos familiares e amigos,</b>
        <p>
          Gostaríamos de agradecer cada um de vocês por estarem presentes em
          cada etapa do nosso relacionamento, e convidá-los para testemunhar a
          nossa próxima fase: <b>Nosso casamento!</b>
        </p>
        <p>
          Criamos esse site para reunir informações como a localização, dress
          code e lista de presentes.
        </p>
        <b>Não se esqueça de confirmar a presença!</b>
        <p className="flex flex-col">
          <span>Com carinho,</span>
          <b>Lara e Heitor.</b>
        </p>
      </div>
    </Section>
  );
}
