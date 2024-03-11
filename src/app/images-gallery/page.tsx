import { HeaderBannerTwo, NavBarThree } from "@/components/Global/UI";
import {
  BlogsFive,
  Footer,
  GalleryThree,
  PlanNextTourThree,
} from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const ImageGalleryPage = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "Pages", label: "Pages" },
    { id: 3, url: "/images-gallery", label: "Image Gallery" },
  ];

  const headerData: headerProps = {
    title: "Image Gallery",
    bgImgClasses:
      "bg-[url('/media/images/commonheaderBG2.2.png')] bg-no-repeat bg-cover bg-right",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        <HeaderBannerTwo headerData={headerData} />
        <GalleryThree />
        <PlanNextTourThree />
        <BlogsFive />
      </main>
      <Footer bgStyle="bg-blue-B900" />
    </>
  );
};

export default ImageGalleryPage;
