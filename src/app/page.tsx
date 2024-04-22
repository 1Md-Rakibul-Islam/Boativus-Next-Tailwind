import { NavBarOne } from "@/components/Global/UI";
import {
  AboutUsSection,
  BestLuxuryYachtSection,
  FaqOne,
  Footer,
  GalleryOne,
  HeroBannerOne,
  OurTeamOne,
  PlanNextTourOne,
  YachtCategories,
  TestimonialsOne,
  BlogsOne,
} from "@/components/Pages";

const HomePageOne = () => {
  return (
    <>
      <NavBarOne />
      <main className="min-h-screen">
        <HeroBannerOne />
        <AboutUsSection />
        <BestLuxuryYachtSection />
        <YachtCategories cardStyle="bg-blue-B10 shadow-4" />
        <PlanNextTourOne />
        <FaqOne />
        <GalleryOne />
        <OurTeamOne />
        <TestimonialsOne />
        <BlogsOne />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default HomePageOne;
