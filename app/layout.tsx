import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Layout } from '@/components/Layout/Layout';
import '@/styles/globals.scss';

import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Chess Vision',
    default: 'Chess Vision',
  },
  description:
    'Master chess notation effortlessly with our interactive exercises',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
