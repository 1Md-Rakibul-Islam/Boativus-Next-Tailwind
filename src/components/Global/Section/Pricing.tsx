import FadeUp from "@/motion/FadeUp";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import pricing1 from "@public/media/images/pricing1.png";
import pricing2 from "@public/media/images/pricing2.png";
import pricing3 from "@public/media/images/pricing3.png";
import Image from "next/image";

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      pricingType: "Standard",
      image: pricing1,
      pricing: 210,
      features: [
        "Mechanical work",
        "Electrical and Electronics",
        "Works with complex equipment",
        "Washing of the deck (4 hours)",
        "Polishing of the case",
      ],
    },
    {
      id: 2,
      pricingType: "Extended",
      image: pricing2,
      pricing: 510.0,
      features: [
        "Mechanical work",
        "Electrical and Electronics",
        "Works with complex equipment",
        "Washing of the deck (4 hours)",
        "Polishing of the case",
      ],
    },
    {
      id: 3,
      pricingType: "Premium",
      image: pricing3,
      pricing: 910.0,
      features: [
        "Mechanical work",
        "Electrical and Electronics",
        "Works with complex equipment",
        "Washing of the deck (4 hours)",
        "Polishing of the case",
      ],
    },
  ];
  return (
    <section className="section-py bg-white">
      <div className="container">
        <FadeUp className="flex-center flex-col text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16">Best Pricing</h5>
          <h2 className="text-57 text-blue-B900 gap-mb-24 gap-mb-24">
            Check Out Our Maintenance <br className="md:block hidden" />
            Pricing Options
          </h2>
          <p className="text-18 text-blue-B300 max-w-[856px]">
            Lorem ipsum dolor sit amet consectetur. Senectus aenean proin
            feugiat neque tristique. Sit sed in blandit viverra congue egestas
            eget vitae. Ut mi et senectus gravida.
          </p>
        </FadeUp>

        <FadeUp className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-gap-24 ">
          {pricingData?.map((item, idx) => (
            <div
              key={idx}
              className="bg-brown-B50 flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full object-cover hover:scale-110 my-transition"
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div className="px-24px py-32px pb-0">
                  <span className="text-18 font-medium text-blue-B900 mb-2">
                    {item?.pricingType}
                  </span>
                  <h4 className="text-[32px] font-semibold text-blue-B900 gap-mb-24">
                    ${item?.pricing}
                  </h4>
                  <ul className="grid md:gap-4 sm:gap-3 gap-2.5 list-disc pl-5 text-18 text-blue-B800 gap-mb-40">
                    {item?.features?.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-24px py-32px">
                <a
                  href="#"
                  className="btn text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300 flex-center gap-2"
                >
                  Choose a plan
                  <ArrowCircleRight />
                </a>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
};

export default Pricing;
