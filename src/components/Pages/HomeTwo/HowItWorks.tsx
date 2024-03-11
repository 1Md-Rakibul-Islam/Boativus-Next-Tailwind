import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <FadeUp className="text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16 ">How it works</h5>
          <h2 className="text-57 text-blue-B800 gap-mb-24 ">
            How to Rent a Boat on Boativus
          </h2>
          <p className="text-18 text-blue-B300 ">
            Lorem ipsum dolor sit amet consectetur. Nec duis vestibulum metus
            etiam purus. Rhoncus pellentesque.
          </p>
        </FadeUp>
        <FadeUp className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-gap-24">
          <div className="flex-center flex-col text-center">
            <Image
              className="max-w-20 min-w-fit gap-mb-24"
              src="/media/icons/works1.png"
              alt="icon"
              draggable={false}
            />
            <h4 className="text-24 text-blue-B900 gap-mb-16">Make a Request</h4>
            <p className="text-18 text-blue-B100">
              A varied offering of the finest boats, all of which come from
              reputable owners.
            </p>
          </div>
          <div className="flex-center flex-col text-center">
            <Image
              className="max-w-20 min-w-fit gap-mb-24"
              src="/media/icons/works2.png"
              alt="icon"
              draggable={false}
            />
            <h4 className="text-24 text-blue-B900 gap-mb-16">Get Offers</h4>
            <p className="text-18 text-blue-B100">
              Pick the most affordable option from among many different deals.
            </p>
          </div>
          <div className="flex-center flex-col text-center">
            <Image
              className="max-w-20 min-w-fit gap-mb-24"
              src="/media/icons/works3.png"
              alt="icon"
              draggable={false}
            />
            <h4 className="text-24 text-blue-B900 gap-mb-16">Enjoy!</h4>
            <p className="text-18 text-blue-B100">
              Spend your time on the finest boats to get the most out of your
              trip experience.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default HowItWorks;
