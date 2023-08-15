import Navbar from "@/components/Navbar";
import "./globals.css";

import { Inter, Josefin_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata = {
  title: "BytefulBlogs",
  description:
    "Welcome to BytefulBlogs, your destination for insightful articles, thought-provoking narratives, and in-depth explorations. Delve into a world of diverse topics, from technology and science to art and culture, as our expert contributors share their knowledge and perspectives. Join us on a journey of discovery and inspiration through engaging blog posts that aim to inform, entertain, and spark meaningful conversations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-josefin: ${josefin.style.fontFamily};
          }
        `}
      </style> */}
      <body
        className={`bg-gray-100 font-inter ${inter.variable} ${josefin.variable}`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
