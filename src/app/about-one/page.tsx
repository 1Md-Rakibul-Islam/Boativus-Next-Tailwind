import { HeaderBannerOne, NavBarThree } from "@/components/Global/UI";
import {
  BlogsTwo,
  BoatTypesTwo,
  ContactUsOne,
  Footer,
  ReasonToBook,
  TeamTwo,
  TestimonialsFour,
  WhayCharterYachtTwo,
} from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const AboutPageOne = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/about-one", label: "About" },
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
      <main className="min-h-screen">
        <HeaderBannerOne headerData={headerData} />
        <WhayCharterYachtTwo />
        <ReasonToBook />
        <TeamTwo padding="xl:section-pt" />
        <TestimonialsFour />
        <BoatTypesTwo />
        <ContactUsOne />
        <BlogsTwo />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default AboutPageOne;
