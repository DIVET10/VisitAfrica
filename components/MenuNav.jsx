import styles from './MenuNav.module.css';

export default function MenuNav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Destinations </a></li>
                <li className={styles.contact}><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
