import React from 'react';

const ClientSection: React.FC = () => (
    <section
        className="
        relative
        flex flex-col
        gap-8
        w-full
        px-8
        py-8
        sm:flex-col
        lg:flex-row
        lg:items-center
        lg:max-w-[1064px]
        lg:mx-[108px]
        lg:mt-[94.4px]
        lg:mb-[116.7px]
        lg:p-0
        "
    >
    <div
      className="
        absolute right-0 top-1/2
        w-[146.4px] h-[1266.6px]
        pl-[146.3px]
        bg-[radial-gradient(circle_at_254%_50%,_#909304,_rgba(0,154,220,0)_61%)]
        blur-[148px]
        rotate-[-270deg]
        pointer-events-none
        z-0
      "
    />
    {/* Columna izquierda: texto principal */}
    <div className="flex flex-col flex-1  sm:max-w-[494px] xl:max-w-113.75 gap-7 sm:gap-10 xl:gap-14">
        <p className="text-2xl sm:text-4xl xl:text-5xl font-medium text-left text-white self-stretch ">
        Estés en el punto que estés, llevamos tu presencia web un paso <span className="text-[#82ec39]">más allá</span>
        </p>
        <p className="use-system-font text-[#ecffe0] font-light text-base sm:text-xl leading-normal">
        Creamos productos digitales completos o nos integramos como tu equipo frontend externo.
        </p>
    </div>

    {/* Columna derecha: dos rectángulos */}
    <div className="flex flex-col gap-8">
        {/* Primer rectángulo */}
        <div
        className="w-74 sm:w-144 xl:w-130 h-49.75 sl:h-86 p-[40px_10px_9px_33px] opacity-0.14 backdrop-blur-[100px] rounded-xl flex flex-col justify-between"
        >
            <p className="text-xl sm:text-3xl font-semibold text-white mb-4 max-w-57 sm:max-w-93.75">
                ¿Tienes una idea y quieres hacerla realidad desde 0?
            </p>
            <div className="w-15 h-15 flex items-center justify-center ml-auto cursor-pointer">
            <svg width="60" height="60" viewBox="0 0 25 25" fill="none">
                <path
                d="M5.833 5.833h8.334m0 0v8.334m0-8.334-8.334 8.334"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </div>
        </div>
        {/* Segundo rectángulo */}
        <div
        className="w-74 sm:w-144 xl:w-130 h-86 p-[40px_10px_9px_33px] opacity-0.14 backdrop-blur-[100px] rounded-xl flex flex-col justify-between"
        >
        <p className="text-xl sm:text-3xl font-semibold text-white mb-4 max-w-57 sm:max-w-93.75">
            ¿Ya tienes diseño o backend y necesitas un desarrollo frontend ágil?
        </p>
        <div className="w-15 h-15 flex items-center justify-center ml-auto cursor-pointer">
            <svg width="60" height="60" viewBox="0 0 25 25" fill="none">
                <path
                d="M5.833 5.833h8.334m0 0v8.334m0-8.334-8.334 8.334"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </div>
        </div>
    </div>
    </section>
)

export default ClientSection;