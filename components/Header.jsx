import styles from './Header.module.css';
import Image from 'next/image';
import Afrique from '@/public/Afrique.webp';

import MenuNav from './MenuNav';

export default function Header({ setPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Image
          src={Afrique}
          alt="logo de Notre page Web"
          width={60}
          height={60}
        />
        <h1>
          <span className={styles.v}>V</span>isit <span className={styles.Africa}>Africa</span>
        </h1>
      </div>
      <div className={styles.navContainer}>
        <MenuNav setPage={setPage} />
      </div>
    </header>
  );
}
