import { NavBarTwo } from "@/components/Global/UI";
import {
  BlogsTwo,
  DealOfWeek,
  FaqTwo,
  Footer,
  GalleryOne,
  HighPerformanceYachts,
  HomeThreeBanner,
  PlanNextTourTwo,
  PopularCountries,
  TestimonialsTwo,
  YachtCategories,
  YachtOfferDetails,
  YachtRental,
} from "@/components/Pages";

const HomePageThree = () => {
  return (
    <>
      <NavBarTwo />
      <main>
        <HomeThreeBanner />
        <YachtCategories />
        <PopularCountries />
        <YachtOfferDetails />
        <DealOfWeek />
        <HighPerformanceYachts />
        <YachtRental />
        <PlanNextTourTwo />
        <FaqTwo />
        <GalleryOne />
        <TestimonialsTwo bgImage="bg-[url('../media/images/testimonialBG2.png')]" />
        <BlogsTwo />
      </main>
      <Footer bgStyle="bg-[url('../media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default HomePageThree;
