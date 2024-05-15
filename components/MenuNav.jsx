import styles from './MenuNav.module.css';

export default function MenuNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Safaris</a></li>
                <li><a href="#">Plages</a></li>
                <li><a href="#">Sites historiques</a></li>
                <li><a href="#">Destinations populaires</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
