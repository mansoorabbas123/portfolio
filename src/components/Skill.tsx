import React from "react";

const Skill = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-2 ">
      <span className="font-bold dark:text-white">React</span>
      <div
        className="radial-progress text-[10px] text-teal-300"
        style={{ "--value": 70, "--size": "40px" } as any}
        role="progressbar"
      >
        70%
      </div>
    </div>
  );
};

export const SkillList = () => {
  return (
    <div className="flex flex-wrap gap-5 lg:w-72 mb-12 lg:mb-auto">
      {[1, 2, 3, 4, 5, 3, 6, 7, 7, 8].map((el, i) => (
        <Skill key={i} />
      ))}
    </div>
  );
};
