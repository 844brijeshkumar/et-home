'use client';

import { useMousePosition } from '@/hooks/useMousePosition';

export default function LightingProvider() {
  useMousePosition();
  return null; // This component just mounts the hook
}
