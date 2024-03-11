import { HeaderBannerTwo, NavBarThree } from "@/components/Global/UI";
import { Footer, SellYachts } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const SellYacht = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/sell-yacht", label: "Sell Yachts" },
  ];

  const headerData: headerProps = {
    title: "Sell Yachts",
    bgImgClasses:
      "bg-[url('/media/images/commonheaderBG2.2.png')] bg-no-repeat bg-cover bg-right",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        <HeaderBannerTwo headerData={headerData} />
        <SellYachts />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default SellYacht;
