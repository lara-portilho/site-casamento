import alexa from "../../assets/presentes/alexa.jpg";
import aluguel from "../../assets/presentes/aluguel.jpg";
import aulaForro from "../../assets/presentes/aula-forro.jpg";
import cinquenta from "../../assets/presentes/cinquenta.jpg";
import cursoConfeiteira from "../../assets/presentes/curso-confeiteira.jpg";
import cursoCulinaria from "../../assets/presentes/curso-culinaria.jpg";
import jantarRomantico from "../../assets/presentes/jantar-romantico.jpg";
import luaMel from "../../assets/presentes/lua-mel.jpg";
import primeiroJantar from "../../assets/presentes/primeiro-jantar.jpg";
import rica from "../../assets/presentes/rica.jpg";
import stonks from "../../assets/presentes/stonks.jpg";

export type Presente = {
  id: string;
  name: string;
  value: number;
  image: string;
};

export const presentes: Presente[] = [
  {
    id: "1",
    name: "Ajude a nossa Lua de Mel",
    value: 200,
    image: luaMel,
  },
  {
    id: "2",
    name: "Primeiro jantar",
    value: 80,
    image: primeiroJantar,
  },
  {
    id: "3",
    name: "Aulas de forró para os noivos",
    value: 100,
    image: aulaForro,
  },
  {
    id: "4",
    name: "Curso de chef para o noivo",
    value: 150,
    image: cursoCulinaria,
  },
  {
    id: "5",
    name: "Só pra não dizer que não dei nada",
    value: 50,
    image: cinquenta,
  },
  {
    id: "6",
    name: "14 meses de aluguel",
    value: 600,
    image: aluguel,
  },
  {
    id: "7",
    name: "Curso de confeiteira para a noiva",
    value: 150,
    image: cursoConfeiteira,
  },
  {
    id: "8",
    name: "Ajuda na fatura do cartão",
    value: 500,
    image: stonks,
  },
  {
    id: "9",
    name: "A cara da riqueza",
    value: 1000,
    image: rica,
  },
  {
    id: "10",
    name: "Jantar romantico dos noivos",
    value: 300,
    image: jantarRomantico,
  },
  {
    id: "11",
    name: "Alexa para a noiva ter mais alguém para mandar",
    value: 400,
    image: alexa,
  },
];
