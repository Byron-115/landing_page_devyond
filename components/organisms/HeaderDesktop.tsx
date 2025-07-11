"use client";
import React, { useEffect, useState } from "react";
import Logo from "../elements/Logo";
import SolidButton from "../elements/SolidButton";

const navLinks = [
    { href: "#", label: "Nuestra metodología" },
    { href: "#", label: "Stack tecnológico" },
    { href: "#", label: "Servicios" },
    { href: "#", label: "F.A.Q." },
];

interface HeaderDesktopProps {
    setHeaderOffset?: (offset: number) => void;
}

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ setHeaderOffset }) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [headerOffset, setLocalHeaderOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const maxOffset = 52;
            const offset = Math.min(currentScrollY, maxOffset);

            setLocalHeaderOffset(offset);
            setHeaderOffset && setHeaderOffset(offset);

            if (currentScrollY > lastScrollY && currentScrollY > maxOffset) {
                setShow(false); // Se oculta al bajar
            } else {
                setShow(true);  // Se muestra al subir
            }
            setIsSticky(currentScrollY > maxOffset);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, setHeaderOffset]);

    return (
        <>
            {/* Header normal: se desvanece y desplaza al hacer scroll */}
            {headerOffset < 52 && (
                <header
                    className={`
                        hidden md:flex fixed top-[30px] left-0 w-full
                        z-50 bg-transparent
                        transition-transform duration-300 ease-in-out
                        pointer-events-auto
                    `}
                    style={{
                        transform: `translateY(-${headerOffset}px)`,
                        opacity: 1 - headerOffset / 52,
                    }}
                >
                    <div className={`
                        flex items-center rounded-full 
                        h-[52px] 
                        px-1 sm:px-2 md:px-4 lg:px-6
                        gap-1 sm:gap-2 md:gap-4 lg:gap-8
                        w-full max-w-[1600px] justify-between mx-auto
                    `}>
                        <div className="flex-shrink-0 w-[115px] h-[26px] flex items-center">
                            <Logo />
                        </div>
                        <nav className="flex flex-nowrap gap-1 sm:gap-3 lg:gap-12 xl:gap-16">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white font-medium text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex-shrink-0">
                            <SolidButton>Reserva una llamada</SolidButton>
                        </div>
                    </div>
                </header>
            )}

            {/* Header sticky */}
            {isSticky && (
                <header
                    className={`
                        hidden md:flex fixed top-6 left-0 w-full
                        z-50 bg-transparent
                        transition-transform duration-300 ease-in-out
                        ${show ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
                    `}
                >
                    <div className={`
                        flex items-center rounded-full 
                        h-[52px] 
                        px-1 sm:px-2 md:px-4 lg:px-6
                        gap-1 sm:gap-2 md:gap-4 lg:gap-8
                        w-auto max-w-fit mx-auto
                        shadow-[0_2px_6.9px_0px_#93E657] border-t-[2px] border-b-[5px] border-[#93E657] bg-black
                    `}
                        style={{
                            borderTopWidth: "2px",
                            borderBottomWidth: "5px",
                            borderColor: "#93E657",
                            boxShadow: "0 2px 6.9px 0 #93E657",
                        }}
                    >
                        <nav className="flex flex-nowrap gap-1 sm:gap-3 lg:gap-12 xl:gap-16">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white font-medium text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex-shrink-0">
                            <SolidButton>Reserva una llamada</SolidButton>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
};

export default HeaderDesktop;