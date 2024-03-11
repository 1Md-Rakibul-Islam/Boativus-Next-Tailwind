import BlogsTwo from "@/components/Global/Section/BlogsTwo";
import { NavBarFour } from "@/components/Global/UI";
import {
  Footer,
  HomeSixBanner,
  Pricing,
  RatioCounter,
  ServicesThree,
  TeamTwo,
  TestimonialsThree,
  YachtsQuality,
} from "@/components/Pages";

const HomeSix = () => {
  return (
    <>
      <NavBarFour />
      <main className="min-h-screen bg-black">
        <HomeSixBanner />
        <ServicesThree />
        <YachtsQuality />
        <TeamTwo />
        <RatioCounter />
        <Pricing />
        <TestimonialsThree />
        <BlogsTwo />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default HomeSix;
