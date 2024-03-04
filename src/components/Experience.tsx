import React from "react";
import { Tag } from ".";
import { IArrowUp } from "@/assets/icons";

export const Experience = () => {
  return (
    <a
      href="#"
      className="Experience-container group flex mb-14 px-6 py-4 transition-all rounded-lg hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
    >
      <div className="w-28 ">
        <span className="text-xs text-slate-gray"> 2018-PRESENT</span>
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <h4 className="group-hover:text-turquoise-blue transition-all flex items-center gap-1">
            <span> Lead Engineer · Upstatement </span>
            <span
              className="rotate-45
                  transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
            >
              <IArrowUp width={16} height={16} />
            </span>
          </h4>
          <h6 className="text-slate-gray font-medium">Senior Engineer</h6>
        </div>

        <p className="text-slate-gray mb-6 ">
          Build, style, and ship high-quality websites, design systems, mobile
          apps, and digital experiences for a diverse array of projects for
          clients including Harvard Business School, Everytown for Gun Safety,
          Pratt Institute, Koala Health, Vanderbilt University, The 19th News,
          and more. Provide leadership within engineering department through
          close collaboration, knowledge shares, and spearheading the
          development of internal tools.
        </p>

        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 10 })
            .fill(1)
            .map((el, i) => (
              <Tag key={i} text="JavaScript" />
            ))}
        </div>
      </div>
    </a>
  );
};
