import type { Metadata } from "next";
import "./globals.css";
import { playfair_display, barlow, montserrat } from "@/config/font";
import { CustomCursor, NavBar, ScrollToTop } from "@/components/Global/UI";

export const metadata: Metadata = {
  title: "Xmiro - Gaming Studio Next.js & Tailwind CSS Template",
  description:
    "Launch your brand new gaming studio website that meets the latest trends in the world of online gaming websites! By using Xmiro – Gaming Studio Next.js and Tailwind CSS Templates and you can present your website in a professional way, making it a very effective source of assistance for your customers. Pick up these Xmiro Templates, now and start your way into getting more and more clients. With your professional-looking website, you are showing off what you can do as a company, thus improving your overall business output. This is why your site needs to be fresh-looking and impressive at all times otherwise your company will be swallowed by powerful competitors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair_display?.variable} ${montserrat?.variable} ${barlow?.variable}`}
      >
        <NavBar />
        {children}
        <CustomCursor />
        <ScrollToTop />
      </body>
    </html>
  );
}
