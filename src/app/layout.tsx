import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor, ScrollToTop } from "@/components/Global/UI";

export const metadata: Metadata = {
  title: "Boativus - Luxury Yacht & Boat Rental Booking Template",
  description:
    "Boativus is a premier template designed for luxury yacht and boat rental businesses, offering a seamless booking experience for customers worldwide. With its sleek design and intuitive interface, Boativus empowers yacht and boat rental companies to showcase their fleet of vessels and manage bookings efficiently. This template features stunning visuals, comprehensive booking forms, and integrated payment gateways, ensuring a hassle-free experience for both renters and boat owners. Boativus is the ultimate solution for businesses seeking to establish a prominent online presence and elevate their yacht and boat rental services to new heights of luxury and sophistication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor />
        <ScrollToTop />
      </body>
    </html>
  );
}
