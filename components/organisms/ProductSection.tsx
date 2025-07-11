import React from "react";

const icons = [
  "/icons/shopify.svg",
  "/icons/supabase.svg",
  "/icons/tailwind.svg",
  "/icons/react.svg",
  "/icons/next.svg",
];

const ProductSection: React.FC = () => (
  <section className="w-full flex flex-row items-center justify-center gap-8 py-16 px-4 bg-transparent">
    {/* Columna de iconos */}
    <div className="flex flex-col gap-8 items-center mr-4">
      {icons.map((src, i) => (
        <img key={i} src={src} alt="" className="w-7 h-7 opacity-90" />
      ))}
    </div>

    <div className="flex-shrink-0">
        <img
            src="/assets/images/product_image.png"
            alt="Product Section Image"
            className="w-[320px] h-auto object-contain"
        />
    </div>

    {/* Texto y botón */}
    <div className="flex flex-col justify-center ml-8 max-w-md">
      <h2 className="text-[#AEEE7C] text-2xl md:text-3xl font-medium mb-4">
        Aplicación Web / MVP
      </h2>
      <p className="text-gray-200 text-base md:text-lg mb-4">
        Aplicaciones web funcionales y ágiles, centradas en{" "}
        <span className="text-[#AEEE7C]">experiencia de usuario</span> desde el inicio. Priorizamos la entrega rápida de un MVP útil, validable y preparado para evolucionar sin rehacer desde cero.
      </p>
      <p className="text-gray-200 text-base md:text-lg mb-8">
        El stack que usamos nos permite <span className="text-[#AEEE7C]">escalar</span>, integrar nuevas funciones o <span className="text-[#AEEE7C]">automatizar procesos</span> sin perder velocidad ni control.
      </p>
      <button className="border border-white text-white rounded-full px-6 py-2 font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-colors w-fit">
        Ver cómo lo hacemos
        <span aria-hidden className="ml-1">↗</span>
      </button>
    </div>
  </section>
);

export default ProductSection;