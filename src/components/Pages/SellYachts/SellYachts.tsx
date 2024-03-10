"use client";

import { Listbox } from "@headlessui/react";
import SellRightSide from "./SellRightSide";
import SellSideBar from "./SellSideBar";
import { useDropdown } from "@/hooks";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { yachts } from "@public/data/yachts";

const sortType = [
  "Best Yacth",
  "Popular Yacth",
  "Top Sales",
  "Newest Arrivals",
];

const SellYachts = () => {
  const {
    open: openSortType,
    handleOption: handleSortType,
    ref: sortTypeRef,
  } = useDropdown();
  const [selectedSortType, setSelectedSortType] = useState(sortType[0]);

  // yachts slice
  const allYachts = yachts?.slice(11, 19);

  return (
    <section className="section-pb gap-mt-40">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between items-center my-gap-24 gap-mb-40 md:py-4 py-3 lg:px-6 md:px-5 sm:px-4 px-3.5 bg-blue-B700">
          <div className="flex-centerY">
            <p className="text-18 text-white">
              <span>{allYachts?.length}</span> items found for
              <span className="text-brown-B300"> "Boats"</span>
            </p>
          </div>
          <div className="flex-centerY gap-2">
            <h6 className="text-18 text-white">Sort By:</h6>
            <div className="sm:w-[210px] w-[200px] sort-by">
              <div className="w-full box-input-1 border-[#B2B5C1]">
                <Listbox
                  value={selectedSortType}
                  onChange={setSelectedSortType}
                >
                  <div className="relative w-full">
                    <div ref={sortTypeRef}>
                      <Listbox.Button
                        className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                        onClick={handleSortType}
                      >
                        <span className="flex-centerY gap-2 w-full">
                          <span className="block text-left my-text-18 text-white my-transition leading-7">
                            {selectedSortType}
                          </span>
                        </span>
                        <CaretDown
                          className={` icon-24 text-2xl block ${
                            openSortType
                              ? "rotate-180 duration-500 "
                              : "duration-500 text-stroct-1"
                          } text-white`}
                        />
                      </Listbox.Button>
                    </div>
                    <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                      {sortType?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li
                            className={` ${
                              selectedSortType === item
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
          </div>
        </div>
        <div className="relative grid lg:grid-cols-12 my-gap-24">
          {/* Left Side */}
          <SellSideBar />
          {/* Right Side */}
          <SellRightSide yachts={allYachts} />
        </div>
      </div>
    </section>
  );
};

export default SellYachts;
