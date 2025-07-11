import React from "react";

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] pt-12 text-center">
    <h1 className="text-white text-4xl font-medium leading-tight max-w-3xl">
      Diseñamos y desarrollamos páginas webs modernas de alto rendimiento que
      <br />
      <span className="block text-[#82EC39] text-4xl font-medium mt-4">
        generan engagement
      </span>
    </h1>
    <p className="text-gray-300 text-lg font-light mt-6 max-w-xl">
      Somos expertos en construir webs que generan resultados<br />
      para llevar tu negocio un paso más allá.
    </p>
    <button
      className="mt-8 bg-[#82EC39] hover:bg-lime-300 text-black font-semibold rounded-full px-7 py-2 flex items-center gap-2 transition-colors"
    >
      Hablemos
      <span aria-hidden className="ml-1">↗</span>
    </button>
  </section>
);

export default HeroSection;