import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
export const ContactItems = [
  {
    p: "+62 858-1055-9415",
    icon: <AiOutlineWhatsApp size={25} />,
    href: "https://wa.me/6285810559415",
  },
  {
    p: "partnership@belinsky.studio",
    icon: <HiOutlineMail size={25} />,
    href: "mailto:partnership@belinsky.studio",
  },
  {
    p: "belinsky.studio",
    icon: <AiOutlineInstagram size={25} />,
    href: "https://www.instagram.com/belinsky.studio/",
  },
  {
    p: "belinsky.id",
    icon: <TbBrandTiktok size={25} />,
    href: "https://www.tiktok.com/@belinsky.id",
  },
];
