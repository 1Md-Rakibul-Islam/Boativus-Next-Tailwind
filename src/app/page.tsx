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

const Home = () => {
  return (
    <>
      <NavBarOne />
      <main>
        <HeroBannerOne />
        <AboutUsSection />
        <BestLuxuryYachtSection />
        <YachtCategories />
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

export default Home;
