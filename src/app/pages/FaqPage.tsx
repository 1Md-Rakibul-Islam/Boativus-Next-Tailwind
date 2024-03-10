import { NavBarThree } from "@/components/Global/UI";
import HeaderBannerThree from "@/components/Global/UI/HeaderBannerThree";
import { FaqOne, Footer } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const FaqPage = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "Pages", label: "Pages" },
    { id: 3, url: "/faq", label: "Faq" },
  ];

  const headerData: headerProps = {
    title: "Faq",
    bgImgClasses:
      "bg-[url('/media/images/commonheaderBG3.png')] bg-no-repeat bg-cover",
    navLinks,
  };
  return (
    <>
      <NavBarThree />
      <main className="min-h-screen">
        <HeaderBannerThree headerData={headerData} />
        <FaqOne />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default FaqPage;
