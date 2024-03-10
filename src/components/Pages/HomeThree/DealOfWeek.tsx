import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import { ArrowCircleDown } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const DealOfWeek = () => {
  return (
    <section className="section-pb bg-white">
      <div className="container">
        <div className="grid items-center xl:grid-cols-12 lg:grid-cols-2 grid-cols-1 my-gap-24 lg:rounded-3xl md:rounded-2xl rounded-xl border border-blue-B900 xl:py-16 lg:py-14 md:py-12 sm:py-9 lg:px-[60px] md:px-12 sm:px-8 p-5">
          <div className="xl:col-span-5">
            <Image
              className="w-full"
              src="/media/images/dealBanner.png"
              alt="dealBanner"
            />
          </div>
          <div className="xl:col-span-7">
            <FadeUp>
              <h5 className="text-24 text-blue-B900 gap-mb-24 ">
                Deal of the Week
              </h5>
            </FadeUp>
            <FadeDown>
              <h2 className="text-57 text-blue-B900 gap-mb-24 ">Predator 64</h2>
            </FadeDown>
            <FadeUp>
              <p className="text-18 text-blue-B300 gap-mb-32 ">
                Builder/Model: Predator 64 | Refitted: 2023 | Length 64ft 21M |
                Charter Guests: 15 | Crew Members: 3 |ONBOARD BBQ SYSTEM & FULL
                BOSE SURROUND SOUND
              </p>
              <h4 className="text-24 text-blue-B300 gap-mb-40 ">
                LIMITED TIME OFFER (Normal price $1800)
              </h4>
            </FadeUp>
            <Link
              href="/sell"
              className="btn bg-blue-B700 group text-white inline-flex items-center gap-2.5 my-transition whitespace-nowrap"
            >
              Reserve
              <ArrowCircleDown
                width={20}
                className="group-hover:rotate-90 my-transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfWeek;
