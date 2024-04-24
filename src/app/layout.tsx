import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/nav';
import Footer from '@/components/footer/footer';

const inter = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rasmus Eklund',
  description: 'Rasmus Eklund portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-sky-900 via-sky-300 to-sky-900 ${inter.className} flex h-screen flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
