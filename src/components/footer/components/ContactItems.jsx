import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { TbBuildingCommunity } from "react-icons/tb";

export const ContactItems = [
  {
    label: "Belinsky.studio",
    icon: <AiOutlineInstagram />,
    href: "https://www.instagram.com/belinsky.studio/",
  },
  {
    label: "Belinsky.id",
    icon: <TbBrandTiktok />,
    href: "https://www.tiktok.com/@belinsky.id",
  },
  {
    label: "+62 858-1055-9415",
    icon: <AiOutlineWhatsApp />,
    href: "https://wa.me/6285810559415",
  },
  {
    label:
      "Jl. Kemang Utara No. 15, Bangka, Kec. Mampang Prpt., Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730",
    icon: <TbBuildingCommunity />,
    href: "/",
  },
];
