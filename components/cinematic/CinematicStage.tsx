'use client';

import { ReactNode } from 'react';

interface CinematicStageProps {
  children: ReactNode;
}

export default function CinematicStage({ children }: CinematicStageProps) {
  return (
    <div className="relative w-full flex flex-col z-10">
      {children}
    </div>
  );
}
