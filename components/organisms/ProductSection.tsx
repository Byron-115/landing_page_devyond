import React from "react";
import Image from "next/image";

const icons = [
  "/assets/images/icon-storybook-inverse-1.svg",
  "/assets/images/supabase-logo-icon-1.svg",
  "/assets/images/icon-tailwind.svg",
  "/assets/images/icon-react.svg",
  "/assets/images/icon-next.svg",
];

const ProductSection: React.FC = () => (
  <section className="flex flex-col max-w-266 gap-10 xl:gap-14 mx-auto px-8 sm:px-0 py-0">
    {/* Título */}
    <h2 className="text-center text-white text-3xl font-medium leading-1.2 mx-auto max-w-50 h-14 
        flex items-center justify-center sm:max-w-none sm:h-auto">
      ¿Qué tienes en mente?
    </h2>
    {/* Contenido principal */}
    <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-28">
      {/* Imagen*/}
      <div className="xl:order-2 flex-shrink-0">
          <Image
            src="/assets/images/product_image.png"
            alt="Product Image"
            width={388}
            height={331}
          />
      </div>
      {/* Iconos */}
      <div className="order-2 xl:order-1 flex flex-row xl:flex-col gap-4 items-center mr-0 pb-5">
        {icons.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={52}
            height={52}
            className="w-13 h-13 opacity-90"
          />
        ))}
      </div>
      {/* Texto y botón */}
      <div className="order-3 flex flex-col justify-center gap-7 leading-1.43">
        <h2 className="text-[#ecffe0] text-2xl font-medium">
          Aplicación Web / MVP
        </h2>
        <div className="use-system-font flex flex-col text-white text-left text-sm leading-1.43 gap-6 max-w-101 mt-3">
          <p> Aplicaciones web funcionales y ágiles, centradas en <span className="text-[#82ec39]">experiencia de usuario</span> desde el inicio. Priorizamos la entrega rápida de un MVP útil, validable y preparado para evolucionar sin rehacer desde cero.
          </p>
          <p> El stack que usamos nos permite <span className="text-[#82ec39]">escalar</span>, integrar nuevas funciones o <span className="text-[#82ec39]">automatizar procesos</span> sin perder velocidad ni control.
          </p>
        </div>
        <button 
          className="
            flex flex-row justify-start border max-w-fit
          text-white text-sm rounded-full px-3 py-2 
            items-center gap-1.5 hover:bg-white hover:text-black 
            transition-colors cursor-pointer"
          style={{
            borderImage: "linear-gradient(to right, #000, #666) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
            >
          <span className="text-left font-semibold">
            Ver cómo lo hacemos
          </span>
          <span className="flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5.833 5.833h8.334m0 0v8.334m0-8.334-8.334 8.334"
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
  </section>
);

export default ProductSection;
