import React from 'react';
import EliteApex from './EliteApex';
import EliteInfinite from './EliteInfinite';

export default function EliteRouter({ data }) {
  const spendRate = data.product?.spend_rate || 300;

  if (spendRate >= 500) {
    return <EliteInfinite data={data} />;
  }

  return <EliteApex data={data} />;
}