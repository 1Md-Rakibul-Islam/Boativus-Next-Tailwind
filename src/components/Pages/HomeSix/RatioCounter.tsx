import { CounterElement } from "../../Global/UI";

const RatioCounter = () => {
  return (
    <section className="relative bg-blue-B900 bg-[url('/media/images/high-performance-yachtsBg2.png')] bg-no-repeat bg-cover bg-center">
      <div className="container section-py ">
        <div className="grid md:grid-cols-3 grid-cols-1 my-gap-24 gap-y-8 ">
          <div className="tex:text-left text-center">
            <CounterElement
              counter={{
                counterNumber: 5,
                style:
                  "flex-center gap-2 text-43 font-semibold text-white gap-mb-16 font-playfair",
                sizeText: "K",
              }}
            />
            <p className="text-18 text-blue-B60">Job done successfully</p>
          </div>
          <div className="tex:text-left text-center">
            <CounterElement
              counter={{
                counterNumber: 21,
                style:
                  "flex-center gap-2 text-43 font-semibold text-white gap-mb-16 font-playfair",
                sizeText: "K",
              }}
            />
            <p className="text-18 text-blue-B60">3,280 avg ration</p>
          </div>
          <div className="tex:text-left text-center">
            <CounterElement
              counter={{
                counterNumber: 400,
                style:
                  "flex-center gap-2 text-43 font-semibold text-white gap-mb-16 font-playfair",
                sizeText: "K",
              }}
            />
            <p className="text-18 text-blue-B60">Using Boativus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatioCounter;
