"use client";

import { Listbox } from "@headlessui/react";
import {
  ArrowDown,
  Boat,
  CalendarBlank,
  CalendarCheck,
  CaretDown,
  MapPin,
  Package,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useDropdown } from "@/hooks";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FadeUp from "@/motion/FadeUp";

const packages = [
  "For 4 Guests",
  "For 12 Guests",
  "For 16 Guests",
  "For 20 Guests",
];

const boatTypes = ["Sailboat Type", "Sloop Type", "Ketch Type"];

const HomeFourBanner = () => {
  const {
    open: openPackage,
    handleOption: handlePackageOption,
    ref: packageRef,
  } = useDropdown();

  const {
    open: openBoatType,
    handleOption: handleBoatTypesOption,
    ref: boatTypesRef,
  } = useDropdown();

  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [selectedBoatType, setSelectedBoatType] = useState(boatTypes[0]);

  const [checkInDate, setCheckInDate] = useState<Date | null>(null); // Specify the type as Date | null

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="relative z-[2] bg-[url('../media/images/home4-hero-banner.png')] bg-no-repeat bg-cover">
      <div className="relative w-full xl:pt-72 lg:pt-52 md:pt-36 pt-32">
        <div className="container relative z-[1] xl:pb-[316px] lg:pb-[390px] lg:mb-0 gap-mb-64">
          <FadeUp className="max-w-[636px]">
            <h1 className="gap-mb-32 text-76 text-white">
              This is the Most Exciting Yacht Trip Ever!
            </h1>
            <p className="gap-mb-40 text-18 text-white">
              Boativus is a place for those who are looking for the top-notch
              yacht charters.
            </p>
            <div className="flex-centerY my-gap-24">
              <Link
                to="/buy-yacht"
                className="btn hover:text-blue-B900 text-white bg-blue-B900 hover:bg-brown-B300"
              >
                Book now
              </Link>
              <Link
                className=" bg-blue-B900 hover:bg-brown-B300 md:w-16 md:h-16 sm:w-14 sm:h-14 w-11 h-11 flex-center rounded-full group"
                to="/yachts"
              >
                <ArrowDown
                  width={24}
                  height={24}
                  className="group-hover:text-blue-B900 text-white group-hover:-rotate-90 my-transition"
                />
              </Link>
            </div>
          </FadeUp>
        </div>
        <div className="lg:absolute 4xl:left-[30%] 3xl:left-[24%] xl:left-[16%] lg:left-[20%] right-0 bottom-0 lg:mx-0 mx-5">
          <form
            onSubmit={handleSubmit}
            className="w-full xl:p-[30px] p-32px bg-[#F4F8FC] z-[2] shadow-3"
          >
            <div className="grid xxl:grid-cols-5 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-gap-16 gap-4 relative z-[1]">
              <div className="flex-centerY my-gap-20">
                <span className="lg:p-[18px] md:p-4 p-3 rounded-10 border border-blue-B80">
                  <MapPin width={24} height={24} className="text-brown-B400" />
                </span>
                <div className="w-full">
                  <label
                    htmlFor="destination"
                    className="text-18 text-brown-B400 font-semibold font-playfair gap-mb-16 block"
                  >
                    Destination
                  </label>
                  <input
                    className="nice-select line-input py-3 bg-transparent"
                    type="text"
                    placeholder="Location address"
                    name="destination"
                    id="destination"
                    required
                  />
                </div>
              </div>
              <div className="flex-centerY my-gap-20">
                <span className="lg:p-[18px] md:p-4 p-3 rounded-10 border border-blue-B80">
                  <CalendarBlank
                    width={24}
                    height={24}
                    className="text-brown-B400"
                  />
                </span>
                <div className="w-full">
                  <label
                    htmlFor="date"
                    className="text-18 text-brown-B400 font-semibold font-playfair gap-mb-16 block"
                  >
                    Date
                  </label>
                  <div className="w-full">
                    <DatePicker
                      closeOnScroll={true}
                      selected={checkInDate}
                      onChange={(date: Date | null) => setCheckInDate(date)} // Adjust the type of the argument
                      placeholderText="Check-out:"
                      className="line-input bg-transparent w-full !px-0 !py-3"
                      name="check-out"
                      id="check-out"
                      showIcon
                      icon={<CalendarCheck width={16} height={16} />}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex-centerY my-gap-20">
                <span className="lg:p-[18px] md:p-4 p-3 rounded-10 border border-blue-B80">
                  <Package width={24} height={24} className="text-brown-B400" />
                </span>
                <div className="w-full relative">
                  <span className="text-18 text-brown-B400 font-semibold font-playfair gap-mb-16 block">
                    Package
                  </span>
                  <Listbox
                    value={selectedPackage}
                    onChange={setSelectedPackage}
                  >
                    <div className="relative w-full line-input">
                      <div ref={packageRef}>
                        <Listbox.Button
                          className="flex justify-between items-start gap-2 relative cursor-pointer w-full"
                          onClick={handlePackageOption}
                        >
                          <span className="flex-centerY gap-2 w-full">
                            <span className="block text-left my-text-18 hover:text-primary-1 my-transition leading-7">
                              {selectedPackage}
                            </span>
                          </span>
                          <CaretDown
                            className={` icon-24 text-2xl block ${
                              openPackage
                                ? "rotate-180 duration-500 text-primary-1"
                                : " duration-500 text-stroct-1"
                            }`}
                          />
                        </Listbox.Button>
                      </div>
                      <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                        {packages?.map((item, idx) => (
                          <Listbox.Option key={idx} value={item}>
                            <li
                              className={` ${
                                selectedPackage === item
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
              <div className="flex-centerY my-gap-20">
                <span className="lg:p-[18px] md:p-4 p-3 rounded-10 border border-blue-B80">
                  <Boat width={24} height={24} className="text-brown-B400" />
                </span>
                <div className="w-full relative">
                  <span className="text-18 text-brown-B400 font-semibold font-playfair gap-mb-16 block">
                    Boat
                  </span>
                  <Listbox
                    value={selectedBoatType}
                    onChange={setSelectedBoatType}
                  >
                    <div className="relative w-full line-input">
                      <div ref={boatTypesRef}>
                        <Listbox.Button
                          className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                          onClick={handleBoatTypesOption}
                        >
                          <span className="flex-centerY gap-2 w-full">
                            <span className="block text-left my-text-18 hover:text-primary-1 my-transition leading-7">
                              {selectedBoatType}
                            </span>
                          </span>
                          <CaretDown
                            className={` icon-24 text-2xl block ${
                              openBoatType
                                ? "rotate-180 duration-500 text-primary-1"
                                : " duration-500 text-stroct-1"
                            }`}
                          />
                        </Listbox.Button>
                      </div>
                      <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                        {boatTypes?.map((item, idx) => (
                          <Listbox.Option key={idx} value={item}>
                            <li
                              className={` ${
                                selectedBoatType === item
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
              <div className=" w-full h-full">
                <button
                  type="submit"
                  className="btn text-24 w-full h-full bg-blue-B700 hover:bg-brown-B300 text-white hover:text-blue-B900"
                >
                  Search Yacht
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeFourBanner;
