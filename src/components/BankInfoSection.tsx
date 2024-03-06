// src/components/BankInfoSection.tsx
import React from 'react';

import config from '../config/index.json';

const BankInfoSection = () => {
  const { donations } = config;
  const { bankDetails } = donations;

  return (
    <div className="text-center mt-8">
      <div className="w-full p-4 mx-auto">
        <div className="p-4">
          <h2 className="text-3xl font-bold leading-tight text-vibrantYellow mb-5">
            {bankDetails.title}
          </h2>
          <p className="text-lg px-4 my-4 mx-auto max-w-2xl text-white">
            {bankDetails.description}
          </p>
          {bankDetails.accounts.map((account, index) => (
            <div key={index} className="mt-4">
              <p>{account.bankName}</p>
              <p>{account.accountNumber}</p>
              <p>{account.currency}</p>
              <p>{account.additionalInfo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankInfoSection;
