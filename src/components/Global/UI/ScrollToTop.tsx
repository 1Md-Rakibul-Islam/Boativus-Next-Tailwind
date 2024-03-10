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
            }  text-2xl  shadow-xl md:right-10 sm:right-8 right-5 rounded-full z-[9999] text-brown-B300 flex-center w-10 h-10 border border-brown-B300`}
      onClick={backtoTop}
      aria-label="bottom to top button"
    >
      <span className="block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
        </svg>
      </span>
    </button>
  );
};

export default ScrollToTop;
