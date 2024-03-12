"use client";

import { CaretDown, Sliders, Star, X } from "@phosphor-icons/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useDropdown } from "@/hooks";
import { Listbox } from "@headlessui/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const languages = ["English", "Bangla", "Arabic", "Hindi"];

const SellSideBar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState([170, 800]);

  const {
    open: openLanguage,
    handleOption: handleLanguageOption,
    ref: languageRef,
  } = useDropdown();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenSideBar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      ref={sidebarRef}
      className="xl:col-span-4 lg:col-span-3 z-[2] relative lg:pr-0 lg:pb-0 pr-4 pb-4"
    >
      <button
        onClick={() => setOpenSideBar((prev) => !prev)}
        className="lg:hidden block fixed md:top-32 sm:top-24 min-[460px]:top-20 top-[74px] -left-1 p-2.5 rounded-tr-lg rounded-br-lg bg-brown-B300 text-blue-B900"
      >
        <Sliders className="icon-24" />
      </button>
      <div
        className={`${
          openSideBar ? "translate-x-0" : "-translate-x-full"
        } lg:sticky fixed md:top-28 sm:top-[92px] top-[74px] bottom-2 left-0 lg:translate-x-0  my-transition-2 z-[2] lg:bg-white bg-blue-B900 lg:rounded-none rounded-10 lg:w-full md:w-[340px] sm:w-[300px] w-[280px] `}
      >
        <button
          onClick={() => setOpenSideBar(false)}
          className="lg:hidden block lg:relative absolute top-2 right-2 icon-24 hover:text-brown-B300 text-white"
        >
          <X />
        </button>
        <form
          onSubmit={handleSubmit}
          className="grid my-gap-24 max-h-full lg:overflow-y-visible overflow-y-scroll scrollbar-sm"
        >
          <div className="bg-blue-B800 p-24px rounded-lg lg:mt-0 mt-10">
            <div className="sm:py-4 py-3 lg:px-8 md:px-7 sm:px-5 p-4 bg-blue-B900 gap-mb-32">
              <h5 className="text-18 font-bold text-white text-center">
                Filter By Price
              </h5>
            </div>
            <div className="block" aria-label="range">
              <RangeSlider
                id="range-slider"
                className="single-thumb bg-brown-B100"
                defaultValue={[170, 800]}
                thumbsDisabled={[false, false]}
                rangeSlideDisabled={true}
                value={value}
                onInput={setValue}
                min={0}
                max={1000}
              />
              <div className="text-center gap-mt-32">
                <h5 className="text-18 font-semibold text-white">
                  <span className="font-playfair">Price: </span>
                  <span className="font-playfair text-brown-B300">
                    ${" "}
                    <span id="min-value" className="font-playfair">
                      {value[0]}
                    </span>{" "}
                    - $
                    <span id="max-value" className="font-playfair">
                      {value[1]}
                    </span>
                  </span>
                </h5>
              </div>
            </div>
          </div>

          <div className="bg-blue-B800 p-24px rounded-lg">
            <div className="sm:py-4 py-3 lg:px-8 md:px-7 sm:px-5 p-4 bg-blue-B900 gap-mb-32">
              <h5 className="text-18 font-bold text-white text-center">
                Categories
              </h5>
            </div>
            <div className="grid my-gap-24">
              <div className="flex items-center relative">
                <input
                  type="checkbox"
                  className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
                  name="boats"
                  value="boats"
                />
                <div className="bg-blue-B600 rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-x-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden icon-24 text-white pointer-events-none"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
                <span className="my-text-18 font-medium text-white text-left block">
                  Boats
                </span>
              </div>
              <div className="flex items-center relative">
                <input
                  type="checkbox"
                  className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
                  name="maditerranean"
                  value="maditerranean"
                />
                <div className="bg-blue-B600 rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-x-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden icon-24 text-white pointer-events-none"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
                <span className="my-text-18 font-medium text-white text-left block">
                  Maditerranean
                </span>
              </div>
              <div className="flex items-center relative">
                <input
                  type="checkbox"
                  className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
                  name="marine"
                  value="marine"
                />
                <div className="bg-blue-B600 rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-x-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden icon-24 text-white pointer-events-none"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
                <span className="my-text-18 font-medium text-white text-left block">
                  Marine
                </span>
              </div>
              <div className="flex items-center relative">
                <input
                  type="checkbox"
                  className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
                  name="sailor_trip"
                  value="sailor_trip"
                />
                <div className="bg-blue-B600 rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-x-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden icon-24 text-white pointer-events-none"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
                <span className="my-text-18 font-medium text-white text-left block">
                  Sailor trip
                </span>
              </div>
              <div className="flex items-center relative">
                <input
                  type="checkbox"
                  className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
                  name="promotions"
                  value="yes"
                />
                <div className="bg-blue-B600 rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-x-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden icon-24 text-white pointer-events-none"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
                <span className="my-text-18 font-medium text-white text-left block">
                  Sea routes
                </span>
              </div>
              <div className="flex items-center relative">
                <input
                  type="checkbox"
                  className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5"
                  name="promotions"
                  value="yes"
                />
                <div className="bg-blue-B600 rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-x-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden icon-24 text-white pointer-events-none"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
                <span className="my-text-18 font-medium text-white text-left block">
                  Sea routes
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-B800 p-24px rounded-lg">
            <div className="sm:py-4 py-3 lg:px-8 md:px-7 sm:px-5 p-4 bg-blue-B900 gap-mb-32">
              <h5 className="text-18 font-bold text-white text-center">
                Product tags
              </h5>
            </div>
            <div className="flex flex-wrap gap-2.5 text-center text-white">
              <a
                href="#"
                className="sm:py-3 py-2.5 md:px-5 sm:px-4 p-3 rounded-10 border border-brown-B300"
              >
                boats
              </a>
              <a
                href="#"
                className="sm:py-3 py-2.5 md:px-5 sm:px-4 p-3 rounded-10 border border-brown-B300"
              >
                yacht
              </a>
              <a
                href="#"
                className="sm:py-3 py-2.5 md:px-5 sm:px-4 p-3 rounded-10 border border-brown-B300"
              >
                Sailor trip
              </a>
              <a
                href="#"
                className="sm:py-3 py-2.5 md:px-5 sm:px-4 p-3 rounded-10 border border-brown-B300"
              >
                Yacht club
              </a>
            </div>
          </div>

          <div className="bg-blue-B800 p-24px rounded-lg">
            <div className="sm:py-4 py-3 lg:px-8 md:px-7 sm:px-5 p-4 bg-blue-B900 gap-mb-32">
              <h5 className="text-18 font-bold text-white text-center">
                Rating
              </h5>
            </div>
            <div className="grid my-gap-24">
              <button className="flex-centerY flex-wrap gap-2  text-xl">
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
              </button>
              <button className="flex-centerY flex-wrap gap-2 text-warning-2 text-xl">
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-blue-B70" />
                <span className="text-16 text-white">And Up</span>
              </button>
              <button className="flex-centerY flex-wrap gap-2 text-warning-2 text-xl">
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-blue-B70" />
                <Star weight="fill" className="text-blue-B70" />
                <span className="text-16 text-white">And Up</span>
              </button>
              <button className="flex-centerY flex-wrap gap-2 text-warning-2 text-xl">
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-blue-B70" />
                <Star weight="fill" className="text-blue-B70" />
                <Star weight="fill" className="text-blue-B70" />
                <span className="text-16 text-white">And Up</span>
              </button>
              <button className="flex-centerY flex-wrap gap-2 text-warning-2 text-xl">
                <Star weight="fill" className="text-warning-2" />
                <Star weight="fill" className="text-blue-B70" />
                <Star weight="fill" className="text-blue-B70" />
                <Star weight="fill" className="text-blue-B70" />
                <Star weight="fill" className="text-blue-B70" />
                <span className="text-16 text-white">And Up</span>
              </button>
            </div>
          </div>

          <div className="bg-blue-B800 p-24px rounded-lg">
            <div className="sm:py-4 py-3  bg-blue-B900 gap-mb-32">
              <h5 className="text-18 font-bold text-white text-center">
                Filter by Language
              </h5>
              EarnAndSavings.tStaking
            </div>
            <div className="w-full box-input-1">
              <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                <div className="relative w-full">
                  <div ref={languageRef}>
                    <Listbox.Button
                      className="flex justify-between items-start gap-3 relative cursor-pointer w-full text-white"
                      onClick={handleLanguageOption}
                    >
                      <span className="flex-centerY gap-2 w-full">
                        <span className="block text-left my-text-18 my-transition leading-7">
                          {selectedLanguage}
                        </span>
                      </span>
                      <CaretDown
                        className={` icon-24 text-2xl block ${
                          openLanguage
                            ? "rotate-180 duration-500 "
                            : " duration-500 text-stroct-1"
                        } `}
                      />
                    </Listbox.Button>
                  </div>
                  <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                    {languages?.map((item, idx) => (
                      <Listbox.Option key={idx} value={item}>
                        <li
                          className={` ${
                            selectedLanguage === item
                              ? "text-blue-B900 font-bold bg-white-2"
                              : "font-normal bg-white"
                          } my-text-18 whitespace-nowrap rounded-md px-4 py-2 hover:bg-white-2 cursor-pointer my-transition group`}
                        >
                          {item}
                        </li>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellSideBar;
