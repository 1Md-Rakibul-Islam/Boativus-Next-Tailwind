import service5 from "@public/media/images/service5.png";
import service6 from "@public/media/images/service6.png";
import service7 from "@public/media/images/service7.png";
import service8 from "@public/media/images/service8.png";
import service9 from "@public/media/images/service9.png";
import service10 from "@public/media/images/service10.png";

import {
  AnchorSimple,
  Boat,
  Cookie,
  Fish,
  SealCheck,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const OptionalServices = () => {
  const optionalServices = [
    {
      id: 1,
      title: "Catering",
      image: service5,
      icon: <Cookie />,
    },
    {
      id: 2,
      title: "Fishing",
      image: service6,
      icon: <Fish />,
    },
    {
      id: 3,
      title: "Decorations",
      image: service7,
      icon: <SealCheck />,
    },
    {
      id: 4,
      title: "Video Package",
      image: service8,
      icon: <VideoCamera />,
    },
    {
      id: 5,
      title: "Jetski Rental",
      image: service9,
      icon: <Boat />,
    },
    {
      id: 6,
      title: "Transportation",
      image: service10,
      icon: <AnchorSimple />,
    },
  ];
  return (
    <section className="section-py bg-white">
      <div className="container relative z-[1]">
        <FadeUp className="text-center gap-mb-64">
          <h5 className="text-24 text-brown-B200 gap-mb-16">Explore Now</h5>
          <h2 className=" text-57 text-blue-B900 gap-mb-24">
            Our Optional services
          </h2>
          <p className=" text-18 text-blue-B90">
            The following pursuits are included in each and every one of our
            Packages:
          </p>
        </FadeUp>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-gap-24">
          {optionalServices?.map((item, idx) => (
            <FadeUp key={idx} className="relative overflow-hidden">
              <Image
                className="w-full lg:pb-16 md:pb-14 sm:pb-12 pb-10 hover:scale-110 my-transition"
                src={item?.image}
                alt="img"
              />
              <div className="absolute left-[20%] right-0 bottom-0 p-24px bg-white flex-centerY my-gap-24">
                <span className="bg-brown-B50 rounded-full p-2.5 xl:text-[60px] lg:text-5xl text-[40px] text-brown-B400">
                  {item?.icon}
                </span>
                <h5 className="text-24 text-blue-B900 gap-mb-16">
                  {item?.title}
                </h5>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptionalServices;
