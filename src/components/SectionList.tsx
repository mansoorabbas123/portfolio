import classNames from "classnames";

export const SectionList = ({
  activeSection,
}: {
  activeSection: string | undefined;
}) => {
  return (
    <ul className="text-xs font-bold text-slate-gray uppercase w-max">
      <li className="mb-2 ">
        <a href="#" className="group flex items-center gap-4 py-2">
          <span
            className={classNames(
              `group-hover:w-16  h-[1px] transition-all duration-300 group-hover:bg-white bg-flord`,
              {
                "w-16 bg-mystic": activeSection === "SUMMARY",
                "w-8": activeSection !== "SUMMARY",
              }
            )}
          />
          <span
            className={classNames("group-hover:text-white transition-all", {
              "text-mystic": activeSection === "SUMMARY",
            })}
          >
            about
          </span>
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="group flex items-center gap-4 py-2">
          <span
            className={classNames(
              `group-hover:w-16  h-[1px] transition-all duration-300 group-hover:bg-white bg-flord`,
              {
                "w-16 bg-mystic": activeSection === "EXPERIENCE",
                "w-8": activeSection !== "EXPERIENCE",
              }
            )}
          />
          <span
            className={classNames("group-hover:text-white transition-all", {
              "text-mystic": activeSection === "EXPERIENCE",
            })}
          >
            Experience
          </span>
        </a>
      </li>
      <li className="mb-2 ">
        <a href="#PROJECTS" className="group flex items-center gap-4 py-2">
          <span
            className={classNames(
              `group-hover:w-16  8 h-[1px] transition-all duration-300 group-hover:bg-white bg-flord`,
              {
                "w-16 bg-mystic": activeSection === "PROJECTS",
                "w-8": activeSection !== "PROJECTS",
              }
            )}
          />
          <span
            className={classNames("group-hover:text-white transition-all", {
              "text-mystic": activeSection === "PROJECTS",
            })}
          >
            projects
          </span>
        </a>
      </li>
    </ul>
  );
};
