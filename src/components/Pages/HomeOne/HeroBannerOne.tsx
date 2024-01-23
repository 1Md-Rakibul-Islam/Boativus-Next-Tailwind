import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const HeroBannerOne = () => {
  return (
    <section className="min-h-screen flex items-center xl:pt-10 lg:pt-16 md:pt-20 sm:pt-20 pt-16 bg-dark bg-[url('/images/heroBanner1.png')] bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-gradient-to-r from-[#061138] to-[rgba(6,17,56,0.00)]"></div>
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
          <div className="flex-centerY my-gap-24">
            <button
              type="button"
              className="btn text-white bg-blue-B700 bg-opacity-50 border border-blue-B900"
            >
              Book now
            </button>
            <Link
              href="/games"
              className="bg-blue-B700 bg-opacity-50 p-4 rounded-full border border-blue-B900"
            >
              <ArrowDown size={32} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerOne;
