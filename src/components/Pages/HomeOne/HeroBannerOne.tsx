"use client";

import { Listbox } from "@headlessui/react";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useDropdown } from "@/hooks";
import { FormEvent, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";

const yachtTypes = [
  "Yacth Type One",
  "Yacth Type Two",
  "Yacth Type Three",
  "Yacth Type Four",
  "Yacth Type Five",
];

const guests = [
  "Guest One",
  "Guest Two",
  "Guest Three",
  "Guest Four",
  "Guest Five",
];

const destinations = [
  "Destination One",
  "Destination Two",
  "Destination Three",
  "Destination Four",
  "Destination Five",
];

const budgets = [
  "100.00 - 250.00",
  "250.00 - 350.00",
  "350.00 - 450.00",
  "4500.00 - 550.00",
  "550.00 - 1000.00",
];

const HeroBannerOne = () => {
  const {
    open: openYachtsTypes,
    handleOption: handleYachtsTypesOption,
    ref: yachtTypesRef,
  } = useDropdown();

  const {
    open: openGuests,
    handleOption: handleGuestsOption,
    ref: guestsRef,
  } = useDropdown();

  const {
    open: openDestinations,
    handleOption: handleDestinationsOption,
    ref: destinationsRef,
  } = useDropdown();

  const {
    open: openBudgets,
    handleOption: handleBudgetsOption,
    ref: BudgetsRef,
  } = useDropdown();

  const [selectedYachtsType, setSelectedYachtsType] = useState(yachtTypes[0]);
  const [selectedGuest, setSelectedGuest] = useState(guests[0]);
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );
  const [selectedBudget, setSelectedBudget] = useState(budgets[0]);

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="bg-blue-B300 sm:bg-[url('/media/images/heroBannerImg1.1.png')] bg-no-repeat bg-[100%_100%] bg-cover">
      <div className="relative w-full xxl:pt-72 xl:pt-60 lg:pt-56 md:pt-44 pt-32">
        <div className="container relative z-[1] xxl:pb-[190px] xl:pb-40 lg:pb-32 md:pb-24 sm:pb-20 pb-16">
          <FadeUp>
            <div className="max-w-[636px] sm:text-left text-center">
              <h1 className="gap-mb-32 text-76 text-white">
                The Most Exciting Adventure Boat Cruise
              </h1>
              <p className="gap-mb-40 text-18 text-white">
                Boativus is a place for those who are looking for the top-
                <br />
                notch yacht charters.
              </p>
              <div className="flex-centerY sm:justify-start justify-center my-gap-24">
                <Link
                  href={"/buy"}
                  className="btn bg-blue-B900 hover:bg-brown-B300 text-white hover:text-blue-B900 bg-opacity-70 border border-blue-B900"
                >
                  Book now
                </Link>
                <Link
                  className="bg-blue-B900 hover:bg-brown-B300 text-white hover:text-blue-B900 bg-opacity-70 md:w-16 sm:w-14 w-12 md:h-16 sm:h-14 h-12 flex-center rounded-full border border-blue-B900 group"
                  href={"/yachts"}
                >
                  <ArrowDown className="text-2xl group-hover:-rotate-90 my-transition" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
        <div className="absolute w-full h-full left-0 bottom-0 bg-gradient-to-r from-[#061138_2.25%] to-[rgba(6,17,56,0.00)_97.18%]"></div>
      </div>
      <div className="relative xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 bg-white z-[2] shadow-3">
        <form onSubmit={handleSubmit} className="container my-gap-24">
          <div className="grid xxl:grid-cols-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-gap-16 gap-4">
            <div className="w-full">
              <span className="text-18 text-blue-B800 gap-mb-16 block">
                Yacht Type
              </span>
              <div className="box-input-1 flex-centerY">
                <Listbox
                  value={selectedYachtsType}
                  onChange={setSelectedYachtsType}
                >
                  <div className="relative w-full">
                    <div ref={yachtTypesRef}>
                      <Listbox.Button
                        className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                        onClick={handleYachtsTypesOption}
                      >
                        <span className="flex-centerY gap-2 w-full">
                          <span className="block text-left my-text-18 hover:text-primary-1 my-transition leading-7">
                            {selectedYachtsType}
                          </span>
                        </span>
                        <CaretDown
                          className={` icon-24 text-2xl block ${
                            openYachtsTypes
                              ? "rotate-180 duration-500 text-primary-1"
                              : " duration-500 text-stroct-1"
                          }`}
                        />
                      </Listbox.Button>
                    </div>
                    <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                      {yachtTypes?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li
                            className={` ${
                              selectedYachtsType === item
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
            <div className="w-full">
              <span className="text-18 text-blue-B800 gap-mb-16 block">
                Guests
              </span>
              <div className="box-input-1 flex-centerY">
                <Listbox value={selectedGuest} onChange={setSelectedGuest}>
                  <div className="relative w-full">
                    <div ref={guestsRef}>
                      <Listbox.Button
                        className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                        onClick={handleGuestsOption}
                      >
                        <span className="flex-centerY gap-2 w-full">
                          <span className="block text-left my-text-18 hover:text-primary-1 my-transition leading-7">
                            {selectedGuest}
                          </span>
                        </span>
                        <CaretDown
                          className={` icon-24 text-2xl block ${
                            openGuests
                              ? "rotate-180 duration-500 text-primary-1"
                              : " duration-500 text-stroct-1"
                          }`}
                        />
                      </Listbox.Button>
                    </div>
                    <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                      {guests?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li
                            className={` ${
                              selectedGuest === item
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
            <div className="w-full">
              <label
                htmlFor="yacht-type"
                className="text-18 text-blue-B800 gap-mb-16 block"
              >
                Yacht Name
              </label>
              <input
                className="box-input-1 w-full py-2.5"
                type="text"
                required
                placeholder="Name"
                name="yacht-name"
                id="yacht-name"
              />
            </div>
            <div className="w-full">
              <span className="text-18 text-blue-B800 gap-mb-16 block">
                Destinations
              </span>
              <div className="box-input-1 flex-centerY">
                <Listbox
                  value={selectedDestination}
                  onChange={setSelectedDestination}
                >
                  <div className="relative w-full">
                    <div ref={destinationsRef}>
                      <Listbox.Button
                        className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                        onClick={handleDestinationsOption}
                      >
                        <span className="flex-centerY gap-2 w-full">
                          <span className="block text-left my-text-18 hover:text-primary-1 my-transition leading-7">
                            {selectedDestination}
                          </span>
                        </span>
                        <CaretDown
                          className={` icon-24 text-2xl block ${
                            openDestinations
                              ? "rotate-180 duration-500 text-primary-1"
                              : " duration-500 text-stroct-1"
                          }`}
                        />
                      </Listbox.Button>
                    </div>
                    <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                      {destinations?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li
                            className={` ${
                              selectedDestination === item
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
            <div className="w-full">
              <span className="text-18 text-blue-B800 gap-mb-16 block">
                Budget
              </span>
              <div className="box-input-1 flex-centerY">
                <Listbox value={selectedBudget} onChange={setSelectedBudget}>
                  <div className="relative w-full">
                    <div ref={BudgetsRef}>
                      <Listbox.Button
                        className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                        onClick={handleBudgetsOption}
                      >
                        <span className="flex-centerY gap-2 w-full">
                          <span className="block text-left my-text-18 hover:text-primary-1 my-transition leading-7">
                            {selectedBudget}
                          </span>
                        </span>
                        <CaretDown
                          className={` icon-24 text-2xl block ${
                            openBudgets
                              ? "rotate-180 duration-500 text-primary-1"
                              : " duration-500 text-stroct-1"
                          }`}
                        />
                      </Listbox.Button>
                    </div>
                    <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                      {budgets?.map((item, idx) => (
                        <Listbox.Option key={idx} value={item}>
                          <li
                            className={` ${
                              selectedBudget === item
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
            <div className="flex items-end">
              <button
                type="submit"
                className="btn bg-[#565E78] hover:bg-brown-B300 hover:text-blue-B900 text-white w-full"
              >
                Search Yacht
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroBannerOne;
