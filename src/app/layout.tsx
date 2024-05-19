'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { RatingsProvider } from '../app/panel/add-ratings/[[...stepIndex]]/RatingsContext';
import store from '@/redux/store'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      
      <Provider store={store}>
        {children}
        </Provider>
        
        </body>
    </html>
  );
}
