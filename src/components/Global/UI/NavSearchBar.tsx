"use client";

import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { useDropdown } from "@/hooks";
const NavSearchBar = ({ position }: { position?: string }) => {
  const { open, handleOption, ref } = useDropdown();
  const [searchData, setSearchData] = useState("");

  // Handle form submit
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchData("");
  };

  return (
    <div ref={ref} className="md:flex-centerY hidden">
      <button
        onClick={() => {
          handleOption();
          setSearchData("");
        }}
        aria-label="handleOption"
      >
        <MagnifyingGlass className="text-white" size={30} />
      </button>
      <div
        className={`absolute md:top-24 sm:top-16 top-0 right-0 ${
          position && position
        } md:w-[320px] sm:w-[280px] w-full z-10 opacity-100 transition-all duration-700 ${
          open ? "translate-y-0 " : "-translate-y-[500px] opacity-0"
        }`}
      >
        <div className="bg-blue-B400 shadow-[0px_1px_12px_0px_#000000b5] sm:rounded-xl rounded-b-xl  flex min-w-full items-center justify-between gap-6 p-3 max-sm:flex-col-reverse">
          <div className="items-center gap-2 max-sm:flex">
            <form
              onSubmit={handleFormSubmit}
              className="bg-blue-B900 flex w-full items-center justify-between rounded-full py-2 px-3"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchData}
                required
                onChange={(e) => setSearchData(e.target.value)}
                className=" w-full placeholder:text-foundation-blue-60 text-white focus:outline-none bg-transparent pr-2"
              />
              <button type="submit" aria-label="handleOption">
                <MagnifyingGlass className="icon-24 text-brown-B300" />
              </button>
            </form>
          </div>
          <button
            className=" rounded-full p-1 bg-brown-B300  text-black "
            onClick={() => {
              setSearchData("");
              handleOption();
            }}
            aria-label="close"
          >
            <X size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavSearchBar;
