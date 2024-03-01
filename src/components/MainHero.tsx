import React, { useState } from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;

  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  // Manejar hover para el botón principal
  const handlePrimaryHover = (hover: boolean) => {
    setIsPrimaryHovered(hover);
  };

  // Manejar hover para el botón secundario
  const handleSecondaryHover = (hover: boolean) => {
    setIsSecondaryHovered(hover);
  };

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-vibrantYellow sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          {/* Usamos white para el subtítulo */}
          <span className={`block text-white xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        {/* Usamos lightCyan para la descripción */}
        <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="flex justify-center items-center mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.primaryAction.href}
              onMouseEnter={() => handlePrimaryHover(true)}
              onMouseLeave={() => handlePrimaryHover(false)}
              className="flex items-center justify-center border border-transparent rounded-md hover:border-white w-32 h-12 md:w-64 md:h-24"
              style={{
                backgroundImage: `url(${
                  isPrimaryHovered
                    ? mainHero.primaryAction.buttonImg2
                    : mainHero.primaryAction.buttonImg1
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
          {/* Botón de acción secundaria */}
          <div className="flex justify-center items-center mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              onMouseEnter={() => handleSecondaryHover(true)}
              onMouseLeave={() => handleSecondaryHover(false)}
              className="flex items-center justify-center border border-transparent rounded-md hover:border-white w-32 h-12 md:w-64 md:h-24"
              style={{
                backgroundImage: `url(${
                  isSecondaryHovered
                    ? mainHero.secondaryAction.buttonImg4
                    : mainHero.secondaryAction.buttonImg3
                })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
