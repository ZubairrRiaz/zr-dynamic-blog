import Link from "next/link";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-slate-200 font-[family-name:var(--font-geist-sans)]">
      <nav>
        <header className="flex justify-between sm:px-7 px-2 py-3 md:py-5 font-extrabold text-blue-700 sm:text-[20px] text-lg">
          <div className="sm:text-3xl text-2xl font-extrabold">ZooBlog</div>
          <ul className="sm:flex gap-4 hidden sm:visible">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"#blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/About"}>About</Link>
              </li>
          </ul>
          <Sheet>
            <SheetTrigger className="sm:hidden">
              <IoReorderThreeOutline size={40} />
            </SheetTrigger>
            <SheetContent className="bg-slate-300">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <ul className="sm:flex space-y-6 flex-row font-[family-name:var(--font-geist-sans)] text-xl font-bold text-blue-700">
                    <li className="hover:bg-white p-2 rounded-full">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li className="hover:bg-white p-2 rounded-full">
                      <Link href={"#blog"}>Blog</Link>
                    </li>
                    <li className="hover:bg-white p-2 rounded-full">
                      <Link href={"/About"}>About</Link>
                    </li>
                    <li className="flex gap-10 justify-center items-center pt-10">
                      <span><Link href={'https://github.com/ZubairrRiaz?tab=repositories'}><FaGithubSquare size={30}/></Link></span>
                      <span><Link href={'https://www.linkedin.com/in/zubair-riaz-3452352ba/'}><FaLinkedin size={30}/></Link></span>
                      <span><Link href={'https://www.instagram.com/accounts/login/'}><FaInstagramSquare size={30}/></Link></span>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
