import React, { useState } from 'react';

import config from '../config/index.json';

const ThankYouSection = () => {
  const { donations } = config;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold leading-tight text-vibrantYellow mb-5">
        {donations.thanksMessage.title}
      </h2>
      {donations.thanksMessage.description.map((paragraph, index) => (
        <p
          key={index}
          className="text-lg px-4 my-4 mx-auto max-w-2xl text-white"
        >
          {paragraph}
        </p>
      ))}
      <div className="flex justify-center mt-10">
        {/* Envuelve el div con un elemento 'a' para hacerlo clickeable */}
        <a
          href={donations.thanksMessage.href} // Este es el link al que el usuario será dirigido
          className="cursor-pointer hover:border-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="border border-white rounded-md w-40 h-12 md:w-72 md:h-24 mt-5" // Ajusta las clases de ancho aquí
            style={{
              backgroundImage: `url(${
                isHovered
                  ? donations.thanksMessage.hover
                  : donations.thanksMessage.default
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </a>
      </div>
    </div>
  );
};

export default ThankYouSection;
