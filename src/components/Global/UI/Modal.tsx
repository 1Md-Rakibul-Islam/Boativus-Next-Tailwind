"use client";
import { X } from "@phosphor-icons/react";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  style?: string;
  open: boolean;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
};

const Modal = ({ children, style, open, onClick }: Props) => {
  useEffect(() => {
    const body = document.body;

    const navBar = document.getElementById("header");

    if (open) {
      body.style.overflow = "hidden";
      navBar?.classList?.remove("header-animation");
    } else {
      body.style.overflow = "visible";
      navBar?.classList?.add("header-animation");
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [open]);

  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 z-[500] min-h-screen w-screen bg-white bg-opacity-[0.6] ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 duration-500 ${
          open
            ? "visible opacity-100 scale-100"
            : "invisible scale-75 opacity-0"
        }
        justify-center items-center flex overflow-x-hidden fixed  z-[300] outline-none focus:outline-none
      `}
      >
        <div className="relative w-full h-full">
          <button
            onClick={onClick}
            className="absolute lg:top-4 md:top-3.5 sm:top-3 top-2.5 lg:right-4 md:right-3.5 sm:right-3 right-2.5 text-white hover:text-black z-[1000]"
            aria-label="close-modal"
          >
            <X className={`${style} md:text-base sm:text-sm text-[8px]`} />
          </button>

          <div onClick={(e) => e.stopPropagation()} className="relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
