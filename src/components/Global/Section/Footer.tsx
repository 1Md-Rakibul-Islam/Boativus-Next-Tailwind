import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import {
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Preloader from "../UI/Preloader";

const Footer = ({ bgStyle }: { bgStyle: string }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Preloader />
      <footer className={`${bgStyle && bgStyle}`}>
        <div className="container">
          <div className="section-pt">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center my-gap-32 gap-mb-60">
              <Link to="/">
                <img src="../media/icons/logo.png" alt="logo" />
              </Link>
              <div className="flex-centerY my-gap-24">
                <a
                  href="#"
                  className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
                >
                  <FacebookLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </a>
                <a
                  href="#"
                  className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
                >
                  <LinkedinLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </a>
                <a
                  href="#"
                  className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
                >
                  <TwitterLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </a>

                <a
                  href="#"
                  className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
                >
                  <InstagramLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </a>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#324279] gap-mb-60"></div>
            <div className="grid grid-cols-12 my-gap-24 gap-mb-60">
              <FadeUp className="xxl:col-span-3 xl:col-span-2 sm:col-span-4 col-span-6">
                <h5 className="text-24 text-white gap-mb-24">About Us</h5>
                <ul className="text-18 text-white list-inside grid md:gap-4 sm:gap-3 gap-2.5">
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/about-1" className="my-transition">
                      About Us
                    </Link>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/services" className="my-transition">
                      Our Services
                    </Link>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <a href="/buy-yacht" className="my-transition">
                      Booking
                    </a>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/yachts" className="my-transition">
                      Yatch Rent
                    </Link>
                  </li>
                </ul>
              </FadeUp>
              <FadeDown className="xl:col-span-2 sm:col-span-4 col-span-6">
                <h5 className="text-24 text-white gap-mb-24">Information</h5>
                <ul className="text-18 text-white list-inside grid md:gap-4 sm:gap-3 gap-2.5">
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/sell-yacht" className="my-transition">
                      Shop
                    </Link>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/contact-us" className="my-transition">
                      Contact
                    </Link>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/yachts" className="my-transition">
                      Yatch
                    </Link>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/blogs/20" className="my-transition">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </FadeDown>
              <FadeUp className="xl:col-span-3 sm:col-span-4 col-span-12">
                <h5 className="text-24 text-white gap-mb-24">Quick Link</h5>
                <ul className="text-18 text-white list-inside grid md:gap-4 sm:gap-3 gap-2.5">
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/blogs" className="my-transition">
                      Our Blogs
                    </Link>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <Link to="/contact-us" className="my-transition">
                      Terms & Condition
                    </Link>
                  </li>
                  <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                    <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                    <a href="#" className="my-transition">
                      Privacy
                    </a>
                  </li>
                </ul>
              </FadeUp>
              <div className="xxl:col-span-4 xl:col-span-5 md:col-span-8 col-span-12 xl:mt-0 gap-mt-32">
                <form>
                  <h5 className="text-24 text-white gap-mb-24">
                    Subscribe Our Newsletter
                  </h5>
                  <div className="flex justify-between items-stretch w-full py-[5px] lg:pl-5 md:pl-4 pl-3 sm:pr-2.5 pr-2 bg-[#1C264A] rounded-10 gap-mb-24">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      className="rounded rounded-s-[4px] border-0 outline-none text-18 font-barlow text-blue-B50 bg-[#1C264A] pr-4 text-base w-full"
                      value=""
                    />
                    <button type="submit" className="btn bg-brown-B300">
                      Subscribe
                    </button>
                  </div>
                  <div className="flex gap-2 items-center customck">
                    <div className="flex relative">
                      <input
                        type="checkbox"
                        id="ch"
                        name="A3-confirmation"
                        value="ch"
                        className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5 cursor-pointer"
                      />
                      <div className="bg-blue-B60 border border-[rgba(255,255,255,0.16)] rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-primary">
                        <svg
                          className="fill-current hidden w-2.5 h-2.5 text-black pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="currentColor"
                              fill-rule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <label
                        htmlFor="ch"
                        className="select-none flex gap-2 cursor-pointer items-center text-18 text-white -mt-1"
                      >
                        I agree that my submitted data is being collected and
                        stored.
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="sm: hidden flex-centerY my-gap-24">
              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <FacebookLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>
              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <LinkedinLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>

              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <TwitterLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>

              <a
                href="#"
                className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <InstagramLogo
                  weight="fill"
                  className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>
            </div>
            <div className="w-full h-[1px] bg-[#324279] sm:mt-0 gap-mt-28"></div>
            <p className="text-18 text-white sm:text-left text-center py-32px">
              Copyright © <span>{currentYear}</span>,
              <a
                href="https://wrapbootstrap.com/user/softivus"
                className="text-brown-B300 font-bold"
              >
                {" "}
                Softivus
              </a>{" "}
              - All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
