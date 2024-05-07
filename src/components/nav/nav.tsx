"use client";

import Desktop from "./desktop";
import Phone from "./phone";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex h-[200px] w-full items-center justify-between gap-10 rounded-b-md border-b border-b-sky-950 bg-sky-200 px-5 shadow-lg">
      <h1 className="text-nowrap text-xl text-sky-950">
        <a href="#start">Rasmus Eklund</a>
      </h1>
      <Desktop />
      <Phone />
    </nav>
  );
};

export default Navbar;
