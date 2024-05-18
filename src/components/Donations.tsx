// src/components/Donations.tsx
import React, { useState } from 'react';

// This should come first
import BankInfoSection from './BankInfoSection';
import MercadoPagoSection from './MercadoPagoSection';
import ThankYouSection from './ThanksSection';
import config from '../config/index.json'; // This should come after

const Donations = () => {
  const { donations, bankTabImages, mercadoPagoTabImages } = config;
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isBankHovered, setIsBankHovered] = useState(false);
  const [isMercadoPagoHovered, setIsMercadoPagoHovered] = useState(false);

  return (
    <section className="bg-background py-8" id="donations">
      <div className="container mx-auto px-2 pt-4 pb-12 flex flex-col justify-center items-center text-primary">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-vibrantYellow mb-20">
          {donations.title}
        </h1>

        {donations.description.map((paragraph, index) => (
          <p
            key={index}
            className="text-center text-lg px-4 my-4 mx-auto max-w-2xl mb-5"
          >
            {paragraph}
          </p>
        ))}
        <div className="flex justify-center mb-6 mt-10">
          <div
            className="flex items-center cursor-pointer justify-center border border-transparent rounded-md hover:border-white w-32 h-12 md:w-64 md:h-24 mr-4 transition-opacity duration-500 ease-in-out hover:opacity-75"
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
            className="flex items-center cursor-pointer justify-center border border-transparent rounded-md hover:border-white w-32 h-12 md:w-64 md:h-24 mr-4 transition-opacity duration-500 ease-in-out hover:opacity-75"
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
        {activeTab === 'bank' && <BankInfoSection />}
        {activeTab === 'mercadoPago' && <MercadoPagoSection />}
      </div>
      {(activeTab === 'bank' || activeTab === 'mercadoPago') && (
        <ThankYouSection />
      )}
    </section>
  );
};

export default Donations;
