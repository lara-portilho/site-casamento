import type { CategoryType } from ".";
import alexa from "../../assets/presentes/alexa.jpg";
import aluguel from "../../assets/presentes/aluguel.jpg";
import aulaForro from "../../assets/presentes/aula-forro.jpg";
import aviao from "../../assets/presentes/aviao.jpg";
import barco from "../../assets/presentes/barco.jpg";
import bebe from "../../assets/presentes/bebe.jpeg";
import bmw from "../../assets/presentes/bmw.jpg";
import cafe from "../../assets/presentes/cafe.jpg";
import cinquenta from "../../assets/presentes/cinquenta.jpg";
import cursoConfeiteira from "../../assets/presentes/curso-confeiteira.jpg";
import cursoCulinaria from "../../assets/presentes/curso-culinaria.jpg";
import despertador from "../../assets/presentes/despertador.gif";
import espumante from "../../assets/presentes/espumante.jpg";
import jantarRomantico from "../../assets/presentes/jantar-romantico.jpg";
import jogos from "../../assets/presentes/jogos.jpg";
import primeiroJantar from "../../assets/presentes/primeiro-jantar.jpg";
import quarto from "../../assets/presentes/quarto.jpg";
import rica from "../../assets/presentes/rica.jpg";
import spa from "../../assets/presentes/spa.jpg";
import stonks from "../../assets/presentes/stonks.jpg";
import streaming from "../../assets/presentes/streaming.jpg";

export type Presente = {
  id: string;
  name: string;
  value: number;
  image: string;
  category: CategoryType;
};

export const presentes: Presente[] = [
  {
    id: "1M",
    name: "Primeiro jantar",
    value: 80,
    image: primeiroJantar,
    category: "meme",
  },
  {
    id: "2M",
    name: "Aulas de forró para os noivos",
    value: 100,
    image: aulaForro,
    category: "meme",
  },
  {
    id: "3M",
    name: "Curso de chef para o noivo",
    value: 180,
    image: cursoCulinaria,
    category: "meme",
  },
  {
    id: "4M",
    name: "Só pra não dizer que não dei nada",
    value: 50,
    image: cinquenta,
    category: "meme",
  },
  {
    id: "5M",
    name: "14 meses de aluguel",
    value: 900,
    image: aluguel,
    category: "meme",
  },
  {
    id: "6M",
    name: "Curso de confeiteira para a noiva",
    value: 180,
    image: cursoConfeiteira,
    category: "meme",
  },
  {
    id: "7M",
    name: "Ajuda na fatura do cartão",
    value: 500,
    image: stonks,
    category: "meme",
  },
  {
    id: "8M",
    name: "A cara da riqueza",
    value: 2000,
    image: rica,
    category: "meme",
  },
  {
    id: "9M",
    name: "Alexa para a noiva ter mais alguém para mandar",
    value: 400,
    image: alexa,
    category: "meme",
  },
  {
    id: "10M",
    name: "Relógio para o noivo parar de ser atrasado",
    value: 120,
    image: despertador,
    category: "meme",
  },
  {
    id: "11M",
    name: "1kg de café para a alegria do noivo",
    value: 90,
    image: cafe,
    category: "meme",
  },
  {
    id: "12M",
    name: "12 meses de streaming",
    value: 250,
    image: streaming,
    category: "meme",
  },
  {
    id: "13M",
    name: "Ajuda no carro da Lua de Mel",
    value: 700,
    image: bmw,
    category: "meme",
  },
  {
    id: "14M",
    name: "Bebê Reborn para treinamento do casal",
    value: 1500,
    image: bebe,
    category: "meme",
  },
  {
    id: "15M",
    name: "Joguinhos dahora",
    value: 150,
    image: jogos,
    category: "meme",
  },
  {
    id: "1L",
    name: "Ajuda nas passagens",
    value: 400,
    image: aviao,
    category: "luaMel",
  },
  {
    id: "2L",
    name: "Jantar romântico",
    value: 350,
    image: jantarRomantico,
    category: "luaMel",
  },
  {
    id: "3L",
    name: "Upgrade de quarto",
    value: 550,
    image: quarto,
    category: "luaMel",
  },
  {
    id: "4L",
    name: "Pacote massagem",
    value: 250,
    image: spa,
    category: "luaMel",
  },
  {
    id: "5L",
    name: "Passeio de barco",
    value: 300,
    image: barco,
    category: "luaMel",
  },
  {
    id: "6L",
    name: "Garrafa de espumante",
    value: 150,
    image: espumante,
    category: "luaMel",
  },
];
