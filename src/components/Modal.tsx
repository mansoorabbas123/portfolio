"use client";
import { ICross } from "@/assets/icons";
import classNames from "classnames";
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
};

export const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const modalContent = (
    <div
      onClick={onClose}
      className={classNames(
        "fixed z-50 inset-0 bg-slate-900  bg-opacity-50  place-items-center  ",
        {
          hidden: !open,
          grid: open,
        }
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-base-100 py-5 rounded w-4/5"
      >
        <div className="flex items-center justify-between mb-5 shadow-sm pb-2 px-5">
          <span className="text-sm font-bold">Oververview</span>

          <button
            className="bg-none border-none hover:text-red-600"
            onClick={onClose}
          >
            <ICross width={16} height={16} />
          </button>
        </div>
        <div className="max-h-[700px] overflow-y-auto px-5   ">{children}</div>
      </div>
    </div>
  );

  return mounted && ref.current
    ? ReactDOM.createPortal(modalContent, ref.current)
    : null;
};
