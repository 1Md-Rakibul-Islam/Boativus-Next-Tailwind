import { HeaderBannerTwo, NavBarThree } from "@/components/Global/UI";
import {
  BestLuxuryYachtSection,
  Footer,
  GalleryThree,
  YachtDetails,
} from "@/components/Pages";
import { NavLinkProps, headerProps, yachtType } from "@/config/types";
import { yachts } from "@public/data/yachts";
import { usePathname } from "next/navigation";

const YachtsDetailsPage = () => {
  // const { id } = usePathname();
  const path = usePathname();

  // Filter blogs based on the blogId
  // const yacht: yachtType = yachts.find(
  //   (yacht) => yacht?.id?.toString() === id
  // )!;

  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    // { id: 2, url: `/yachts/${id}`, label: "Yacht Details" },
  ];

  const headerData: headerProps = {
    title: "Yacht Details",
    bgImgClasses:
      "bg-[url('/media/images/commonheaderBG2.2.png')] bg-no-repeat bg-cover bg-right",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        <HeaderBannerTwo headerData={headerData} />
        {/* <YachtDetails yacht={yacht} /> */}
        <BestLuxuryYachtSection />
        <GalleryThree />
      </main>
      <Footer bgStyle="bg-[url('/media/images/footer.png')] bg-no-repeat bg-cover" />
    </>
  );
};

export default YachtsDetailsPage;
