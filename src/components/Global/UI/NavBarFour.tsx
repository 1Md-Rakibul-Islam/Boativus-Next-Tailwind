"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navMenu } from "@public/data/navMenu";
import {
  CaretDown,
  Handbag,
  List,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import AnimateHeight from "react-animate-height";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "@public/media/icons/logo.png";

const NavBarFour = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState<number | null>(null);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const [height, setHeight] = useState<string | number>(0);
  const [scrolled, setScrolled] = useState(false);

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

  // Handle Search
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header
      id="header"
      className={`${
        scrolled && !hamburgerToggle
          ? "header-animation bg-blue-B1000 shadow-2xl"
          : "bg-transparent"
      } absolute w-full z-50`}
    >
      <div className="mx-auto relative">
        <div className="w-full xxl:px-[60px] xl:px-10 lg:px-8 md:px-7 sm:px-6 px-4 relative">
          <div className="flex items-center justify-between gap-x-2 mx-auto lg:py-6 md:py-5 sm:py-5 py-3.5">
            {/* Mobail Menu start */}
            <nav className="w-full flex justify-between items-center text-black sm:relative static">
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
                  } fixed overflow-y-scroll scrollbar scrollbar-sm top-0 left-0 bg-blue-B800 h-screen w-full shadow-lg z-[999] transform transition-transform ease-in-out sm:p-12 p-8 -translate-x-full duration-500 md:flex-center`}
                >
                  <div className="container flex justify-start items-start gap-8 flex-col">
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

                    <form
                      onSubmit={handleSearch}
                      className="sm:hidden flex-centerY rounded-tl-xl rounded-bl-xl shadow-2xl w-full"
                    >
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
                                  className="flex justify-start items-start "
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
                          <form
                            onSubmit={handleSearch}
                            className="flex-centerY rounded-tl-xl rounded-bl-xl shadow-2xl w-full"
                          >
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
                            <span className="text-left block">
                              7 am to 8 pm
                            </span>
                          </div>
                          <div>
                            <span className="text-left mb-1.5 block">
                              Sat - Sun:
                            </span>
                            <span className="text-left block">
                              10 pm to 9 am
                            </span>
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
              </div>
              <button
                onClick={() => setHamburgerToggle((prev) => !prev)}
                className="nav-toggole text-3xl cursor-pointer text-white hover:text-brown-B300 my-transition"
              >
                <List />
              </button>
            </nav>
            {/* Mobail Menu end */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarFour;
