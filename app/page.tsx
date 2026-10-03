import GlobalAtmosphere from '@/components/cinematic/GlobalAtmosphere';
import CinematicStage from '@/components/cinematic/CinematicStage';
import Preloader from '@/components/cinematic/Preloader';
import ContextualNav from '@/components/cinematic/ContextualNav';
import ScrollProgress from '@/components/cinematic/ScrollProgress';
import CustomCursor from '@/components/cinematic/CustomCursor';

import dynamic from 'next/dynamic';

const Void = dynamic(() => import('@/components/sections/01-Void'));
const Philosophy = dynamic(() => import('@/components/sections/02-Philosophy'));
const Vault = dynamic(() => import('@/components/sections/03-Vault'));
const Identity = dynamic(() => import('@/components/sections/04-Identity'));
const Syndicate = dynamic(() => import('@/components/sections/05-Syndicate'));
const Theatre = dynamic(() => import('@/components/sections/06-Theatre'));
const Recognition = dynamic(() => import('@/components/sections/07-Recognition'));
const Reserve = dynamic(() => import('@/components/sections/08-Reserve'));
const Invitation = dynamic(() => import('@/components/sections/09-Invitation'));

export default function HomePage() {
  return (
    <main className="et-home relative">
      <CustomCursor />
      <Preloader />
      
      <GlobalAtmosphere />

      {/* Cinematic Navigation & Progress */}
      <ContextualNav />
      <ScrollProgress />
      
      <CinematicStage>
        <Void />
        <Philosophy />
        <Vault />
        <Identity />
        <Syndicate />
        <Theatre />
        <Recognition />
        <Reserve />
        <Invitation />
      </CinematicStage>
    </main>
  );
}
