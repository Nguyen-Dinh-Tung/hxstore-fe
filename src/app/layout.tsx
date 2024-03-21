/* eslint-disable @next/next/no-css-tags */
import Header from "@/components/layout/header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/layout/footer";

const monsFonts = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "LESAC - MINIMAL BAGS BRAND",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Shop sinh ly - 90</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Stay updated with the latest AI trends for website design, operations, and news through our informative blog. Our team of experts share insights, tips, and strategies to help you stay ahead of the game. From NFT's to Digital Marketing, we cover it all. Subscribe now to never miss a post."
        />
        <meta name="keywords" content="Shop sinh ly - 90" />
        <link href="./css/vendors/aos.css" rel="stylesheet" />
        <link href="./style.css" rel="stylesheet" />
        <link
          rel="shortcut icon"
          href="/images/Favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="/images/Favicon.png" type="image/x-icon" />
        <meta property="og:site_name" content="HxStore" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hxstore.vercel.app/" />
        <meta property="og:title" content="LESAC - MINIMAL BAGS BRAND" />
        <meta
          property="og:image"
          content="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/169249/Originals/website-la-gi-01.jpeg"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest AI trends for website design, operations, and news through our informative blog. Our team of experts share insights, tips, and strategies to help you stay ahead of the game. From NFT's to Digital Marketing, we cover it all. Subscribe now to never miss a post."
        />
      </head>

      <body className={monsFonts.className}>
        <div className="flex justify-between items-center">
          <p className="text-center text-xs pl-5">
            Enjoy every moment with LESAC
          </p>
          <div className="p-2 bg-black text-white font-bold">
            <a href="tel:0378362631">+84-378362631</a>
          </div>
        </div>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
