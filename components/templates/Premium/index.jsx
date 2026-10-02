import React from 'react';
import PremiumBase from './PremiumBase';
import PremiumUltimate from './PremiumUltimate';

export default function PremiumRouter({ data }) {
  const spendRate = data.product?.spend_rate || 75;

  if (spendRate >= 100) {
    return <PremiumUltimate data={data} />;
  }

  return <PremiumBase data={data} />;
}