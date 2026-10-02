import React from 'react';
import GoldBase from './GoldBase';
import GoldCatchy from './GoldCatchy';

export default function GoldRouter({ data }) {
  const spendRate = data.product?.spend_rate || 30;

  if (spendRate >= 50) {
    return <GoldCatchy data={data} />;
  }

  return <GoldBase data={data} />;
}