import FadeUp from "@/motion/FadeUp";
import { boatsTypes } from "@public/data/boatsTypes";
const BoatTypeTwo = () => {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6 ">
          {boatsTypes?.map((item, idx) => (
            <FadeUp
              key={idx}
              className="w-full border border-[#A88A69] p-2 relative"
            >
              <div className="relative z-[2] bg-white hover:bg-[#F2EBE2] my-transition p-[18px] rounded-10 flex-center">
                <img
                  className="w-[106px] h-[106px]"
                  src={item?.image}
                  alt="icon"
                />
              </div>
              <div className="absolute bg-white w-[103%] h-[60%] -left-1 right-0 top-1/2 -translate-y-1/2"></div>
              <div className="absolute bg-white w-[80%] h-[103%] -top-[3px] -bottom-1 left-1/2 -translate-x-1/2"></div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoatTypeTwo;
