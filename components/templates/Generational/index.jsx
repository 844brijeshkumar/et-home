import React from 'react';
import GenerationalArchive from './GenerationalArchive';

export default function GenerationalRouter({ data }) {
  // At this level of wealth, there are no sub-tiers. You are simply in the archive.
  return <GenerationalArchive data={data} />;
}