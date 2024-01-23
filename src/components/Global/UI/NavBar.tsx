"use client";

import {
  default as brandLogo,
  default as brandLogoLg,
} from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { navMenu } from "@/../public/data/navMenu";
import { BookingCard, Modal, NavSearchBar } from "./";
import { CaretDown, List, Tote, X } from "@phosphor-icons/react";

const NavBar = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState<number | null>(null);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [height, setHeight] = useState<string | number>(0);

  const toggleHandle = (idx: number) => {
    if (toggle === idx) {
      setToggle(null);
    } else {
      setToggle(idx);
    }
  };

  const handleHover = (idx: number) => {
    toggleHandle(idx);
  };

  const [scrolled, setScrolled] = useState(false);

  // scroll to top on reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  // scroll to add navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Add the event listener
    document.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface MenuItem {
    id: number;
    name: string;
    isSubMenu: boolean;
    link?: string; // Link is optional for parent menu items
    subMenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
  }

  interface SubMenuItem {
    id: number;
    name: string;
    link: string;
  }
  const isMenuActive = (menu: MenuItem) => {
    if (menu.isSubMenu && menu.subMenu) {
      return menu.subMenu.some((submenu: SubMenuItem) => path === submenu.link);
    }
    return path === menu.link;
  };

  // Wallet Modal
  const [open, setOpen] = useState(false);
  const handleModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <header
      id="header"
      className={`${scrolled ? "header-animation bg-blue-B900" : "absolute"}
       w-full
`}
    >
      <div className="mx-auto relative">
        <div
          className={`bg-transparent py-4 ${
            scrolled ? "hidden" : "lg:block"
          } w-full hidden py-2.5 border-b border-[#7894CB]`}
        >
          <div className="grid grid-cols-2 text-16 text-white 3xl:px-[60px] xxl:px-14 xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4">
            <p className="text-left">
              Mon - Dec: 7 am to8 pm & Sat - Sun: 10 pm to 9 am
            </p>
            <span className="text-right">Call us: +0327 888 111</span>
          </div>
        </div>
        <div className="w-full xxl:px-[60px] xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 relative">
          <div
            className={` flex items-center justify-between gap-x-2 mx-auto lg:py-6 md:py-5 sm:py-5 py-3.5`}
          >
            {/* Desktop Menu */}
            <nav className="w-full xl:flex justify-between items-center text-black hidden text-semibold">
              <Link href="/">
                <Image width={142} height={34} src={brandLogo} alt="brand" />
              </Link>
              <div>
                <ul className="flex justify-center items-center gap-3 lg:gap-5">
                  {navMenu?.map((menu, idx) => (
                    <li
                      key={menu?.id}
                      onMouseEnter={() => handleHover(idx)}
                      onMouseLeave={() => handleHover(idx)}
                      className={`${
                        isMenuActive(menu) ? "text-black" : "text-white"
                      } hover:cursor-pointer  text-16 font-bold font-lexend leading-[130%] hover:text-black flex justify-center items-center group relative`}
                    >
                      {menu?.isSubMenu ? (
                        <>
                          <span className=" btn-linebar-effect">
                            {menu?.name}
                          </span>

                          <CaretDown
                            className={`sm:w-6 sm:h-6 w-5 h-5 sm:ml-2 ml-1.5 hover:rotate-180 duration-700 ease-in-out text-2xl ${
                              toggle === idx ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </>
                      ) : (
                        <Link href={menu?.link!} className="btn-linebar-effect">
                          {menu?.name}
                        </Link>
                      )}
                      {menu?.isSubMenu && (
                        <ul
                          className={`shadow-[0px_1px_12px_0px_#000000b5] w-44 z-[300] bg-BG opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute top-7 left-0 my-transition ease-out duration-300 ${
                            toggle === idx ? "translate-y-0" : "translate-y-8"
                          } p-4 flex flex-col justify-start items-start gap-4 rounded-lg group`}
                        >
                          {menu?.subMenu?.map(({ id, name, link }) => (
                            <li
                              key={id}
                              className={` ${
                                path === link ? "text-black" : "text-white"
                              } text-16 font-bold font-lexend leading-[130%] hover:text-black w-full hover:translate-x-1 duration-700`}
                            >
                              <Link href={link}>{name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center flex-wrap gap-5 font-inter text-lg font-medium md:leading-[30px] leading-6 relative">
                <Tote size={30} className="text-white" />
                <NavSearchBar />
                <button
                  onClick={handleModal}
                  className="btn bg-[#212B4EC2] text-white"
                >
                  Book now
                </button>
              </div>
            </nav>
            {/* Mobile Menu */}
            <nav className="w-full flex justify-between items-center text-black xl:hidden">
              <div className="relative">
                <Link href="/" aria-label="logo_main">
                  <div className="flex gap-2 items-center">
                    <Image
                      width={142}
                      height={34}
                      src={brandLogo}
                      alt="coinx"
                    />
                  </div>
                </Link>
                <div
                  className={`fixed overflow-y-scroll scrollbar scrollbar-sm top-0 left-0 bg-BG h-screen w-full  shadow-lg z-20 transform transition-transform ease-in-out duration-500 p-8 ${
                    hamburgerToggle
                      ? "translate-x-0 duration-500"
                      : "-translate-x-full duration-500"
                  } duration-500 flex justify-start items-start gap-8 flex-col`}
                >
                  <div className="relative flex justify-between items-center w-full">
                    <Link
                      href="/"
                      onClick={() => setHamburgerToggle((prev) => !prev)}
                    >
                      <Image
                        width={142}
                        height={34}
                        src={brandLogoLg}
                        alt="coinx"
                      />
                    </Link>
                    <X
                      className="text-2xl cursor-pointer hover:duration-200 text-white hover:text-black"
                      onClick={() => setHamburgerToggle((prev) => !prev)}
                    />
                  </div>
                  <div className="w-full">
                    <ul className="flex flex-col justify-center items-start gap-5">
                      {navMenu?.map((menu, idx) => (
                        <li
                          className={`  ${
                            (menu.name === "Services" || "Blogs") &&
                            isMenuActive(menu)
                              ? "text-black"
                              : "text-white"
                          }  hover:text-black hover:duration-700 text-16 font-bold font-lexend leading-[130%] cursor-pointer duration-500 group relative active:bg-transparent focus:bg-transparent`}
                          key={menu.id}
                          onClick={() => handleHover(idx)}
                        >
                          {menu?.isSubMenu ? (
                            <div
                              className="flex justify-start items-start"
                              onClick={() =>
                                setHeight(height === 0 ? "auto" : 0)
                              }
                            >
                              {menu?.name}
                              {menu?.isSubMenu && (
                                <CaretDown
                                  className={`sm:w-6 sm:h-6 w-5 h-5 sm:ml-2 ml-1.5 hover:rotate-180 duration-300 
                                 ${toggle === idx ? "rotate-180" : "rotate-0"}`}
                                />
                              )}
                            </div>
                          ) : (
                            <Link
                              href={menu.link!}
                              className={`${
                                path === menu.link ? "text-black" : "text-white"
                              } hover:text-black hover:duration-700 text-16 font-bold font-lexend leading-[130%]`}
                              onClick={() =>
                                setHamburgerToggle((prev) => !prev)
                              }
                            >
                              {menu.name}
                            </Link>
                          )}
                          <AnimateHeight
                            duration={500}
                            height={toggle === idx ? "auto" : 0}
                          >
                            <ul className={`pt-2`}>
                              {menu?.subMenu?.map((subItem, j) => (
                                <li
                                  key={j}
                                  className="hover:text-black  text-white hover:duration-700 text-16 font-bold font-lexend leading-[130%] pb-3"
                                  onClick={() =>
                                    setHamburgerToggle((prev) => !prev)
                                  }
                                >
                                  <Link
                                    href={subItem?.link}
                                    aria-label="item"
                                    className={`${
                                      path === subItem?.link
                                        ? "text-black"
                                        : "text-white"
                                    } text-16 font-bold font-lexend leading-[130%]`}
                                  >
                                    <span className={`px-2`}>-</span>{" "}
                                    {subItem?.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AnimateHeight>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-between gap-4 md:gap-5">
                <NavSearchBar />
                <button onClick={handleModal} className="btn btn-primary  ">
                  Connect Wallet
                </button>
                {!hamburgerToggle && (
                  <List
                    onClick={() => setHamburgerToggle((prev) => !prev)}
                    className="text-3xl cursor-pointer hover:duration-200 text-white hover:text-black"
                  />
                )}
              </div>
            </nav>
            <Modal onClick={handleModal} open={open}>
              <BookingCard />
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;