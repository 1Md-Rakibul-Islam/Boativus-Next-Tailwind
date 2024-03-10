import { faqItems } from "@public/data/faqItems";
import { AccordionTwo } from "../UI";

const FaqTwo = ({ bgClasses }: { bgClasses?: string }) => {
  const faqItemsTwo = faqItems?.slice(0, 6);
  return (
    <section
      className={`${
        bgClasses ? "bg-[rgba(251,247,243,0.70)]" : "bg-white"
      } faq-2 section-py`}
    >
      <div className="container">
        <div className="text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16">
            About Yacht Rentals
          </h5>
          <h2 className="text-57 text-blue-B800 gap-mb-24">
            Frequently Asked Question?
          </h2>
          <p className="text-18 text-blue-B300 gap-mb-64">
            Lorem ipsum dolor sit amet consectetur. Vitae justo rhoncus ut sed
            pellentesque id. Nunc id eu ornare diam.
          </p>
        </div>
        <div className="mx-auto max-w-[856px]">
          <div className="w-full grid my-gap-24">
            <AccordionTwo faqItems={faqItemsTwo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTwo;
