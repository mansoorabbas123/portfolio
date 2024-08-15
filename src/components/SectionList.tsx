import classNames from "classnames";
import Link from "next/link";

export const SectionList = ({
  activeSection,
}: {
  activeSection: string | undefined;
}) => {
  return (
    <ul className="hidden lg:block text-xs font-bold text-slate-gray uppercase w-max">
      <li className="mb-2 ">
        <Link href="#" className="group flex items-center gap-4 py-2">
          <span
            className={classNames(
              `group-hover:w-16  h-[1px] transition-all duration-300 group-hover:bg-white bg-flord`,
              {
                "w-16 dark:bg-slate-200 bg-gray-900":
                  activeSection === "SUMMARY",
                "w-8": activeSection !== "SUMMARY",
              }
            )}
          />
          <span
            className={classNames("group-hover:text-white  transition-all", {
              " dark:text-slate-200 text-gray-900 ":
                activeSection === "SUMMARY",
            })}
          >
            about
          </span>
        </Link>
      </li>
      <li className="mb-2">
        <Link href="#EXPERIENCE" className="group flex items-center gap-4 py-2">
          <span
            className={classNames(
              `group-hover:w-16  h-[1px] transition-all duration-300 group-hover:bg-white bg-flord`,
              {
                "w-16 dark:bg-slate-200 bg-gray-900":
                  activeSection === "EXPERIENCE",
                "w-8": activeSection !== "EXPERIENCE",
              }
            )}
          />
          <span
            className={classNames("group-hover:text-white transition-all", {
              "dark:text-slate-200 text-gray-900":
                activeSection === "EXPERIENCE",
            })}
          >
            Experience
          </span>
        </Link>
      </li>
      <li className="mb-2 ">
        <Link href="#PROJECTS" className="group flex items-center gap-4 py-2">
          <span
            className={classNames(
              `group-hover:w-16  8 h-[1px] transition-all duration-300 group-hover:bg-white bg-flord`,
              {
                "w-16 dark:bg-slate-200 bg-gray-900":
                  activeSection === "PROJECTS",
                "w-8": activeSection !== "PROJECTS",
              }
            )}
          />
          <span
            className={classNames("group-hover:text-white transition-all", {
              "dark:text-slate-200 text-gray-900": activeSection === "PROJECTS",
            })}
          >
            projects
          </span>
        </Link>
      </li>
    </ul>
  );
};
