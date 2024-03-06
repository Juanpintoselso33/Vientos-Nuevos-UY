// src/components/MercadoPagoSection.tsx
import React from 'react';

import config from '../config/index.json';

const MercadoPagoSection = () => {
  const { donations } = config;

  return (
    <div className="text-center mt-8">
      <div className="w-full p-4 mx-auto">
        <div className="p-4">
          <h2 className="text-3xl font-bold leading-tight text-vibrantYellow mb-5">
            {donations.items[0]?.name}
          </h2>
          <p className="text-lg px-4 my-4 mx-auto max-w-2xl text-white">
            {donations.items[0]?.info}
          </p>
          <a
            href={donations.items[0]?.mercadoPagoLink}
            className="cursor-pointer mt-10 inline-block text-white font-bold py-2 px-4 rounded border border-white hover:bg-vibrantYellow bg-lightCyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link de pago
          </a>
        </div>
      </div>
    </div>
  );
};

export default MercadoPagoSection;
