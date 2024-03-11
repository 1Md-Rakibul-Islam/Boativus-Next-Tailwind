import FadeUp from "@/motion/FadeUp";
import {
  ArrowCircleRight,
  CalendarCheck,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const YachtOfferDetails = () => {
  return (
    <section className="section-py bg-white">
      <div className="bg-[url('/media/images/yacht-detailsBG.png')] relative bg-cover bg-top 3xl:h-[800px] xxl:h-[720px] xl:h-[668px] lg:h-[600px] md:h-[580px] sm:h-[500px] h-[420px]"></div>
      <div className="container relative -mt-[180px] z-[1] ">
        <FadeUp className="relative bg-blue-B900 xl:py-16 lg:py-14 md:py-12 sm:py-11 py-9 sm:px-5 px-4 flex-center flex-col">
          <span className="absolute top-0 left-0 bg-white text-18 font-bold text-blue-B900 md:p-[13px] p-2 sm:rounded-br-[20px] rounded-br-2xl">
            Up To 10% Off
          </span>
          <div className="flex items-center sm:justify-between justify-center sm:flex-nowrap flex-wrap my-gap-32 gap-mb-32 md:pt-0 pt-3">
            <div className="flex-centerY gap-2 text-white">
              <CalendarCheck />
              <span>14.01.2023 — 21.01.2023</span>
            </div>
            <div className="flex-centerY my-gap-20 text-white">
              <span className="flex-centerY gap-2.5 text-white">
                <Image
                  width={26}
                  height={13}
                  src="/media/images/flag1.png"
                  alt="flag"
                />
                <span>Canada</span>
              </span>
              <span className="flex-centerY gap-2.5 text-white">
                <Timer />
                <span>7 Days</span>
              </span>
            </div>
          </div>
          <h5 className="text-24 text-white text-center gap-mb-16">
            Sunreef 60 SINATA
          </h5>
          <div className="flex-center md:flex-nowrap flex-wrap gap-4 md:divide-x divide-white gap-mb-40">
            <div className="md:pr-4 flex-centerY gap-2 text-white">
              <Image
                width={20}
                height={20}
                src="/media/icons/sinata1.png"
                alt="icon"
              />
              <span>4 psc</span>
            </div>
            <div className="md:px-4 flex-centerY gap-2 text-white">
              <Image
                width={20}
                height={20}
                src="/media/icons/sinata2.png"
                alt="icon"
              />
              <span>2022 year</span>
            </div>
            <div className="md:px-4 flex-centerY gap-2 text-white">
              <Image
                width={20}
                height={20}
                src="/media/icons/sinata4.png"
                alt="icon"
              />
              <span>800 litre</span>
            </div>
            <div className="md:px-4 flex-centerY gap-2 text-white">
              <Image
                width={20}
                height={20}
                src="/media/icons/sinata5.png"
                alt="icon"
              />
              <span>1000 litre</span>
            </div>
            <div className="md:pl-4 flex-centerY gap-2 text-white">
              <Image
                width={20}
                height={20}
                src="/media/icons/sinata6.png"
                alt="icon"
              />
              <span>18.3 meter</span>
            </div>
          </div>
          <div className="flex items-center sm:justify-between justify-center sm:flex-nowrap flex-wrap my-gap-40">
            <div className="flex-centerY sm:gap-4 gap-3">
              <h5 className="text-32 text-white">€23,200</h5>
              <span className="text-18 text-white opacity-50">€28,200</span>
            </div>
            <Link
              href="/yachts"
              className="btn bg-blue-B700 group text-white flex-centerY gap-2.5 my-transition whitespace-nowrap"
            >
              Reserve
              <ArrowCircleRight
                width={20}
                className=" group-hover:rotate-90 my-transition "
              />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default YachtOfferDetails;
