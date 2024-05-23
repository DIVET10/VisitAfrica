'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Accueil from '@/components/Accueil';
import Attraction from '@/components/Attraction';
import Destination from '@/components/Destination';
import Contact from '@/components/Contact';
import styles from './layout.module.css';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [page, setPage] = useState('accueil');

  return (
    <html lang="en">
      <body className={inter.className + ' ' + styles.body}>
        <div>
          <Header setPage={setPage} />
        
          <main className={styles.main}>
            {page === 'accueil' && <Accueil />}
            {page === 'attraction' && <Attraction />}
            {page === 'contact' && <Contact />}
            {page === 'destination' && <Destination />}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}