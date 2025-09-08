import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { FaCheck, FaGift, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

const links = [
  {
    href: "#agradecimentos",
    label: "Agradecimentos",
    icon: <FaHeart className="size-4" />,
  },
  {
    href: "#localizacao",
    label: "Localização",
    icon: <FaMapMarkerAlt className="size-4" />,
  },
  {
    href: "#dress-code",
    label: "Dress Code",
    icon: <GiClothes className="size-4" />,
  },
  {
    href: "#confirmacao-presenca",
    label: "Confirmação de Presença",
    icon: <FaCheck className="size-4" />,
  },
  {
    href: "#lista-presentes",
    label: "Lista de Presentes",
    icon: <FaGift className="size-4" />,
  },
];

export function Header() {
  const { height, width } = useWindowDimensions();
  const isHorizontal = width > height;

  return (
    <div className="sticky top-0 z-[9999] flex w-full justify-center gap-10 py-5 backdrop-blur-lg *:cursor-pointer">
      {links.map((link) => (
        <a href={link.href} key={link.href} className="text-midnight">
          {isHorizontal ? link.label : link.icon}
        </a>
      ))}
    </div>
  );
}
