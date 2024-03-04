import { v4 as uuid } from "uuid";
import { IGithub, ILinkedin, IInstagram } from "@/assets/icons";

export const socialLinks = [
  {
    id: uuid(),
    icon: <IGithub />,
    link: "www.github.com",
  },
  {
    id: uuid(),
    icon: <ILinkedin />,
    link: "www.github.com",
  },
  {
    id: uuid(),
    icon: <IInstagram />,
    link: "www.github.com",
  },
];
