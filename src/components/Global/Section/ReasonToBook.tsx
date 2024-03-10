import {
  AnchorSimple,
  BaseballCap,
  Boat,
  Crosshair,
  GlobeHemisphereEast,
  MapPinLine,
  Martini,
  Path,
  ShieldCheck,
  Smiley,
  UsersThree,
} from "@phosphor-icons/react";
import { CounterElement } from "../UI";
import FadeUp from "@/motion/FadeUp";

const ReasonToBook = () => {
  return (
    <section className="section-pt bg-blue-B900 bg-[url('../media/images/reason-to-book-yachtBG.png')] bg-no-repeat bg-cover md:bg-center bg-left relative">
      <div className="container relative xl:pb-[132px] lg:mb-0 gap-mb-64">
        <div className="lg:section-pb grid grid-cols-12">
          <div className="xxl:col-span-6 xl:col-span-7 lg:col-span-8 md:col-span-9 col-span-12">
            <FadeUp>
              <h5 className="text-24 text-brown-B300 gap-mb-16">
                THE REASON TO BOOK A LUXURY YACHT
              </h5>
              <h2 className="text-57 text-white gap-mb-24">
                The Ultimate in Luxury & Freedom Is Now Open to the Whole World
              </h2>
              <p className="text-18 text-white gap-mb-32">
                It's a good idea to become acquainted before embarking on a
                luxury charter boat trip, as it can be anything and everything
                you wish it to be.
              </p>
            </FadeUp>
            <FadeUp>
              <ul className="list-inside list-none grid sm:grid-cols-2 grid-cols-1 my-gap-24">
                <li className="flex-centerY gap-2">
                  <Boat weight="fill" className="icon-24 text-white" />
                  <span className="text-18 font-semibold text-white">
                    Chartering a Yacht
                  </span>
                </li>
                <li className="flex-centerY gap-2">
                  <Martini weight="fill" className="icon-24 text-white" />
                  <span className="text-18 font-semibold text-white">
                    Corporate Charters
                  </span>
                </li>
                <li className="flex-centerY gap-2">
                  <AnchorSimple weight="fill" className="icon-24 text-white" />
                  <span className="text-18 font-semibold text-white">
                    Chartering a Sailing Yacht
                  </span>
                </li>
                <li className="flex-centerY gap-2">
                  <GlobeHemisphereEast
                    weight="fill"
                    className="icon-24 text-white"
                  />
                  <span className="text-18 font-semibold text-white">
                    Destination
                  </span>
                </li>
                <li className="flex-centerY gap-2">
                  <ShieldCheck weight="fill" className="icon-24 text-white" />
                  <span className="text-18 font-semibold text-white">
                    Travelling Safety
                  </span>
                </li>
                <li className="flex-centerY gap-2">
                  <MapPinLine weight="fill" className="icon-24 text-white" />
                  <span className="text-18 font-semibold text-white">
                    Top Worldwide Events
                  </span>
                </li>
                <li className="flex-centerY gap-2">
                  <Crosshair weight="fill" className="icon-24 text-white" />
                  <span className="text-18 font-semibold text-white">
                    Charter Yacht Insurance
                  </span>
                </li>
                <li className="flex-centerY gap-2">
                  <UsersThree weight="fill" className="icon-24 text-white" />
                  <span className="text-18 font-semibold text-white">
                    Captain and Company
                  </span>
                </li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
      <div className="xl:absolute container mx-auto 3xl:right-[15%] xl:right-[10%] left-0 -bottom-[20%] xl:mx-0 pb-20">
        <div className="3xl:pl-[22%] pl-[5%] bg-white xl:py-16 lg:py-14 md:py-12 sm:py-11 py-10 px-5 relative z-[1] shadow-2xl xl:-ml-5 -ml-0">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center my-gap-24 bg-white">
            <div className="flex-centerY lg:justify-start justify-center my-gap-24 tex:text-left text-center">
              <Boat className="ph ph-boat text-brown-B400 md:text-6xl sm:text-5xl text-4xl" />
              <div>
                <CounterElement
                  counter={{
                    style:
                      "flex-center gap-2 text-43 font-semibold text-blue-B900 gap-mb-16 font-playfair",
                    counterNumber: 285,
                    sizeText: "+",
                  }}
                />
                <p className="text-18 text-blue-B300">Yachts Collection</p>
              </div>
            </div>
            <div className="flex-centerY lg:justify-start justify-center my-gap-24 tex:text-left text-center">
              <Path className="ph ph-boat text-brown-B400 md:text-6xl sm:text-5xl text-4xl" />
              <div>
                <CounterElement
                  counter={{
                    style:
                      "flex-center gap-2 text-43 font-semibold text-blue-B900 gap-mb-16 font-playfair",
                    counterNumber: 65,
                    sizeText: "+",
                  }}
                />
                <p className="text-18 text-blue-B300">Yachts Collection</p>
              </div>
            </div>
            <div className="flex-centerY lg:justify-start justify-center my-gap-24 tex:text-left text-center">
              <Smiley className="ph ph-boat text-brown-B400 md:text-6xl sm:text-5xl text-4xl" />
              <div>
                <CounterElement
                  counter={{
                    style:
                      "flex-center gap-2 text-43 font-semibold text-blue-B900 gap-mb-16 font-playfair",
                    counterNumber: 685,
                    sizeText: "+",
                  }}
                />
                <p className="text-18 text-blue-B300">Safisfied Clients</p>
              </div>
            </div>
            <div className="flex-centerY lg:justify-start justify-center my-gap-24 tex:text-left text-center">
              <BaseballCap className="ph ph-boat text-brown-B400 md:text-6xl sm:text-5xl text-4xl" />
              <div>
                <CounterElement
                  counter={{
                    style:
                      "flex-center gap-2 text-43 font-semibold text-blue-B900 gap-mb-16 font-playfair",
                    counterNumber: 90,
                    sizeText: "+",
                  }}
                />
                <p className="text-18 text-blue-B300">Expert Skipper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonToBook;
