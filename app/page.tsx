"use client";
import HeaderDesktop from "../components/organisms/HeaderDesktop";
import HeaderMobile from "../components/organisms/HeaderMobile";
import HeroSection from "@/components/organisms/HeroSection";
import { useState } from "react";
import ProductSection from "@/components/organisms/ProductSection";
import ClientSection from "@/components/organisms/ClientSection";

export default function Home() {
  const [headerOffset, setHeaderOffset] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-72">
        <HeaderDesktop setHeaderOffset={setHeaderOffset} />
        <HeaderMobile />
        <HeroSection />
        <ClientSection />
        <ProductSection />
      </div>
    </>
  )
}
