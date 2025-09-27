import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Codelink International - Modern Software Solutions',
  description: 'Empowering businesses with modern software solutions. Simplify your workflows with our Inventory SaaS platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}