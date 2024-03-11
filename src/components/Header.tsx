import React from "react";
import { ToggleButton } from ".";
import classNames from "classnames";
import Link from "next/link";

type Props = { extraClass?: string };

export const Header = ({ extraClass }: Props) => {
  return (
    <header
      className={classNames(
        "w-full dark:text-slate-700 px-6 py-4 mb-10 lg:mb-0  ",
        extraClass
      )}
    >
      <div className="flex justify-between items-center ">
        <Link href="/">
          <h1 className="capitalize text-2xl font-bold">Portfolio</h1>
        </Link>
        <ToggleButton />
      </div>
    </header>
  );
};
