"use client"
import React, { useState } from 'react';

interface Currency {
  value: string;
  label: string;
}

const currencies: Currency[] = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Español' },
  { value: 'Italian', label: 'Italiano' },
  { value: 'German', label: 'Deutsch' },
  { value: 'French', label: 'Français' },
  { value: 'Arabic', label: 'العربية' },
  { value: 'Hebrew', label: 'עברית' },
  { value: 'Dutch', label: 'Nederlands' },
  { value: 'Japanese', label: '日本語' },
  { value: 'Polish', label: 'Polski' },
  { value: 'Portuguese (Brazil)', label: 'Português (Brasil)' },
  { value: 'Romanian', label: 'Română' },
  { value: 'Swedish', label: 'Svenska' },
  { value: 'Thai', label: 'ภาษาไทย' },
  { value: 'Turkish', label: 'Türkçe' },
  { value: 'Simplified Chinese', label: '简体中文' },
  { value: 'Norwegian Bokmål', label: 'Norsk (Bokmål)' },
  { value: 'Russian', label: 'Русский' },
];

export default function Language() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className='bg-transparent '>
      <select id="currency-selector" value={selectedCurrency} onChange={handleChange} className='px-3 py-2 bg-transparent border border-black dark:border-white '>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value} className='bg-transparent text-black dark:bg-zinc-800'>
            {currency.label}
          </option>
        ))}
      </select>
    </div>
  );
}
