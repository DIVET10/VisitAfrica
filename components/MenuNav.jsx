import styles from './MenuNav.module.css';

export default function MenuNav({ setPage }) {
    return  <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><a href="#" onClick={() => setPage('accueil')}>Accueil</a></li>
                <li><a href="#" onClick={() => setPage('attraction')}>Attraction</a></li>
                <li><a href="#" onClick={() => setPage('destination')}>Destination</a></li>
                <li className={styles.contact}><a href="#" onClick={() => setPage('contact')}>Contact</a></li>
            </ul>
        </nav>
    ;
}
