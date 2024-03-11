import { NavBarFive } from "@/components/Global/UI";
import {
  BlogsFive,
  Footer,
  HomeFiveBanner,
  MakeHappen,
  PlanNextTourThree,
  ServicesTwo,
  TeamTwo,
  TestimonialsTwo,
  TopSupperYachts,
} from "@/components/Pages";

const HomeFive = () => {
  return (
    <>
      <NavBarFive />
      <main className="min-h-screen ">
        <HomeFiveBanner />
        <MakeHappen />
        <ServicesTwo />
        <TopSupperYachts />
        <PlanNextTourThree />
        <TeamTwo />
        <TestimonialsTwo bgImage="bg-[url('/media/images/testimonialBG4.png')] bg-no-repeat bg-cover" />
        <BlogsFive />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default HomeFive;
