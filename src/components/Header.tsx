import React from "react";
import { ToggleButton } from ".";

export const Header = () => {
  return (
    <header className="w-full dark:text-slate-700 px-6 py-4 mb-10 lg:mb-0 ">
      <div className="flex justify-between items-center ">
        <h1 className="capitalize text-2xl font-bold">Portfolio</h1>
        <ToggleButton />
      </div>
    </header>
  );
};
