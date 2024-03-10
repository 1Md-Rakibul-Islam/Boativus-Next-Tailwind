import { HeaderBannerOne, NavBarThree } from "@/components/Global/UI";
import { NavLinkProps, headerProps } from "@/config/types";
import {
  BlogsTwo,
  BoatTypeThree,
  ContactUsTwo,
  Footer,
  GalleryTwo,
  MakeHappen,
  ReasonToBook,
  TeamTwo,
  TestimonialsFive,
} from "@/components/Pages";

const AboutPageTwo = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/about-2", label: "about" },
  ];

  const headerData: headerProps = {
    title: "About Us",
    bgImgClasses:
      "bg-[url('/media/images/aboutHeaderBG.png')] bg-no-repeat bg-cover bg-center",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        <HeaderBannerOne headerData={headerData} />
        <MakeHappen />
        <ReasonToBook />
        <TeamTwo padding="xl:section-pt" />
        <TestimonialsFive />
        <BoatTypeThree />
        <ContactUsTwo />
        <BlogsTwo />
        <GalleryTwo />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default AboutPageTwo;
