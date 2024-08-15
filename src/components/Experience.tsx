import React from "react";
import { Tag } from ".";
import { IArrowUp } from "@/assets/icons";
import { IExperience } from "@/interfaces";
import Link from "next/link";

type Props = { data: IExperience };

export const Experience = ({ data }: Props) => {
  return (
    <Link
      href="#"
      className="Experience-container group flex flex-col md:flex-row gap-1 lg:gap-4 mb-8 lg:mb-14 px-6 py-4 transition-all rounded-lg hover:dark:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
    >
      <div className="w-[110px] ">
        <span className="text-xs dark:text-slate-500 text-slate-900">
          {data.joinDate}-{data.endDate || "PRESENT"}
        </span>
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <h4 className="dark:group-hover:text-teal-300 group-hover:text-teal-300  dark:text-white font-bold transition-all flex items-center gap-1 mb-4">
            <span>
              {data.role} · {data.company}
            </span>
            <span
              className="rotate-45
                  transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
            >
              <IArrowUp width={16} height={16} />
            </span>
          </h4>
          {/* <h6 className="text-slate-gray font-medium">Senior Engineer</h6> */}
        </div>

        <ul className="  mb-6 list-disc text-sm ">
          {data.tasks.map((el) => (
            <li key={el.id}>{el.text}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {data.tags.map((el, i) => (
            <Tag key={i} text={el.text} />
          ))}
        </div>
      </div>
    </Link>
  );
};
