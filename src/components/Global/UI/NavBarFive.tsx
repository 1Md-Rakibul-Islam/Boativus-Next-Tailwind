"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navMenu } from "@public/data/navMenu";
import {
  CaretDown,
  FacebookLogo,
  Handbag,
  InstagramLogo,
  LinkedinLogo,
  List,
  MagnifyingGlass,
  TwitterLogo,
  X,
} from "@phosphor-icons/react";
import { useDropdown } from "@/hooks";
import AnimateHeight from "react-animate-height";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "@public/media/icons/logo.png";

const languages = ["Bangla", "English", "Hindi", "Arabic"];

const NavBarFive = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState<number | null>(null);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [height, setHeight] = useState<string | number>(0);
  const [scrolled, setScrolled] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Searchbar
  const {
    handleOption: handleOptionSearch,
    open: searchOpen,
    ref: searchRef,
  } = useDropdown();

  //Language Select
  const {
    open: openLanguage,
    handleOption: handleLanguagesOption,
    ref: languagesRef,
  } = useDropdown();

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

  return (
    <header
      id="header"
      className={`${
        scrolled && !hamburgerToggle ? "header-animation shadow-2xl" : ""
      } absolute w-full z-50`}
    >
      <div className="mx-auto relative">
        <div
          className={`bg-primary-1 py-4 ${
            scrolled ? "hidden" : "lg:block hidden"
          } container bg-transparent w-full xl:py-5 py-4`}
        >
          <div className="flex items-center justify-between text-white">
            <div className="sm:flex-centerY hidden my-gap-24">
              <a
                href="#"
                className="flex-center w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <FacebookLogo
                  weight="fill"
                  className="text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>
              <a
                href="#"
                className="flex-center w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <LinkedinLogo
                  weight="fill"
                  className="text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>
              <a
                href="#"
                className="flex-center w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <TwitterLogo
                  weight="fill"
                  className="text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>

              <a
                href="#"
                className="flex-center w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group"
              >
                <InstagramLogo
                  weight="fill"
                  className="text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                />
              </a>
            </div>
            <div
              ref={searchRef}
              className="flex items-center gap-x-11 py-1 z-[1]"
            >
              <div className="flex items-center gap-5 relative">
                <button
                  onClick={() => {
                    handleOptionSearch();
                  }}
                  className="search text-base text-white flex-centerY gap-3"
                >
                  <MagnifyingGlass className="text-3xl text-white" />
                  Search
                </button>
                <div
                  className={`${
                    searchOpen ? "translate-y-0" : "-translate-y-[500px]"
                  } absolute -left-20 top-24 my-transition-2`}
                >
                  <form className="flex-centerY rounded-tl-xl rounded-bl-xl shadow-2xl w-full">
                    <input
                      type="text"
                      name="search"
                      className="bg-white p-3 px-4 outline-none text-18 rounded-tl-xl rounded-bl-xl"
                    />
                    <button
                      type="submit"
                      className="bg-blue-B700 p-2.5 rounded-tr-xl rounded-br-xl"
                    >
                      <MagnifyingGlass className="text-3xl text-white" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="bg-white h-7 w-[2px]"></div>
              <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                <div className="relative xxl:w-[114px] w-[100px]">
                  <div ref={languagesRef}>
                    <Listbox.Button
                      className="flex justify-between items-start gap-3 relative cursor-pointer w-full"
                      onClick={handleLanguagesOption}
                    >
                      <span className="flex-centerY gap-2 w-full">
                        <span className="block text-left my-text-18 text-white my-transition leading-7">
                          {selectedLanguage}
                        </span>
                      </span>
                      <CaretDown
                        className={` icon-24 text-2xl block ${
                          openLanguage
                            ? "rotate-180 duration-500"
                            : " duration-500 "
                        } text-white`}
                      />
                    </Listbox.Button>
                  </div>
                  <Listbox.Options className="shadow-7 w-full max-h-[232px] bg-white text-secondary py-4 absolute grid gap-1 overflow-y-auto scrollbar scrollbar-0 rounded-md z-[3]">
                    {languages?.map((item, idx) => (
                      <Listbox.Option key={idx} value={item}>
                        <li
                          className={` ${
                            selectedLanguage === item
                              ? "font-bold bg-white-2"
                              : "font-normal bg-white"
                          } text-blue-B900  my-text-18 whitespace-nowrap rounded-md px-4 py-2 hover:bg-white-2 cursor-pointer my-transition group`}
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
        <div
          id="header-nav"
          className="w-full xxl:px-[60px] relative bg-blue-B900"
        >
          <div className="container flex items-center justify-between gap-x-2 mx-auto lg:py-6 md:py-5 sm:py-5 py-3.5">
            <nav className="w-full xl:flex justify-between items-center text-black hidden text-semibold">
              <div className="flex justify-between items-center">
                <ul className="flex justify-center items-center gap-3 lg:gap-5">
                  {navMenu?.slice(0, 4)?.map((menu, idx) => (
                    <li
                      key={menu?.id}
                      onMouseEnter={() => handleHover(idx)}
                      onMouseLeave={() => handleHover(idx)}
                      className={`${
                        isMenuActive(menu) ? "text-brown-B300" : "text-white"
                      } text-lg font-semibold hover:cursor-pointer hover:text-brown-B300 flex justify-center items-center group relative my-transition`}
                    >
                      {menu?.isSubMenu ? (
                        <>
                          <span>{menu?.name}</span>
                          <CaretDown className="ml-2 text-xl group-hover:text-brown-B300 group-hover:-rotate-180 my-transition" />
                        </>
                      ) : (
                        <Link href={menu.link!}>{menu?.name}</Link>
                      )}

                      {menu?.isSubMenu && (
                        <ul
                          className={`shadow-6 w-44 z-[300] bg-blue-B700 opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute top-4 left-0 my-transition group-hover:translate-y-8 translate-y-14  p-4 flex flex-col justify-start items-start gap-4 rounded-lg group`}
                        >
                          {menu?.subMenu?.map(({ id, name, link }) => (
                            <li
                              key={id}
                              className={` ${
                                path === link ? "text-brown-B300" : "text-white"
                              } hover:text-brown-B300 w-full hover:translate-x-1 my-transition`}
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
              <div className="relative flex-centerY justify-end gap-x-14 ">
                {/* Big logo start */}
                <Link href="/" className="absolute xxl:-left-56 -left-44 block">
                  <Image
                    width={160}
                    height={140}
                    className="xxl:w-[160px] w-[140px]"
                    src="/media/images/logo-big-cercel.png"
                    alt="icon"
                  />
                </Link>
                {/* Big logo end */}
                <ul className="flex justify-center items-center gap-3 lg:gap-5">
                  {navMenu?.slice(4, 7)?.map((menu, idx) => (
                    <li
                      key={menu?.id}
                      onMouseEnter={() => handleHover(idx)}
                      onMouseLeave={() => handleHover(idx)}
                      className={`${
                        isMenuActive(menu) ? "text-brown-B300" : "text-white"
                      } text-lg font-semibold hover:cursor-pointer hover:text-brown-B300 flex justify-center items-center group relative my-transition`}
                    >
                      {menu?.isSubMenu ? (
                        <>
                          <span>{menu?.name}</span>
                          <CaretDown className="ml-2 text-xl group-hover:text-brown-B300 group-hover:-rotate-180 my-transition" />
                        </>
                      ) : (
                        <Link href={menu.link!}>{menu?.name}</Link>
                      )}

                      {menu?.isSubMenu && (
                        <ul
                          className={`shadow-6 w-44 z-[300] bg-blue-B700 opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute top-4 left-0 my-transition group-hover:translate-y-8 translate-y-14  p-4 flex flex-col justify-start items-start gap-4 rounded-lg group`}
                        >
                          {menu?.subMenu?.map(({ id, name, link }) => (
                            <li
                              key={id}
                              className={` ${
                                path === link ? "text-brown-B300" : "text-white"
                              } hover:text-brown-B300 w-full hover:translate-x-1 my-transition`}
                            >
                              <Link href={link}>{name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className="btn bg-[#212B4EC2] hover:bg-brown-B300 hover:text-blue-B900 text-white"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
            {/* Mobail Menu start */}
            <nav className="w-full flex justify-between items-center text-black xl:hidden">
              <div className="relative">
                <Link href="/">
                  <Image
                    width={142}
                    height={34}
                    className="w-[142px] h-[34px]"
                    src={brandLogo}
                    alt="brand"
                  />
                </Link>
                <div
                  className={`${
                    hamburgerToggle ? "translate-x-0" : "-translate-x-full"
                  } small-nav fixed overflow-y-scroll scrollbar scrollbar-sm top-0 left-0 bg-blue-B800 h-screen w-full shadow-lg z-[999] transform transition-transform ease-in-out sm:p-12 p-8 -translate-x-full duration-500 flex justify-start items-start gap-8 flex-col`}
                >
                  <div className="relative flex justify-between items-center w-full">
                    <Link
                      href="/"
                      onClick={() => setHamburgerToggle((prev) => !prev)}
                      className="sm:hidden block"
                    >
                      <Image
                        width={142}
                        height={34}
                        className="w-[142px] h-[34px]"
                        src={brandLogo}
                        alt="brand"
                      />
                    </Link>
                    <button
                      onClick={() => setHamburgerToggle((prev) => !prev)}
                      className="nav-close absolute right-0 text-2xl cursor-pointer hover:duration-200 text-white hover:text-brown-B300"
                    >
                      <X />
                    </button>
                  </div>

                  <form className="sm:hidden flex-centerY rounded-tl-xl rounded-bl-xl shadow-2xl w-full">
                    <input
                      type="text"
                      name="search"
                      className="bg-white p-3 px-4 outline-none text-18 rounded-tl-xl rounded-bl-xl w-full"
                    />
                    <button
                      type="submit"
                      className="bg-blue-B700 p-2.5 rounded-tr-xl rounded-br-xl"
                    >
                      <MagnifyingGlass className="text-3xl text-white" />
                    </button>
                  </form>

                  <div className="grid md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-12 w-full">
                    <div className="md:col-span-8">
                      <ul className="flex flex-col justify-center items-start gap-5">
                        {navMenu?.map((menu, idx) => (
                          <li
                            className={` ${
                              isMenuActive(menu)
                                ? "text-brown-B300"
                                : "text-white"
                            } text-24 hover:text-brown-B300 cursor-pointer group relative border-b border-brown-B100 w-full pb-2 `}
                            key={menu.id}
                            onClick={() => handleHover(idx)}
                          >
                            {menu?.isSubMenu ? (
                              <span
                                onClick={() =>
                                  setHeight(height === 0 ? "auto" : 0)
                                }
                                className="flex justify-start items-center "
                              >
                                <span className="group-hover:text-brown-B300 my-transition">
                                  {menu?.name}
                                </span>
                                <CaretDown
                                  className={`${
                                    toggle === idx ? "rotate-180" : "rotate-0"
                                  } collapse-icon ml-2 text-xl group-hover:text-brown-B300 my-transition `}
                                />
                              </span>
                            ) : (
                              <Link
                                href={menu.link!}
                                className={`${
                                  path === menu.link
                                    ? "text-brown-B300"
                                    : "text-white"
                                } text-24 hover:text-brown-B300 my-transition border-brown-B100 w-full pb-5`}
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
                              <ul className="pt-2">
                                {menu?.subMenu?.map((subItem, j) => (
                                  <li
                                    key={j}
                                    onClick={() =>
                                      setHamburgerToggle((prev) => !prev)
                                    }
                                    className="pb-3"
                                  >
                                    <Link
                                      href={subItem?.link}
                                      aria-label="item"
                                      className={`${
                                        path === subItem?.link
                                          ? "text-brown-B300"
                                          : "text-white"
                                      } text-20 hover:text-brown-B300 my-transition `}
                                    >
                                      <span className="px-2">-</span>
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
                    <div className="md:col-span-4 flex flex-col justify-between my-gap-24">
                      <div className="sm:block hidden">
                        <div className="flex-centerY justify-between gap-2 gap-mb-20">
                          <Link href="/">
                            <Image
                              width={142}
                              height={34}
                              className="w-[142px] h-[34px]"
                              src={brandLogo}
                              alt="brand"
                            />
                          </Link>
                          <Link href="/orders" className="relative">
                            <Handbag className="text-3xl text-white" />
                            <span className="absolute bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex-center bg-blue-B500  text-xs text-white">
                              2
                            </span>
                          </Link>
                        </div>
                        <form className="flex-centerY rounded-tl-xl rounded-bl-xl shadow-2xl w-full">
                          <input
                            type="text"
                            name="search"
                            className="bg-white p-3 px-4 outline-none text-18 rounded-tl-xl rounded-bl-xl w-full"
                          />
                          <button
                            type="submit"
                            className="bg-blue-B700 p-2.5 rounded-tr-xl rounded-br-xl"
                          >
                            <MagnifyingGlass className="text-3xl text-white" />
                          </button>
                        </form>
                      </div>

                      <div className="grid gap-5 text-white">
                        <div>
                          <span className="text-left mb-1.5 block">
                            Mon - Dec:
                          </span>
                          <span className="text-left block">7 am to 8 pm</span>
                        </div>
                        <div>
                          <span className="text-left mb-1.5 block">
                            Sat - Sun:
                          </span>
                          <span className="text-left block">10 pm to 9 am</span>
                        </div>
                        <div>
                          <span className="text-left mb-1.5 block">
                            Call us:
                          </span>
                          <Link href="tel:+0327888111" className="block">
                            +0327 888 111
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 md:gap-5">
                <Link href="/orders" className="hidden md:block relative">
                  <Handbag className="text-3xl text-white" />
                  <span className="absolute bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex-center bg-blue-B500  text-xs text-white">
                    2
                  </span>
                </Link>
                <div ref={searchRef} className="hidden md:block relative">
                  <button
                    onClick={() => {
                      handleOptionSearch();
                    }}
                  >
                    <MagnifyingGlass className="text-3xl text-white" />
                  </button>
                  <div
                    className={`${
                      searchOpen ? "translate-y-0" : "-translate-y-[500px]"
                    } absolute -left-20 top-20 my-transition-2`}
                  >
                    <form className="flex-centerY rounded-tl-xl rounded-bl-xl shadow-2xl w-full">
                      <input
                        type="text"
                        name="search"
                        className="bg-white p-3 px-4 outline-none text-18 rounded-tl-xl rounded-bl-xl"
                      />
                      <button
                        type="submit"
                        className="bg-blue-B700 p-2.5 rounded-tr-xl rounded-br-xl"
                      >
                        <MagnifyingGlass className="text-3xl text-white" />
                      </button>
                    </form>
                  </div>
                </div>
                <Link
                  href="/register"
                  className="hidden md:block btn bg-[#212B4EC2] hover:bg-brown-B300 hover:text-blue-B900 text-white"
                >
                  Sign Up
                </Link>
                <button
                  onClick={() => setHamburgerToggle((prev) => !prev)}
                  className="nav-toggole text-3xl cursor-pointer text-white hover:text-brown-B300 my-transition"
                >
                  <List />
                </button>
              </div>
            </nav>
            {/* Mobail Menu end */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarFive;
