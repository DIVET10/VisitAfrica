import { useState } from 'react';
import styles from './MenuNav.module.css';

export default function MenuNav({ setPage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.nav}>
            {/* Menu hamburger */}
            <div className={styles.menuToggle} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {/* Menu principal */}
            <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
                <li><a href="#" onClick={() => setPage('accueil')}>Accueil</a></li>
                <li><a href="#" onClick={() => setPage('attraction')}>Attraction</a></li>
                <li><a href="#" onClick={() => setPage('destination')}>Destination</a></li>
                <li className={styles.contact}><a href="#" onClick={() => setPage('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
}
