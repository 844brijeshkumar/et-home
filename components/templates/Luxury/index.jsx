import React from 'react';
import LuxuryBase from './LuxuryBase';
import LuxuryKinetics from './LuxuryKinetics';

export default function LuxuryRouter({ data }) {
  const spendRate = data.product?.spend_rate || 150;

  if (spendRate >= 200) {
    return <LuxuryKinetics data={data} />;
  }

  return <LuxuryBase data={data} />;
}