import React from "react";

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center w-[846px] h-[462px] mx-auto">
    {/* Contenedor de texto principal */}
    <div className="w-[846px] h-[283px] flex flex-col items-center">
      {/* Título */}
      <div className="w-[846px] h-[127px] flex items-center justify-center">
        <div className="w-[846] h-[70] flex flex-col items-center justify-center">
          <h1 className="text-white font-medium text-4xl text-center leading-tight w-full">
            Diseñamos y desarrollamos páginas webs modernas de alto rendimiento que<br />
          </h1>
          <span className="text-[#82EC39] text-4xl font-medium mt-4 text-center w-full">generan engagement</span>
        </div>
      </div>
      {/* Subtítulo + botón */}
      <div className="font-sf w-[846px] h-[112px] flex flex-col items-center justify-between mt-11">
        <div className="w-[690px] h-[40px] flex items-center justify-center mx-auto">
          <p className="text-gray-300 font-light leading-lg text-lg text-center w-full">
            Somos expertos en construir webs que generan resultados<br />
            para llevar tu negocio un paso más allá.
          </p>
        </div>
        <div className="mt-10">
          <button
            className="w-[116px] h-[40px] bg-[#82EC39] hover:bg-lime-300 text-black font-semibold rounded-full flex items-center justify-center pl-4 pr-3 gap-1 transition-colors"
          >
            Hablemos
            <span className="flex items-center justify-center w-[20px] h-[20px] self-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block align-middle"
              >
                <path
                  d="M5 11L11 5M11 5H6.5M11 5V9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;