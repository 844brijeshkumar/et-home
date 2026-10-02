import React from 'react';
import SilverBase from './SilverBase';
import SilverCatchy from './SilverCatchy';

export default function SilverRouter({ data }) {
  const { spend_rate } = data.product;

  // Sub-routing logic
  if (spend_rate >= 20) {
    return <SilverCatchy data={data} />;
  }

  // Fallback to the 10% base template
  return <SilverBase data={data} />;
}