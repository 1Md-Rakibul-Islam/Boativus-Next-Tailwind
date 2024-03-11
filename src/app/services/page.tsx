import { HeaderBannerTwo, NavBarThree } from "@/components/Global/UI";
import {
  Footer,
  OptionalServices,
  OurSkills,
  PlanNextTourThree,
  ServicesOne,
  TestimonialsTwo,
} from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const Services = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/services", label: "Services" },
  ];

  const headerData: headerProps = {
    title: "Services",
    bgImgClasses:
      "bg-[url('/media/images/commonheaderBG2.2.png')] bg-no-repeat bg-cover bg-right",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        <HeaderBannerTwo headerData={headerData} />
        <ServicesOne
          sectionStyles={{
            bgClasses: "bg-white",
            title: "text-blue-B900",
            subTitle: "text-brown-B300",
            details: "text-blue-B300",
          }}
        />
        <PlanNextTourThree />
        <OurSkills />
        <TestimonialsTwo bgImage="bg-[url('/media/images/testimonialBG4.png')] bg-no-repeat bg-cover" />
        <OptionalServices />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default Services;
