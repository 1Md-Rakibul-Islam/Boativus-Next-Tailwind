import { faqItems } from "@public/data/faqItems";
import { Accordion } from "../UI";
import FadeDown from "@/motion/FadeDown";

const FaqOne = () => {
  const faqsLeftSide = faqItems?.slice(0, 4);
  const faqsRightSide = faqItems?.slice(4, 8);
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="text-center gap-mb-64">
          <FadeDown>
            <h5 className="text-24 text-brown-B300 gap-mb-16">Yacht Faq</h5>
            <h2 className="text-57 text-blue-B800 gap-mb-24">
              Frequently Asked Question?
            </h2>
            <p className="text-18 text-blue-B300 gap-mb-64">
              Lorem ipsum dolor sit amet consectetur. Vitae justo rhoncus ut sed
              pellentesque id. Nunc id eu ornare diam.
            </p>
          </FadeDown>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 my-gap-24">
          <div className="w-full">
            <Accordion faqItems={faqsLeftSide} />
          </div>
          <div className="w-full">
            <Accordion faqItems={faqsRightSide} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
