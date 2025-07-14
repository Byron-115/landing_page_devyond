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
            {/* Header fijo*/}
            {headerOffset < 52 && (
                <header
                    className={`
                         font-sf hidden md:flex fixed top-[45px] left-0 w-full
                        z-50 
                        transition-transform duration-300 ease-in-out
                        pointer-events-auto bg-transparent
                    `}
                    style={{
                        transform: `translateY(-${headerOffset}px)`,
                        opacity: 1 - headerOffset / 52,
                    }}
                >
                    <div className= "flex items-center w-full max-w-[846px] mx-auto h-[52px]">
                        {/* Logo */}
                        <div className="flex items-center w-[115px] h-[26px] flex-shrink-0">
                            <Logo />
                        </div>
                        {/* Contenedor de 756x52px */}
                        <div className="flex items-center w-[756px] h-[52px]">
                            {/* Navlinks + botón en 657x28px */}
                            <div className="flex items-center justify-between w-[657px] h-[28px] ml-18.5 pl-2">
                                <nav className="flex flex-nowrap gap-5">
                                    {/* {navLinks.map((link) => (
                                        <a 
                                            key={link.label}
                                            href={link.href}
                                            className="text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                        >
                                            {link.label}
                                        </a>
                                    ))} */}
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-[155px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                    >
                                        Nuestra metodología
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-[134px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                    >
                                        Stack tecnológico
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-[77px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                        style={{ padding: 0 }}
                                    >
                                        Servicios
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center w-[50px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                        style={{ padding: 0 }}
                                    >
                                        F.A.Q.
                                    </a>

                                </nav>
                                <div className="flex-shrink-0 w-[161px] h-[28px] ml-4.5">
                                    <SolidButton>Reserva una llamada</SolidButton>
                                </div>
                            </div>
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
                        w-[737px] h-[52px] mx-auto
                        shadow-[0_2px_6.9px_0px_#93E657] border-1 border-black bg-black
                        `}
                        style={{
                            boxShadow: "0 2px 6.9px 0 #93E657",
                        }}
                    >
                        <div className="flex items-center justify-between w-[657px] h-[28px] mx-auto">
                            <nav className="flex flex-nowrap gap-5">
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-[155px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                >
                                    Nuestra metodología
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-[134px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                >  
                                    Stack tecnológico
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-[77px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"                                    style={{ padding: 0 }}
                                >
                                    Servicios
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-[50px] h-[17px] text-white font-semibold text-sm hover:text-lime-300 transition-colors whitespace-nowrap"
                                    style={{ padding: 0 }}
                                >
                                    F.A.Q.
                                </a>
                            </nav>
                            <div className="flex-shrink-0 w-[161px] h-[28px]">
                                <SolidButton>Reserva una llamada</SolidButton>
                            </div>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
};

export default HeaderDesktop;