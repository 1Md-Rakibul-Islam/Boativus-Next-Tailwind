import { headerProps } from "@/config/types";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderBannerOne = ({ headerData }: { headerData: headerProps }) => {
  const path = usePathname();
  return (
    <section className="w-full">
      <div className={`${headerData?.bgImgClasses}`}>
        <div className="container xxl:pt-[292px] xl:pt-64 lg:pt-56 md:pt-48 sm:pt-40 pt-32 xxl:pb-[208px] xl:pb-40 lg:pb-32 md:pb-24  sm:pb-20 pb-16">
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
    </section>
  );
};

export default HeaderBannerOne;
