import '@/app/ui/global.css';
import { inter } from './ui/font';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard - Next.js Project',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Acme - Next.js Course</title>
        <meta name='description' content="Acme CRM - A Next.js project from Next.js docs"></meta>
        <meta name='keywords' content="next.js, next, react, crm, project dashboard"></meta>
        <meta property='og:title' content='Acme CRM - Next.js Project'></meta>
        <meta property='og:description' content='Acme CRM - A Next.js project from Next.js docs'></meta>
        <meta property='og:image' content='Acme-CRM'></meta>
        <link rel='icon' href='./favicon.ico'></link>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
