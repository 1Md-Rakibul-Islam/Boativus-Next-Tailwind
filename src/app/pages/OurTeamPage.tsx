import { NavBarThree } from "@/components/Global/UI";
import HeaderBannerThree from "@/components/Global/UI/HeaderBannerThree";
import { Footer, OurTeamThree } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const OurTeamPage = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "Pages", label: "Pages" },
    { id: 3, url: "/our-team", label: "Our Team" },
  ];

  const headerData: headerProps = {
    title: "Our Team",
    bgImgClasses: "bg-blue-B900",
    navLinks,
  };
  return (
    <>
      <NavBarThree />
      <main className="min-h-screen">
        <HeaderBannerThree headerData={headerData} />
        <OurTeamThree />
      </main>
      <Footer bgStyle="bg-[url('../media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default OurTeamPage;
