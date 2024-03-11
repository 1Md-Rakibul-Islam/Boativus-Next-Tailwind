import { HeaderBannerTwo, NavBarThree } from "@/components/Global/UI";
import { BuyYachts, Footer } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const BuyYacht = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/buy-yacht", label: "Buy Yachts" },
  ];

  const headerData: headerProps = {
    title: "Buy Yachts",
    bgImgClasses:
      "bg-[url('/media/images/commonheaderBG2.2.png')] bg-no-repeat bg-cover bg-right",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen">
        <HeaderBannerTwo headerData={headerData} />
        <BuyYachts />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default BuyYacht;
