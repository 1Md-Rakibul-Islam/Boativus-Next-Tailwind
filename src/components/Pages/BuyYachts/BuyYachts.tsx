"use client";

import { Listbox } from "@headlessui/react";
import { useDropdown } from "@/hooks";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CaretDown,
  CaretRight,
  MapPinLine,
} from "@phosphor-icons/react";
import { buyYachts } from "@public/data/buyYachts";
import Link from "next/link";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const sortType = [
  "Best Yacth",
  "Popular Yacth",
  "Top Sales",
  "Newest Arrivals",
];

const BuyYachts = () => {
  const {
    open: openSortType,
    handleOption: handleSortType,
    ref: sortTypeRef,
  } = useDropdown();
  const [selectedSortType, setSelectedSortType] = useState(sortType[0]);

  return (
    <section className="section-pb gap-mt-40">
      <div className="container">
        <div className="flex md:flex-row flex-col justify-between items-center my-gap-24 gap-mb-40 md:py-4 py-3 lg:px-6 md:px-5 sm:px-4 px-3.5 bg-blue-B700">
          <div className="flex-centerY">
            <p className="text-18 text-white">
              <span>{buyYachts?.length}</span> items found for
              <span className="text-brown-B300"> &ldquo;Boats&ldquo;</span>
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
        <div className="grid my-gap-24 gap-mb-60">
          {buyYachts?.map((item, idx) => (
            <FadeUp
              key={idx}
              className="p-24px grid lg:grid-cols-12 grid-cols-1 lg:items-center my-gap-24 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]"
            >
              <div className="xxl:col-span-4 lg:col-span-5 col-span-6 overflow-hidden">
                <Image
                  className="w-full max-h-[365px] h-full hover:scale-110 my-transition"
                  src={item?.image}
                  alt=""
                />
              </div>
              <div className="xxl:col-span-8 lg:col-span-7 col-span-6">
                <div className="flex sm:items-center  sm:flex-row flex-col sm:justify-between my-gap-24">
                  <div>
                    <h5 className="text-16 text-brown-B400 gap-mb-16">
                      {item?.boatType}
                    </h5>
                    <Link
                      href={`/yachts/${item?.id}`}
                      className="inline-block text-24 text-blue-B900 hover:text-brown-B500 my-transition font-playfair gap-mb-16"
                    >
                      {item?.title}
                    </Link>
                    <p className="text-16 text-blue-B300 gap-mb-40">
                      Unique in the World
                    </p>
                    <ul className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3 xl:gap-x-10 lg:gap-x-8 md:gap-x-6 gap-x-4 list-none text-18 font-medium text-blue-B800 gap-mb-40">
                      <li>{item?.dimensions} m</li>
                      <li>Dimensions</li>
                      <li>{item?.size} m</li>
                      <li>Draught</li>
                      <li>{item?.enginePerformance}</li>
                      <li>Engine Performance</li>
                    </ul>
                    <div className="flex-centerY gap-2 text-blue-B300">
                      <span className="flex-centerY gap-2">
                        <MapPinLine className="text-2xl text-[#343330] block" />
                        Italy
                      </span>
                      <CaretRight className="ph ph-caret-right text-12" />
                      <span>Liguria</span>
                      <CaretRight className="ph ph-caret-right text-12" />
                      <span>Savona</span>
                      <CaretRight className="ph ph-caret-right text-12" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-24 text-blue-B900 gap-mb-24">
                      EUR {item?.price},-
                    </h5>
                    <span className="text-blue-B300 block">
                      {item?.condition} Boat
                    </span>
                    <span className="text-blue-B300 gap-mb-40 block">
                      Year Built {item?.built}
                    </span>
                    <Link
                      href={`/yachts/${item?.id}`}
                      className="sm:py-3 py-2.5 xxl:px-8 xl:px-6 lg:px-4 px-3 text-center text-18 rounded-10 bg-blue-B700 hover:bg-brown-B300 hover:text-blue-B900 text-white font-semibold block"
                    >
                      Show offer
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <div className="flex-center">
          <div className="flex-centerY my-gap-24">
            <button
              type="button"
              className="py-2 md:w-[88px] sm:w-[68px] w-12 flex-center bg-blue-B200 hover:bg-blue-B900 my-transition rounded-10"
            >
              <ArrowLeft className="icon-24 text-white" />
            </button>
            <div className="flex-centerY sm:gap-2 gap-1.5 text-24 font-semibold text-white">
              <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                1
              </button>
              <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                2
              </button>
              <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                3
              </button>
              <button className="w-10 h-10 flex-center p-3 bg-blue-B700 my-transition rounded-10">
                4
              </button>
            </div>
            <button
              type="button"
              className="py-2 md:w-[88px] sm:w-[68px] w-12 flex-center bg-blue-B200 hover:bg-blue-B900 my-transition rounded-10"
            >
              <ArrowRight className="icon-24 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyYachts;
