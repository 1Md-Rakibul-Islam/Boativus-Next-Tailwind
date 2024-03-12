import Link from "next/link";
import CounterElement from "../../Global/UI/CounterElement";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import Image from "next/image";
import boatIlistation1 from "@public/media/images/boat-ilistation1.png";

const JoinUs = () => {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      <div className="container">
        <div className="grid xxl:grid-cols-12 xl:grid-cols-2 grid-cols-1 items-center my-gap-24 z-[1] relative">
          <div className="xxl:col-start-1 xxl:col-end-7 h-full relative xl:order-1 order-2 sm:block grid my-gap-24">
            <div className="xxl:block flex-center">
              <div className="xxl:max-w-[unset] xxl:w-full xxl:h-full sm:w-[684px] sm:h-[536px] sm:relative ">
                <div className="sm:absolute top-0 left-0 sm:block grid my-gap-24">
                  <Image
                    width={275}
                    height={275}
                    className="sm:max-w-[275px] sm:min-w-min w-full relative z-[2] hover:z-[4] sm:hover:scale-110 my-transition"
                    src="/media/images/yacthExprience1.png"
                    alt=""
                  />
                  <Image
                    width={335}
                    height={335}
                    className="sm:max-w-[275px] sm:min-w-min w-full relative z-0 hover:z-[4] sm:-mt-[16%] sm:-ml-[16%] sm:hover:scale-110 my-transition"
                    src="/media/images/yacthExprience2.png"
                    alt=""
                  />
                </div>
                <div className="sm:absolute bottom-0 top-0 right-0 z-[3]">
                  <div className="text-center flex-centerY xxl:justify-center sm:justify-end justify-center my-gap-24 py-5">
                    <CounterElement
                      counter={{
                        style: "text-57 text-blue-B900",
                        sizeText: "+",
                        counterNumber: 100,
                      }}
                    />

                    <div className="text-left">
                      <p>Yachts</p>
                      <p>Collection</p>
                    </div>
                  </div>
                  <Image
                    width={416}
                    height={450}
                    className="sm:max-w-[275px] sm:min-w-min w-full sm:hover:scale-110 my-transition"
                    src="/media/images/yacthExprience3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="xxl:col-start-8 xxl:col-end-13 flex-center w-full h-full order-1 xl:order-2 xxl:pl-0 xl:pl-10 pl-0   xl:mb-0 gap-mb-60">
            <div className="xl:text-left xl:block flex-center flex-col text-center">
              <FadeUp>
                <h5 className="text-24 text-brown-B200 gap-mb-16">
                  Experience yachting in an <br className="sm:hidden block" />
                  exceptional way
                </h5>
              </FadeUp>
              <FadeDown>
                <h2 className="text-57 text-blue-B900 gap-mb-24">
                  Join us on your next Exciting{" "}
                  <br className=" xl:hidden block" /> Yacht or Boat Trip!
                </h2>
              </FadeDown>
              <FadeUp>
                <p className="text-18 text-blue-B90 gap-mb-40">
                  Boativus unites boat owners, charter firms, and renters on a
                  safe, easy-to-use platform. Boativus has powerboats,
                  sailboats, super yachts, and catamarans across 3 continents,
                  50 countries, and 500 locations. Our boats explore the
                  world&lsquo;s most stunning yachting locales, providing
                  thousands of people the experience of sailing each year.
                </p>
                <div className="flex-centerY my-gap-24">
                  <Link
                    href="/buy-yacht"
                    className="btn hover:text-blue-B900 text-white bg-blue-B700 hover:bg-brown-B300"
                  >
                    Book now
                  </Link>
                  <Link
                    className=" bg-blue-B700 hover:bg-brown-B300 md:w-16 md:h-16 sm:w-14 sm:h-14 w-11 h-11 flex-center rounded-full group"
                    href="./yachts"
                  >
                    <ArrowDown className="icon-24 text-2xl group-hover:text-blue-B900 text-white group-hover:-rotate-90 my-transition" />
                  </Link>
                </div>
              </FadeUp>
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

export default JoinUs;
