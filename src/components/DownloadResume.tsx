import { IArrowUp } from "@/assets/icons";
import Link from "next/link";
import React from "react";

type Props = { extraClass?: string };

export const DownloadResume = ({ extraClass }: Props) => {
  return (
    <Link
    href="/api/download-pdf"
    className="group hover:text-teal-300 transition-all flex items-center  w-fit py-2 mb-5"
  >
    View Résumé in PDF
    <span className="rotate-45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
      <IArrowUp width={16} height={16} />
    </span>
  </Link>
  );
};
