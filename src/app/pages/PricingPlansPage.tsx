import { HeaderBannerTwo, NavBarThree } from "@/components/Global/UI";
import { FaqTwo, Footer, Pricing } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const PricingPlansPage = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "Pages", label: "Pages" },
    { id: 3, url: "/pricing-plans", label: "Pricing Plan" },
  ];

  const headerData: headerProps = {
    title: "Pricing Plan",
    bgImgClasses:
      "bg-[url('../media/images/commonheaderBG2.2.png')] bg-no-repeat bg-cover bg-right",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        <HeaderBannerTwo headerData={headerData} />
        <Pricing />
        <FaqTwo bgClasses="bg-[rgba(251,247,243,0.70)]" />
      </main>
      <Footer bgStyle="bg-blue-B900" />
    </>
  );
};

export default PricingPlansPage;
