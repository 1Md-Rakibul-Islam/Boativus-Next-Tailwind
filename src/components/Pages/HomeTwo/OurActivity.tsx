import FadeLeft from "@/motion/FadeLeft";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const OurActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Sailing",
      image: "/media/icons/activity-icon1.png",
      details:
        "Phasellus porttitor libero quis diam sagittis, at vehicula exlaoreet.",
    },
    {
      id: 2,
      title: "Diving",
      image: "/media/icons/activity-icon2.png",
      details:
        "Phasellus porttitor libero quis diam sagittis, at vehicula ex laoreet.",
    },
    {
      id: 3,
      title: "Events",
      image: "/media/icons/activity-icon3.png",
      details:
        "Phasellus porttitor libero quis diam sagittis, at vehicula ex laoreet.",
    },
    {
      id: 4,
      title: "Fishing",
      image: "/media/icons/activity-icon4.png",
      details:
        "Phasellus porttitor libero quis diam sagittis, at vehicula ex laoreet.",
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container lg:py-0 section-py">
        <div className="grid xl:grid-cols-12 lg:grid-cols-2 items-center my-gap-24">
          <div className="xl:col-start-1 xl:col-end-6 h-full w-full flex justify-end lg:order-1 order-2">
            <FadeLeft>
              <Image
                width={836}
                height={1076}
                className="lg:max-w-[unset]"
                src="/media/images/activityBanner.png"
                alt="img"
              />
            </FadeLeft>
          </div>
          <div className="xl:col-start-7 xl:col-end-13 lg:order-2 order-1 lg:mb-0 gap-mb-64">
            <FadeUp className="lg:text-left text-center lg:mb-0 gap-mb-64">
              <h5 className="text-24 text-brown-B300 lg:gap-mb-16 gap-mb-32 ">
                Our Activity
              </h5>
              <h2 className="text-57 text-blue-B900 gap-mb-64 ">
                All of our Packages include the Following Activities:
              </h2>
            </FadeUp>
            <div className="grid sm:grid-cols-2 grid-cols-1 my-gap-24 gap-y-10 ">
              {activities?.map((item, idx) => (
                <FadeUp key={idx} className="flex-center flex-col text-center">
                  <Image
                    width={80}
                    height={80}
                    className="max-w-20 min-w-fit gap-mb-24"
                    src={item?.image}
                    alt="icon"
                    draggable={false}
                  />
                  <h4 className="text-24 text-blue-B900 gap-mb-16">
                    {item?.title}
                  </h4>
                  <p className="text-18 text-blue-B100">{item?.details}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="xxl:w-[784px] xxl:h-[784px] lg:w-[664px] lg:h-[664px] sm:w-[400px] sm:h-[400px] sm:block hidden absolute xxl:-right-[20%] lg:-right-[24%] lg:top-1/2 top-1/4 -translate-y-1/2">
        <Image
          width={784}
          height={784}
          draggable={false}
          className="animate-spin-slow"
          src="/media/icons/compass3.png"
          alt="img"
        />
      </div>
    </section>
  );
};

export default OurActivity;
