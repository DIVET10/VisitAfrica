// Header.jsx

import styles from './Header.module.css';
import Image from 'next/image';
import Afrique from '@/public/logo3.webp';
import { useRouter } from 'next/router'; // Importer useRouter depuis next/router
import MenuNav from './MenuNav';

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.title}>
      <a href="/">
          <Image
            src={Afrique}
            alt="logo de Notre page Web"
            width={60}
            height={60}
          />
        </a>
        <h1 className={styles.h1}>
          <span className={styles.v}>V</span>isitAfrica 
        </h1>
      </div>
      <div className={styles.navContainer}>
        <MenuNav />
      </div>
    </header>
  );
}
