"use client";
import BelowHeroSection from "@/components/organisms/BelowHeroSection";
import HeaderDesktop from "../components/organisms/HeaderDesktop";
import HeaderMobile from "../components/organisms/HeaderMobile";
import HeroSection from "@/components/organisms/HeroSection";
import { useState } from "react";
import ProductSection from "@/components/organisms/ProductSection";

export default function Home() {
  const [headerOffset, setHeaderOffset] = useState(0);

  return (
    <>
      <HeaderDesktop setHeaderOffset={setHeaderOffset} />
      <HeaderMobile />
      <div className="pt-[72px] text-white flex justify-center items-center h-[80vh]">
        <HeroSection />
      </div>
      <BelowHeroSection />
      <ProductSection />

    </>
  )
}
