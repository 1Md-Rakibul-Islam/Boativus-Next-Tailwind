import { NavBarThree } from "@/components/Global/UI";
import HeaderBannerThree from "@/components/Global/UI/HeaderBannerThree";
import { BlogsSix, Footer, GalleryTwo } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const BlogsPage = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/blogs", label: "Blogs" },
  ];

  const headerData: headerProps = {
    title: "Buy Yachts",
    bgImgClasses:
      "bg-[url('/media/images/commonheaderBG3.png')] bg-no-repeat bg-cover",
    navLinks,
  };
  return (
    <>
      <NavBarThree />
      <main className="min-h-screen">
        <HeaderBannerThree headerData={headerData} />
        <BlogsSix />
        <GalleryTwo />
      </main>
      <Footer bgStyle="bg-blue-B900" />
    </>
  );
};

export default BlogsPage;
