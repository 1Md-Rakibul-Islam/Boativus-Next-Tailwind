import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const HeroBannerOne = () => {
  return (
    <section className="min-h-screen xl:pt-72 lg:pt-52 md:pt-36 pt-32 bg-dark bg-[url('/images/heroBannerImg1.png')] bg-no-repeat bg-cover">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#061138] to-[rgba(6,17,56,0.00)]"></div> */}
      <div className="container relative">
        <div className="max-w-[636px]">
          <h1 className="gap-mb-32 text-76 text-white">
            The Most Exciting Adventure Boat Cruise
          </h1>
          <p className="gap-mb-40 text-18  text-white">
            Boativus is a place for those who are looking for the top-
            <br />
            notch yacht charters.
          </p>
          <div className="flex-centerY my-gap-24 mb-[190px]">
            <button
              type="button"
              className="btn text-white bg-[rgba(6,17,56,0.50)] bg-opacity-70 border border-blue-B900"
            >
              Book now
            </button>
            <Link
              href="/games"
              className="bg-[rgba(6,17,56,0.50)] bg-opacity-70 xl:p-4 md:p-3 sm:p-2 p-1.5 rounded-full border border-blue-B900"
            >
              <ArrowDown size={32} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:py-16 lg:py-14 md:py-12 sm:py-10 py-8 shadow-3 bg-white rounded">
        <div className="container"></div>
      </div>
    </section>
  );
};

export default HeroBannerOne;
