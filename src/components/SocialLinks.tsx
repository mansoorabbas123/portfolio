'use client'
import { socialLinks } from "@/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const SocialLinks = () => {
  const router = useRouter();
  return (
    <ul className="flex items-center gap-5  ">
      {socialLinks.map((el) => (
        <li key={el.id} className="hover:text-teal-300">
          <Link href={el.link}>{el.icon}</Link>
        </li>
      ))}
    </ul>
  );
};
