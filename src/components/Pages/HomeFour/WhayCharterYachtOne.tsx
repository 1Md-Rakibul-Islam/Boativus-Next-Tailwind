import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import {
  AnchorSimple,
  ArrowDown,
  Boat,
  Crosshair,
  GlobeHemisphereEast,
  MapPinLine,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import boatIlistation1 from "@public/media/images/boat-ilistation1.png";

const WhayCharterYachtOne = () => {
  return (
    <section className="bg-white section-py overflow-hidden">
      <div className="container relative">
        <div className="relative z-[1]">
          <FadeUp className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center my-gap-24 section-pb ">
            <div className="p-24px flex-centerY my-gap-24 bg-white hover:shadow-3 my-transition rounded-10">
              <Image
                width={80}
                height={80}
                src="/media/icons/whay-charter-yacht-icon1.png"
                alt="icon"
              />
              <h5 className="text-24 text-blue-B900">Expert instructors</h5>
            </div>
            <div className="p-24px flex-centerY my-gap-24 bg-white hover:shadow-3 my-transition rounded-10">
              <Image
                width={80}
                height={80}
                src="/media/icons/whay-charter-yacht-icon2.png"
                alt="icon"
              />
              <h5 className="text-24 text-blue-B900">
                Best Yachts For Charter
              </h5>
            </div>
            <div className="p-24px flex-centerY my-gap-24 bg-white hover:shadow-3 my-transition rounded-10">
              <Image
                width={80}
                height={80}
                src="/media/icons/whay-charter-yacht-icon3.png"
                alt="icon"
              />
              <h5 className="text-24 text-blue-B900">
                Satisfaction Guaranteed
              </h5>
            </div>
            <div className="p-24px flex-centerY my-gap-24 bg-white hover:shadow-3 my-transition rounded-10">
              <Image
                width={80}
                height={80}
                src="/media/icons/whay-charter-yacht-icon4.png"
                alt="icon"
              />
              <h5 className="text-24 text-blue-B900">Cost-effectiveness</h5>
            </div>
          </FadeUp>
          <div className="grid xl:grid-cols-12 lg:grid-cols-2 grid-cols-1 xl:my-gap-24 gap-x-20 items-center">
            <div className="xl:col-start-1 xl:col-end-6 lg:mb-0 gap-mb-64">
              <div className="overflow-hidden">
                <Image
                  width={526}
                  height={702}
                  className="md:w-fit w-full mx-auto hover:scale-110 my-transition"
                  src="/media/images/why-charter-banner.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="xl:col-start-7 xl:col-end-13">
              <FadeDown>
                <h5 className="text-24 text-brown-B300 gap-mb-16">
                  Why charter a luxury yacht
                </h5>
                <h2 className="text-57 text-blue-B900 gap-mb-24">
                  The World Has Access to Highest Privilege and Independence
                </h2>
                <p className="text-18 text-blue-B90 gap-mb-40">
                  The possibilities are endless on a luxury charter boat, so
                  it&lsquo;s best to do some research beforehand.
                </p>
              </FadeDown>

              <FadeUp>
                <ul className="list-inside list-none grid sm:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-40">
                  <li className="flex-centerY gap-2">
                    <span className="w-10 h-10 flex-center rounded-full bg-brown-B400">
                      <Boat weight="fill" className="icon-24 text-white" />
                    </span>
                    <span className="text-18 font-semibold text-blue-B700">
                      Chartering a Yacht
                    </span>
                  </li>
                  <li className="flex-centerY gap-2">
                    <span className="w-10 h-10 flex-center rounded-full bg-brown-B400">
                      <AnchorSimple
                        weight="fill"
                        className="icon-24 text-white"
                      />
                    </span>
                    <span className="text-18 font-semibold text-blue-B700">
                      Chartering a Sailing Yacht
                    </span>
                  </li>
                  <li className="flex-centerY gap-2">
                    <span className="w-10 h-10 flex-center rounded-full bg-brown-B400">
                      <Crosshair weight="fill" className="icon-24 text-white" />
                    </span>
                    <span className="text-18 font-semibold text-blue-B700">
                      Charter Yacht Insurance
                    </span>
                  </li>
                  <li className="flex-centerY gap-2">
                    <span className="w-10 h-10 flex-center rounded-full bg-brown-B400">
                      <UsersThree
                        weight="fill"
                        className="icon-24 text-white"
                      />
                    </span>
                    <span className="text-18 font-semibold text-blue-B700">
                      Captain & Crew
                    </span>
                  </li>
                  <li className="flex-centerY gap-2">
                    <span className="w-10 h-10 flex-center rounded-full bg-brown-B400">
                      <GlobeHemisphereEast
                        weight="fill"
                        className="icon-24 text-white"
                      />
                    </span>
                    <span className="text-18 font-semibold text-blue-B700">
                      Destination
                    </span>
                  </li>
                  <li className="flex-centerY gap-2">
                    <span className="w-10 h-10 flex-center rounded-full bg-brown-B400">
                      <MapPinLine
                        weight="fill"
                        className="icon-24 text-white"
                      />
                    </span>
                    <span className="text-18 font-semibold text-blue-B700">
                      Top Worldwide Events
                    </span>
                  </li>
                </ul>
              </FadeUp>
              <div className="flex-centerY my-gap-24">
                <Link
                  href="/sell"
                  className="btn text-white hover:text-blue-B900 bg-blue-B700 hover:bg-brown-B300"
                >
                  Book now
                </Link>
                <Link
                  className="text-white hover:text-blue-B900 bg-blue-B700 hover:bg-brown-B300 flex-center md:w-16 w-11 md:h-16 h-11 rounded-full group"
                  href="/yachts"
                >
                  <ArrowDown className="text-2xl group-hover:-rotate-90 my-transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 animate-fade-slow-right">
        <Image
          width={552}
          height={686}
          className="animate-bounce-slow-top-2"
          src={boatIlistation1}
          alt="boat"
        />
      </div>
    </section>
  );
};

export default WhayCharterYachtOne;
