"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed
            ${
              scrolled ? "bottom-10" : "-bottom-40"
            }  text-2xl  shadow-xl md:right-10 sm:right-8 right-5 py-2.5 px-2 rounded-md z-[9999] text-white bg-primary-1`}
      onClick={backtoTop}
      aria-label="bottom to top button"
    >
      <span className="block text-xl  duration-700 animate-bounce ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevrons-up"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 11l5 -5l5 5" />
          <path d="M7 17l5 -5l5 5" />
        </svg>
      </span>
    </button>
  );
};

export default ScrollToTop;
