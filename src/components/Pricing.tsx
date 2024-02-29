import React, { useState } from 'react';

import config from '../config/index.json'; // Asegúrate de que la ruta sea correcta

const Pricing = () => {
  const { donations, bankTabImages, mercadoPagoTabImages } = config;
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isBankHovered, setIsBankHovered] = useState(false);
  const [isMercadoPagoHovered, setIsMercadoPagoHovered] = useState(false);

  return (
    <section className="bg-background py-8" id="donations">
      <div className="container mx-auto px-2 pt-4 pb-12 flex flex-col justify-center items-center text-primary">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-vibrantYellow">
          {donations.title}
        </h1>
        <p className="text-center text-lg px-4 my-4 mx-auto max-w-2xl mt-10 mb-10">
          {donations.description}
        </p>
        <div className="flex justify-center mb-6">
          <div
            className="flex items-center justify-center border border-transparent rounded-md hover:border-white w-32 h-12 md:w-64 md:h-24 mr-4"
            style={{
              backgroundImage: `url(${
                isBankHovered ? bankTabImages.hover : bankTabImages.default
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onMouseEnter={() => setIsBankHovered(true)}
            onMouseLeave={() => setIsBankHovered(false)}
            onClick={() => setActiveTab(activeTab !== 'bank' ? 'bank' : null)}
          />
          <div
            className="flex items-center justify-center border border-transparent rounded-md hover:border-white w-32 h-12 md:w-64 md:h-24 mr-4"
            style={{
              backgroundImage: `url(${
                isMercadoPagoHovered
                  ? mercadoPagoTabImages.hover
                  : mercadoPagoTabImages.default
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onMouseEnter={() => setIsMercadoPagoHovered(true)}
            onMouseLeave={() => setIsMercadoPagoHovered(false)}
            onClick={() =>
              setActiveTab(activeTab !== 'mercadoPago' ? 'mercadoPago' : null)
            }
          />
        </div>
        {activeTab === 'bank' && (
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              {donations.bankDetails.title}
            </h2>
            <p>{donations.bankDetails.description}</p>
            <ul className="mt-4">
              {donations.bankDetails.accounts.map((account, index) => (
                <li key={index} className="mt-2">
                  <p>
                    <strong>Banco:</strong> {account.bankName}
                  </p>
                  <p>
                    <strong>Número de cuenta:</strong> {account.accountNumber}
                  </p>
                  <p>
                    <strong>Moneda:</strong> {account.currency}
                  </p>
                  {account.additionalInfo && (
                    <p>
                      <strong>Info:</strong> {account.additionalInfo}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'mercadoPago' && (
          <div className="flex flex-wrap">
            {donations.items.map((donationOption, index) => (
              <div key={index} className="w-full md:w-1/3 p-4 text-center">
                <div className="border rounded-lg p-4">
                  <h2 className="text-xl font-semibold">
                    {donationOption.name}
                  </h2>
                  <p className="mt-2">{donationOption.info}</p>
                  <a
                    href={donationOption.mercadoPagoLink}
                    className="mt-4 inline-block bg-primary text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donar
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
