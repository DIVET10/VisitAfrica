import { useState } from 'react';
import styles from './MenuNav.module.css';
import Link from 'next/link';

export default function MenuNav() {
    const [menuOpen, setMenuOpen] = useState(false);
   
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.nav}>
            {/* Menu hamburger */}
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
                <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
                <div className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}></div>
            </div>

            {/* Menu principal */}
            <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
              
             <li><Link href="/">Accueil</Link></li>
            <li><Link href="/attraction">Attraction</Link></li>
            <li><Link href="/destination">Destination</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            
            </ul>
        </nav>
    );
}
