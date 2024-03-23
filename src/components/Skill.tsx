import React from "react";
import { skills } from "../data/skills";

type Props = {Skill: { title: string; level: number }};

const Skill = ({ skill }: Props) => {
  return (
    <div className="flex flex-col-reverse items-center gap-2 ">
      <span className="dark:text-white">{skill.title}</span>
      <div
        className="radial-progress text-[10px] text-teal-300"
        style={{ "--value": skill.level, "--size": "40px" } as any}
        role="progressbar"
      >
        {skill.level}%
      </div>
    </div>
  );
};

export const SkillList = () => {
  return (
    <div className="flex flex-wrap gap-5 w-[80%] mb-12 lg:mb-auto">
      {skills.map((el, i) => (
        <Skill key={i} skill={el} />
      ))}
    </div>
  );
};
