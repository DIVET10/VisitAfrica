"use client"; 
import { useState } from 'react';
import Header from '@/components/Header'
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";
import styles from './layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className +' '+styles.body}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
