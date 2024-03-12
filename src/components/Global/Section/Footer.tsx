import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import {
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "@public/media/icons/logo.png";
import { Subscribe } from "../UI";

const Footer = ({ bgStyle }: { bgStyle: string }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${bgStyle && bgStyle}`}>
      <div className="container">
        <div className="section-pt">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center my-gap-32 gap-mb-60">
            <Link href="/">
              <Image src={brandLogo} alt="logo" />
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
                  <Link href="/about-one" className="my-transition">
                    About Us
                  </Link>
                </li>
                <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                  <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                  <Link href="/services" className="my-transition">
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
                  <Link href="/yachts" className="my-transition">
                    Yatch Rental
                  </Link>
                </li>
              </ul>
            </FadeUp>
            <FadeDown className="xl:col-span-2 sm:col-span-4 col-span-6">
              <h5 className="text-24 text-white gap-mb-24">Information</h5>
              <ul className="text-18 text-white list-inside grid md:gap-4 sm:gap-3 gap-2.5">
                <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                  <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                  <Link href="/sell-yacht" className="my-transition">
                    Shop
                  </Link>
                </li>
                <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                  <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                  <Link href="/contact-us" className="my-transition">
                    Contact
                  </Link>
                </li>
                <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                  <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                  <Link href="/yachts" className="my-transition">
                    Yatch
                  </Link>
                </li>
                <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                  <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                  <Link href="/blogs/6" className="my-transition">
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
                  <Link href="/blogs" className="my-transition">
                    Our Blogs
                  </Link>
                </li>
                <li className="group hover:translate-x-5 -translate-x-5 inline-flex items-center gap-1 my-transition-2 max-w-fit">
                  <CaretRight className="group-hover:visible invisible group-hover:opacity-100 opacity-0 my-transition-2" />
                  <Link href="/contact-us" className="my-transition">
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
              <h5 className="text-24 text-white gap-mb-24">
                Subscribe Our Newsletter
              </h5>
              <Subscribe />
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
  );
};

export default Footer;
