
import  { Metadata } from "next";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import favicon from '@/images/Platform Feedback icon.png'


export const metadata: Metadata = {
  title: 'Hali Halisi',
  description: 'Hali Halisi is the place for top-tier, vetted Sign Interpreters to advance their careers and access exclusive opportunities.',
  icons:{
      icon:favicon.src,
      apple:favicon.src
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <ClientProvider >
        {children}
        </ClientProvider>
        </body>
    </html>
  );
}
