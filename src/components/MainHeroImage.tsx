import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      {/* Imagen para pantallas grandes */}
      <img
        className="hidden lg:block sm:hidden h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="happy team image"
      />
      {/* Imagen para pantallas pequeñas */}
      <img
        className="block lg:hidden h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.imgSm}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
