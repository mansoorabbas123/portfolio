import { socialLinks } from "@/data";

export const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-5  ">
      {socialLinks.map((el) => (
        <li key={el.id} className="hover:text-teal-300">
          <a href="#">{el.icon}</a>
        </li>
      ))}
    </ul>
  );
};
