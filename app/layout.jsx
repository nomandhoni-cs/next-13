import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./componenets/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Noman Dhoni",
  description: "Next Js 13 Practice",
  keywords: "nextjs, react, javascript, noman dhoni, noman, dhoni",
  // meta data for social media
  social: {
    twitter: "@noman_dhoni",
    site: "@noman_dhoni",
    cardType: "summary_large_image",
  },
  // meta data for open graph
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://noman-dhoni.vercel.app/",
    title: "Noman Dhoni",
    description: "Next Js 13 Practice",
    image: "https://noman-dhoni.vercel.app/images/og.png",
    site_name: "Noman Dhoni",
    imageWidth: 1200,
    imageHeight: 1200,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
