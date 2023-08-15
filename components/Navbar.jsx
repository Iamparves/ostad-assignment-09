"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="h-16 flex items-center bg-white font-josefin">
      <nav className="container flex justify-between items-center">
        <Link className="text-xl sm:text-2xl font-bold text-[#0560FD]" href="/">
          BytefulBlogs
        </Link>

        <nav className="flex gap-5 items-center">
          <Link className={`sm:text-lg font-medium ${pathname === "/" ? "text-[#0560FD]" : ""}`} href="/">
            Home
          </Link>
          <Link
            className={`sm:text-lg font-medium ${pathname === "/blog" ? "text-[#0560FD]" : ""}`}
            href="/blog"
          >
            Blog
          </Link>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
