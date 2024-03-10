import { usePathname } from "next/navigation";
import { headerProps } from "@/config/types";
import { ArrowRight } from "@phosphor-icons/react";

const HeaderBannerTwo = ({ headerData }: { headerData: headerProps }) => {
  const path = usePathname();
  return (
    <section className="w-full  relative overflow-hidden">
      <div className={`${headerData?.bgImgClasses}`}>
        <div className="container xxl:pt-[292px] xl:pt-64 lg:pt-56 md:pt-48 sm:pt-40 pt-32 xxl:pb-[208px] xl:pb-40 lg:pb-32 md:pb-24  sm:pb-20 pb-16 relative z-[1]">
          <h2 className="text-76 text-white gap-mb-32">{headerData?.title}</h2>
          <ul className="flex sm:flex-nowrap flex-wrap gap-2 w-full relative z-[1]">
            {headerData?.navLinks?.map((link) => (
              <li key={link?.id}>
                {link?.url === path || link.label === "Pages" ? (
                  <span
                    className={`font-medium text-lg leading-6 flex items-center gap-2 my-transition ${
                      path === link?.url && link.label === "Pages"
                        ? "text-white"
                        : path !== link?.url && link.label === "Pages"
                        ? "text-white"
                        : "text-brown-B300 hover:text-brown-B300"
                    }`}
                  >
                    {path === link?.url ? (
                      link?.label
                    ) : (
                      <>
                        {link?.label} <ArrowRight className="text-white" />
                      </>
                    )}
                  </span>
                ) : (
                  <Link
                    href={link?.url}
                    className={`${
                      path === link?.url &&
                      link.label !== "Pages" &&
                      "text-brown-B300"
                    } font-medium text-lg leading-6 text-white  hover:text-brown-B300 flex items-center gap-2`}
                  >
                    {path === link?.url ? (
                      link?.label
                    ) : (
                      <>
                        {link?.label} <ArrowRight className="text-white" />
                      </>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        draggable="false"
        className="xxl:w-[500px] xxl:h-[500px] md:w-[300px] md:h-[300px] md:block hidden absolute -left-[6%] -bottom-24 animate-spin-slow opacity-[0.3]"
        src="../media/icons/gallery-star-cercel.png"
        alt="img"
      />
      <div className="md:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          draggable="false"
          className="xxl:w-[500px] xxl:h-[500px] md:w-[320px] md:h-[320px] animate-spin-slow opacity-[0.16] rotate-180"
          src="../media/icons/gallery-star-cercel.png"
          alt="img"
        />
      </div>
    </section>
  );
};

export default HeaderBannerTwo;
