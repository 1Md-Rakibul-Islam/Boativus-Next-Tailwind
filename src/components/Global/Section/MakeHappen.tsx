import FadeUp from "@/motion/FadeUp";
import { CounterElement } from "../UI";
import Image from "next/image";

const MakeHappen = () => {
  return (
    <section className="section-py">
      <div className="container">
        <div className="grid xl:grid-cols-12 lg:grid-cols-2 items-center my-gap-24">
          <div className="xl:col-start-1 xl:col-end-6 overflow-hidden xl:mr-0 lg:mr-5 gap-mb-40">
            <Image
              width={526}
              height={676}
              className="w-full hover:scale-110 my-transition"
              src="/media/images/making-happenBaner.png"
              alt=""
            />
          </div>
          <div className="xl:col-start-7 xl:col-end-13">
            <FadeUp className="sm:text-left text-center gap-mb-64">
              <h5 className="text-24 text-brown-B300 gap-mb-16 ">
                Making it happen
              </h5>
              <h2 className="text-57 text-blue-B900 gap-mb-24 ">
                Yachting in Numbers
              </h2>
              <p className="text-18 text-blue-B90 ">
                Redefining the yachting experience: Our considered work with the
                world’s elite and within some of the greatest names in the
                modern business world has taught us a better way to do business
                in the world of yachting.
              </p>
            </FadeUp>
            <FadeUp className="grid sm:grid-cols-2 grid-cols-1 sm:justify-start justify-center my-gap-40 ">
              <div className="sm:text-left text-center">
                <div className="flex-centerY sm:justify-start justify-center gap-2">
                  <CounterElement
                    counter={{
                      style:
                        " text-32 font-playfair font-semibold text-blue-B900 gap-mb-16",
                      counterNumber: 75,
                      sizeText: "+",
                    }}
                  />
                  <span className="text-16">years</span>
                </div>
                <p className="text-18 text-blue-B90">Yacht Brokerage</p>
              </div>
              <div className="sm:text-left text-center">
                <div className="flex-centerY sm:justify-start justify-center gap-2">
                  <CounterElement
                    counter={{
                      style:
                        " text-32 font-playfair font-semibold text-blue-B900 gap-mb-16",
                      counterNumber: 290,
                      sizeText: "+",
                    }}
                  />
                  <span className="text-16">years</span>
                </div>
                <p className="text-18 text-blue-B90">Yacht Brokerage</p>
              </div>
              <div className="sm:text-left text-center">
                <div className="flex-centerY sm:justify-start justify-center gap-2">
                  <CounterElement
                    counter={{
                      style:
                        " text-32 font-playfair font-semibold text-blue-B900 gap-mb-16",
                      counterNumber: 50,
                      sizeText: "+",
                    }}
                  />
                  <span className="text-16">years</span>
                </div>
                <p className="text-18 text-blue-B90">Yacht Brokerage</p>
              </div>
              <div className="sm:text-left text-center">
                <div className="flex-centerY sm:justify-start justify-center gap-2">
                  <CounterElement
                    counter={{
                      style:
                        " text-32 font-playfair font-semibold text-blue-B900 gap-mb-16",
                      counterNumber: 80,
                      sizeText: "+",
                    }}
                  />
                  <span className="text-16">years</span>
                </div>
                <p className="text-18 text-blue-B90">Yacht Brokerage</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeHappen;
