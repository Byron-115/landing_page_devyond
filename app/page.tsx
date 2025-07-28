"use client";
import HeaderDesktop from "../components/organisms/HeaderDesktop";
import HeaderMobile from "../components/organisms/HeaderMobile";
import HeroSection from "@/components/organisms/HeroSection";
import ProductSection from "@/components/organisms/ProductSection";
import ClientSection from "@/components/organisms/ClientSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  

  return (
    <>
      <div className="flex flex-col gap-72">
        <HeaderDesktop />
        <HeaderMobile />
        <HeroSection />
        <ClientSection />
        <ProductSection />
        <Footer />
      </div>
    </>
  )
}
