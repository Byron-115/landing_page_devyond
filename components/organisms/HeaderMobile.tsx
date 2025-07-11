"use client";
import React, { useState } from "react";
import Logo from "../elements/Logo";
import SolidButton from "../elements/SolidButton";

const navLinks = [
  { href: "#", label: "Nuestra metodología" },
  { href: "#", label: "Stack tecnológico" },
  { href: "#", label: "Servicios" },
  { href: "#", label: "F.A.Q" },
];

const HeaderMobile: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex md:hidden fixed top-0 left-0 w-full z-50 bg-[#030714] h-[52px] items-center px-6">
      <Logo />
      <button
        className="ml-auto flex flex-col justify-center items-center w-8 h-8 sm:w-[32px] sm:h-[32px]"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        <span className="block w-[21px] h-[2px] bg-[#AEEE7C] mb-[5px] rounded"></span>
        <span className="block w-[21px] h-[2px] bg-[#AEEE7C] mb-[5px] rounded"></span>
        <span className="block w-[21px] h-[2px] bg-[#AEEE7C] rounded"></span>
      </button>

      {/* Menú desplegable */}
      {open && (
        <div
          className="
            xl:hidden fixed top-[52px] left-0
            w-full bg-[#030714] rounded-b-[5px]
            shadow-lg flex flex-col items-start px-6 pt-1 pb-6 gap-5 z-40
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white font-semibold text-sm hover:text-lime-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <SolidButton>Reserva una llamada</SolidButton>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;