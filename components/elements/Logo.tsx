import Image from "next/image";
import React from "react";

const Logo: React.FC = () => (
    <a href="https://www.devyond.com/es" aria-label="DEvyond Home" className="inline-block">
        <Image
            src="/assets/images/logo_devyond_dark.jpg"
            alt="Logo Devyond"
            width={115}
            height={26}
            priority                
        />
    </a>
);

export default Logo;