"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { MdMenu } from "react-icons/md";

function Header() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(container.current, {
        opacity: 0,
        y: -50,
      });
    },
    {
      scope: container.current,
    }
  );
  return (
    <header
      ref={container}
      className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6 "
    >
      <h1 className="text-2xl font-bold">UVER</h1>
      <nav className="hidden md:flex items-center space-x-8"></nav>
      <button className="hidden md:inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
        Get Early Access
      </button>
      <button className="md:hidden">
        <span className="material-icons">
          <MdMenu />
        </span>
      </button>
    </header>
  );
}

export default Header;
