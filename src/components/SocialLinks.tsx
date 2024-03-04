import { socialLinks } from "@/data";

export const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-5 text-gull-gray">
      {socialLinks.map((el) => (
        <>
          <li key={el.id}>
            <a href="#">{el.icon}</a>
          </li>
        </>
      ))}
    </ul>
  );
};
