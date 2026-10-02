import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import ScrollProvider from '@/components/cinematic/ScrollProvider';
import LightingProvider from '@/components/cinematic/LightingProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

export const metadata: Metadata = {
  title: 'ET | Ultra-Luxury Cinematic Experience',
  description: 'Video-driven, GPU-friendly, progressively enhanced, and deliberately minimal.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-et-obsidian text-et-ivory antialiased`}>
        <ScrollProvider>
          <LightingProvider />
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>
        </ScrollProvider>
      </body>
    </html>
  );
}
