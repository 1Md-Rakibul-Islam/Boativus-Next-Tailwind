import { NavBarThree } from "@/components/Global/UI";
import HeaderBannerThree from "@/components/Global/UI/HeaderBannerThree";
import { Footer, Yachts } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const YachtsPages = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "Pages", label: "Pages" },
    { id: 3, url: "/yachts", label: "Yachts" },
  ];

  const headerData: headerProps = {
    title: "Yachts",
    bgImgClasses: "bg-blue-B900",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen">
        <HeaderBannerThree headerData={headerData} />
        <Yachts />
      </main>
      <Footer bgStyle="bg-[url('../media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default YachtsPages;
