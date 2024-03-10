import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";
import {
  Anchor,
  Boat,
  Crosshair,
  GlobeHemisphereEast,
  MapPinLine,
  PhoneCall,
  UsersThree,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="bg-white section-py yacht-categories overflow-hidden">
      <div className="container">
        <div className="grid xl:grid-cols-12 grid-cols-1 my-gap-24 items-center">
          <FadeLeft className="xl:col-start-1 3xl:col-end-7 xl:col-end-8 xl:mb-0 gap-mb-60 sm:text-left text-center">
            <h5 className="text-24 text-brown-B300 gap-mb-16">
              About luxury yacht
            </h5>
            <h2 className="text-57 text-blue-B800 gap-mb-24">
              Join us on your next <br className="md:block hidden" />
              Exciting Yacht or Boat Trip!
            </h2>
            <p className="text-18 text-blue-B300 gap-mb-24">
              The possibilities are endless on a luxury charter boat, so it's
              best to do some research beforehand.
            </p>
            <ul className="list-inside list-none grid sm:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-40">
              <li className="flex-centerY gap-2">
                <Boat weight="fill" className="text-24 text-brown-B400" />
                <span className="text-18 text-blue-B700">
                  Chartering a Yacht
                </span>
              </li>
              <li className="flex-centerY gap-2">
                <Anchor weight="fill" className="text-24 text-brown-B400" />
                <span className="text-18 text-blue-B700">
                  Chartering a Sailing Yacht
                </span>
              </li>
              <li className="flex-centerY gap-2">
                <Crosshair weight="fill" className="text-24 text-brown-B400" />
                <span className="text-18 text-blue-B700">
                  Charter Yacht Insurance
                </span>
              </li>
              <li className="flex-centerY gap-2">
                <UsersThree weight="fill" className="text-24 text-brown-B400" />
                <span className="text-18 text-blue-B700">Captain & Crew</span>
              </li>
              <li className="flex-centerY gap-2">
                <GlobeHemisphereEast
                  weight="fill"
                  className="text-24 text-brown-B400"
                />
                <span className="text-18 text-blue-B700">Destination</span>
              </li>
              <li className="flex-centerY gap-2">
                <MapPinLine weight="fill" className="text-24 text-brown-B400" />
                <span className="text-18 text-blue-B700">
                  Top Worldwide Events
                </span>
              </li>
            </ul>
            <div className="flex-centerY my-gap-24">
              <Link
                to="/about-1"
                className="btn bg-blue-B700 hover:bg-brown-B300 text-white hover:text-blue-B900"
              >
                About Us
              </Link>
              <a
                href="tel:+252.555.0126"
                className="text-18 text-blue-B700 inline-flex items-center gap-2"
              >
                <span className="flex-center lg:p-5 md:p-4 sm:p-3 p-2.5 rounded-full bg-blue-B700 hover:bg-brown-B300 text-white hover:text-blue-B900 my-transition">
                  <PhoneCall className="text-2xl" />
                </span>
                +252.555.0126
              </a>
            </div>
          </FadeLeft>
          <FadeRight className="3xl:col-start-8 xl:col-start-8 xl:col-end-13 xl:flex-center w-full h-full ">
            <div className=" 3xl:max-w-[unset] 3xl:w-full 3xl:h-full sm:w-[560px] sm:h-[536px] sm:relative">
              <img
                className="sm:absolute top-0 left-0 rounded-full border-[12px] border-white z-[1] sm:max-w-[310px] sm:min-w-fit sm:block hidden animate-bounce-slow-left"
                src="../media/images/aboutUs1.png"
                alt="about"
              />
              <img
                className="sm:absolute sm:left-1/3 left-0 bottom-0 rounded-full sm:max-w-[504px] sm:min-w-fit animate-bounce-slow-down"
                src="../media/images/aboutUs2.png"
                alt="about"
              />
              <img
                className="sm:absolute bottom-0 md:-right-1/3 md:left-auto left-0 rounded-full border-[12px] border-white z-[1] sm:max-w-[310px] sm:min-w-fit sm:block hidden animate-bounce-slow-right"
                src="../media/images/aboutUs3.png"
                alt="about"
              />
              <img
                className="sm:absolute 3xl:top-[18%] top-0 right-0 z-[1] animate-bounce-slow-top sm:block hidden"
                src="../media/images/cloud.png"
                alt="about"
              />
              <div className="sm:absolute 3xl:bottom-[18%] bottom-0 left-[20%] z-[1] animate-bounce-slow-left sm:flex-centerY gap-2.5 hidden bg-white rounded-full py-1.5 px-4 shadow-md">
                <img
                  draggable="false"
                  src="../media/icons/location.png"
                  alt="icon"
                />
                <span className="text-18 text-black">New York</span>
              </div>
              <div className="sm:absolute 3xl:top-[30%] top-0 3xl:-right-[20%] ring-0 z-[1] animate-bounce-slow-left sm:flex-centerY gap-2.5 hidden bg-white rounded-full py-1.5 px-4 shadow-md">
                <img
                  draggable="false"
                  src="../media/icons/star.png"
                  alt="icon"
                />
                <span className="text-18 text-black">5.0</span>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
