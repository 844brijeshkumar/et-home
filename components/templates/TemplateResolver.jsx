import React, { lazy, Suspense } from 'react';

// LAYER 2: Lazy Load the Tier Micro-Routers. 
// The browser will ONLY download the file that actually gets rendered.
const SilverRouter = lazy(() => import('../Templates/Silver/index'));
const GoldRouter = lazy(() => import('../Templates/Gold/index'));
const PremiumRouter = lazy(() => import('../Templates/Premium/index'));
const LuxuryRouter = lazy(() => import('../Templates/Luxury/index'));
const EliteRouter = lazy(() => import('../Templates/Elite/index'));
const GenerationalRouter = lazy(() => import('../Templates/Generational/index'));
const StandardRouter = lazy(() => import('../Templates/Standard/index'));
// Optional: A sleek, branded loading state while the chunk downloads
const TemplateLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-t-2 border-[#d1c986] rounded-full animate-spin"></div>
  </div>
);

export default function TemplateResolver({ patronData }) {
  const { next_tier } = patronData;
const { type: product_type, spend_rate } = patronData.product;

  // Render logic based on the backend data payload
  const renderTemplate = () => {
    // If they only bought standard merchandise, they don't get the variable UI

    if (product_type?.toUpperCase() === 'STANDARD') return <StandardRouter data={patronData} />;

    // The Routing Logic (Scalable indefinitely)
    if (spend_rate >= 1000) return <GenerationalRouter data={patronData} />;
    if (spend_rate >= 300) return <EliteRouter data={patronData} />;
    if (spend_rate >= 150) return <LuxuryRouter data={patronData} />;
    if (spend_rate >= 75) return <PremiumRouter data={patronData} />;
    if (spend_rate >= 30) return <GoldRouter data={patronData} />;
    if (spend_rate >= 10) return <SilverRouter data={patronData} />;
    
    return null;
  };

  return (
    // Suspense catches the lazy-loaded components and shows the loader until the network finishes downloading the chunk
    <Suspense fallback={<TemplateLoader />}>
      {renderTemplate()}
    </Suspense>
  );
}