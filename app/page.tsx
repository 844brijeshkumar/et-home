import GlobalAtmosphere from '@/components/cinematic/GlobalAtmosphere';
import CinematicStage from '@/components/cinematic/CinematicStage';
import Preloader from '@/components/cinematic/Preloader';
import ContextualNav from '@/components/cinematic/ContextualNav';
import ScrollProgress from '@/components/cinematic/ScrollProgress';
import CustomCursor from '@/components/cinematic/CustomCursor';

// Scenes
import Void from '@/components/sections/01-Void';
import Philosophy from '@/components/sections/02-Philosophy';
import Vault from '@/components/sections/03-Vault';
import Identity from '@/components/sections/04-Identity';
import Syndicate from '@/components/sections/05-Syndicate';
import Theatre from '@/components/sections/06-Theatre';
import Recognition from '@/components/sections/07-Recognition';
import Reserve from '@/components/sections/08-Reserve';
import Invitation from '@/components/sections/09-Invitation';

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
