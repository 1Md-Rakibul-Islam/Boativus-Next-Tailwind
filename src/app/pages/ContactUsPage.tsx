import { HeaderBannerTwo, NavBarThree } from "@/components/Global/UI";
import { ContactUsThree, Footer, GoogleMap } from "@/components/Pages";
import { NavLinkProps, headerProps } from "@/config/types";

const ContactUsPage = () => {
  const navLinks: NavLinkProps[] = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/contact-us", label: "Contact Us" },
  ];

  const headerData: headerProps = {
    title: "Contact Us",
    bgImgClasses:
      "bg-[url('../media/images/commonheaderBG2.2.png')] bg-no-repeat bg-cover bg-right",
    navLinks,
  };

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        <HeaderBannerTwo headerData={headerData} />
        <GoogleMap />
        <ContactUsThree />
      </main>
      <Footer bgStyle="bg-blue-B900" />
    </>
  );
};

export default ContactUsPage;
