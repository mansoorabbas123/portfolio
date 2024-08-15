import { v4 as uuid } from "uuid";
import { IGithub, ILinkedin, IInstagram, IWhatsapp } from "@/assets/icons";
import { ISocialLink } from "@/interfaces";

export const socialLinks: ISocialLink[] = [
  {
    id: uuid(),
    icon: <IGithub />,
    link: "https://github.com/mansoorabbas123",
  },
  {
    id: uuid(),
    icon: <ILinkedin />,
    link: "https://www.linkedin.com/in/mansoor-abbas-45663b187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: uuid(),
    icon: <IWhatsapp />,
    link: "https://wa.me/+923464902256",
  },
];
