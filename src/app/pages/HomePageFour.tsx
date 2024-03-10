import { NavBarThree } from "@/components/Global/UI";
import {
  BlogsFive,
  BlogsFour,
  Footer,
  GalleryTwo,
  HighPerformanceYachts,
  HomeFourBanner,
  OptionalServices,
  PlanNextTourThree,
  TestimonialsTwo,
  WhayCharterYachtOne,
} from "@/components/Pages";

const HomePageFour = () => {
  return (
    <>
      <NavBarThree />
      <main className="min-h-screen relative">
        <HomeFourBanner />
        <WhayCharterYachtOne />
        <HighPerformanceYachts />
        <BlogsFour />
        <PlanNextTourThree />
        <OptionalServices />
        <TestimonialsTwo bgImage="bg-[url('../media/images/testimonialsBg3.png')]" />
        <BlogsFive />
        <GalleryTwo />

        <div className="absolute inset-0 grid grid-cols-4 container">
          <div className="min-w-screen min-h-screen border-l border-[#E5E5E5]"></div>
          <div className="min-w-screen min-h-screen border-l border-[#E5E5E5]"></div>
          <div className="min-w-screen min-h-screen border-l border-[#E5E5E5]"></div>
          <div className="min-w-screen min-h-screen border-x border-[#E5E5E5]"></div>
        </div>
      </main>
      <Footer bgStyle="bg-blue-B900" />
    </>
  );
};

export default HomePageFour;
