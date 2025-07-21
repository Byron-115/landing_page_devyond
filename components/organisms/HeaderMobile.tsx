"use client";
import React, { useState } from "react";
import Image from "next/image";
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
    <div
  className={`w-full gap-3 flex flex-col mt-11 py-7 px-16 sm:px-8 transition-colors duration-300 md:hidden ${
    open ? "bg-[#030714]" : "bg-transparent"
  }`}
>
      {/* Bloque superior: Logo y burger */}
      <div className="flex flex-row items-start justify-between h-8">
        <Logo />
        <button
          className="w-8 h-8 flex object-contain cursor-pointer"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
         <Image
            src="/assets/images/icon-menu.png"
            alt="Menu Icon"
            width={32}
            height={32}
            className=""
          />
        </button>
      </div>

      {/* Bloque inferior: Navlinks y botón */}
      {open && (
        <div className="flex flex-col items-start max-w-[161] gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#ecffe0] font-semibold text-base sm:text-sm hover:text-lime-300 transition-colors text-left w-full whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex-shrink-0">
              <SolidButton>Reserva una llamada</SolidButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;