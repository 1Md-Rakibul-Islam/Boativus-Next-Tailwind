import FadeUp from "@/motion/FadeUp";
import { ProgressBar } from "../../Global/UI";
import { skillsProgress } from "@public/data/progressData";
import Image from "next/image";

const OurSkills = () => {
  return (
    <section className="section-py bg-white overflow-x-hidden xl:relative">
      <div className="container">
        <div className="grid xl:grid-cols-12 grid-cols-1 items-center my-gap-24">
          <div className="xl:col-start-1 xl:col-end-6 xl:order-1 order-2 xxl:mr-0 xl:mr-5 mr-0 xl:flex items-center justify-end w-full h-full">
            <div className="xl:absolute 3xl:left-[10%] xxl:left-[6%] left-[1%] xl:flex-center my-gap-24">
              <div className="3xl:max-w-[unset] w-full h-full sm:w-[560px] sm:h-[536px] sm:block flex-center flex-col sm:relative">
                <Image
                  className="sm:absolute top-0 left-0 rounded-full border-[12px] border-white z-[1] sm:max-w-[310px] sm:min-w-fit sm:block hidde animate-bounce-slow-left"
                  src="/media/images/aboutUs1.png"
                  alt="about"
                />
                <Image
                  className="sm:absolute sm:left-1/3 left-0 bottom-0 rounded-full sm:max-w-[504px] sm:min-w-fit sm:animate-bounce-slow-down animate-bounce-slow-right"
                  src="/media/images/aboutUs2.png"
                  alt="about"
                />
                <Image
                  className="sm:absolute bottom-0 xxl:-right-[10%] xl:-right-[4.9%] md:-right-[20%] md:left-auto left-0 rounded-full border-[12px] border-white z-[1] sm:max-w-[310px] sm:min-w-fit sm:block hidde sm:animate-bounce-slow-right animate-bounce-slow-left"
                  src="/media/images/aboutUs3.png"
                  alt="about"
                />
                <Image
                  className="sm:absolute 3xl:top-[18%] top-0 right-0 z-[1] animate-bounce-slow-top sm:block hidde"
                  src="/media/images/cloud.png"
                  alt="about"
                />
                <div className="sm:absolute 3xl:bottom-[18%] bottom-0 left-[20%] z-[1] sm:animate-bounce-slow-left animate-bounce-slow-right flex-centerY gap-2.5  bg-white rounded-full py-1.5 px-4 shadow-md sm:mb-0 gap-mb-40">
                  <Image
                    draggable={false}
                    src="/media/icons/location.png"
                    alt="icon"
                  />
                  <span className="text-18 text-black">New York</span>
                </div>
                <div className="sm:absolute 3xl:top-[30%] top-0 3xl:-right-[20%] ring-0 z-[1] animate-bounce-slow-left flex-centerY gap-2.5  bg-white rounded-full py-1.5 px-4 shadow-md">
                  <Image
                    draggable={false}
                    src="/media/icons/star.png"
                    alt="icon"
                  />
                  <span className="text-18 text-black">5.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-start-7  xl:col-end-13 xl:order-2 order-1 xl:mb-0 gap-mb-32">
            <FadeUp className="sm:text-left text-center">
              <h5 className="text-24 text-brown-B300 gap-mb-16">Our skills</h5>
              <h2 className="text-57 text-blue-B900 gap-mb-24 gap-mb-32">
                The Best Boating Happens Here.
              </h2>
              <p className="text-18 text-blue-B300 gap-mb-64">
                Because of our in-depth understanding of the yacht industry we
                are able to carefully choose a fleet of boats that uphold the
                greatest standards of performance, style, and quality.
              </p>
            </FadeUp>
            <FadeUp className="grid my-gap-24">
              {skillsProgress?.map((item, idx) => (
                <ProgressBar key={idx} progressData={item} />
              ))}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
