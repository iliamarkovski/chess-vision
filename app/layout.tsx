import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.scss';
import { Layout } from '@/components/Layout/Layout';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Chess Vision',
    default: 'Chess Vision',
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}