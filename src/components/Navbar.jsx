import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <BrowserRouter>
      <div className="bg-[#CFB997] text-white w-3/4 flex items-center justify-between py-4 px-10 m-6 rounded-md text-2xl z-10 fixed shadow-xl">
        <div className="text-3xl">
          kerem<span className="text-[#393053]">e</span>ersoy
        </div>
        <div className="flex items-center justify-center gap-x-10">
          <Link to="#" smooth>
            <div className="hover:scale-110 duration-300">Home</div>
          </Link>
          <Link to="#about" smooth>
            <div className="hover:scale-110 duration-300">About</div>
          </Link>
          <Link to="#skills" smooth>
            <div className="hover:scale-110 duration-300">Skills</div>
          </Link>
          <Link to="#projects" smooth>
            <div className="hover:scale-110 duration-300">Projects</div>
          </Link>
          <Link to="#contact" smooth>
            <div className="hover:scale-110 duration-300">Contact</div>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
