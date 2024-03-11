import { NavBarOne } from "@/components/Global/UI";
import {
  BestRatedYachts,
  BoatTypesTwo,
  Culture,
  FeaturesCounter,
  Footer,
  HomeTwoBanner,
  HowItWorks,
  JoinUs,
  OurActivity,
  BlogsThree,
  ServicesOne,
  TestimonialsOne,
} from "@/components/Pages";

const HomeTwo = () => {
  return (
    <>
      <NavBarOne />
      <main className="min-h-screen">
        <HomeTwoBanner />
        <JoinUs />
        <BestRatedYachts />
        <OurActivity />
        <ServicesOne
          sectionStyles={{
            bgClasses: "bg-blue-B900",
            title: "text-white",
            subTitle: "text-brown-B300",
            details: "text-blue-B300",
          }}
        />
        <HowItWorks />
        <FeaturesCounter />
        <BlogsThree />
        <TestimonialsOne />
        <BoatTypesTwo />
        <Culture />
        <Footer bgStyle="bg-blue-B900" />
      </main>
    </>
  );
};

export default HomeTwo;
