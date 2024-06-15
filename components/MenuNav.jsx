import { useState } from 'react';
import styles from './MenuNav.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuNav() {
    const pathname = usePathname();
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
                <li>
                    <Link href="/" className={pathname === '/' ? styles.active : ''}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/attraction" className={pathname === '/attraction' ? styles.active : ''}>
                        Attraction
                    </Link>
                </li>
                <li>
                    <Link href="/destination" className={pathname === '/destination' ? styles.active : ''}>
                        Destination
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/connexion" className={pathname === '/connexion' ? styles.active : ''}>
                        Connexion
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
