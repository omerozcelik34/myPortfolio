import Link from "next/link";
import React from "react";
import { GoSun } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const logo: string = "<MP/>";
  return (
    <div className="flex items-center justify-between pt-4">
      {/* Logo */}
      <div>
        <Link
          className="text-xl lg:text-2xl font-bold border-none outline-none"
          href={"/"}
        >
          {logo}
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="block sm:hidden">
        <IoMenu className="text-3xl" />
      </div>
      <div className="hidden sm:flex items-center justify-between space-x-6 lg:space-x-12">
        {/* Links */}
        <div className="space-x-4 lg:space-x-8 text-sm lg:text-base">
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Work</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className="flex items-center justify-between space-x-3 lg:space-x-5">
          {/* dark/light button */}
          <button className="cursor-pointer text-lg lg:text-xl">
            <GoSun />
          </button>
          {/* Download CV button */}
          <button className="bg-black cursor-pointer text-white text-xs lg:text-sm rounded-xl py-2 px-3 border-b-black">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
