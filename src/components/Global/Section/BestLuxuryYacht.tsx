import Image from "next/image";
import { boats } from "../../../../public/data/boats";
import { Star } from "@phosphor-icons/react/dist/ssr";

const BestLuxuryYacht = () => {
  const bestBoats = boats?.filter((boat) => boat?.category === "best");
  return (
    <section className="bg-blue-B900">
      <div className="container section-py">
        <div className="text-center gap-mb-64">
          <h4 className="text-24 gap-mb-32 text-brown-B50">
            Our Best luxury yacht
          </h4>
          <h2 className="text-57 gap-mb-32 text-white">
            Find the Most Appropriate Boat <br className=" sm:block hidden" />{" "}
            Rental for You
          </h2>
          <p className="text-18 text-blue-B50">
            Embark on an epic adventure with friends and family! Whether seeking
            a party yacht or a relaxed sea excursion
            <br className=" sm:block hidden" /> in Dubai, a guaranteed great
            time awaits under the glorious sunshine. Book now!
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          {bestBoats?.map((item, i) => (
            <div key={i} className="rounded-lg">
              <div>
                <Image src={item?.image} alt="boat" />
                <div className="bg-[rgba(6,17,56,0.71)] md:py-3 sm:py-2.5 py-2 lg:px-5 md:px-4 px-3">
                  <div className="flex-centerY justify-between my-gap-24">
                    <div className="flex-centerY sm:gap-2 gap-1.5">
                      {Array.from({ length: item?.rating }, (_, i) => (
                        <Star className="text-20 text-[#FFB32B]" key={i} />
                      ))}
                    </div>
                    <h4 className="text-32 text-white">${item?.price}</h4>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestLuxuryYacht;
