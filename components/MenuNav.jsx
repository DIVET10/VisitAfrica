import styles from './MenuNav.module.css';

export default function MenuNav() {
    return (
        <nav className={styles.nav}>
            <ul>

                {/* <li><a href="#">Accueil</a></li>
               
                <li><a href="#">Destinations populaires</a></li>


                <li className={styles.contact}><a href="#">Contact</a></li> */}

                <li><a href="#">Accueil</a></li>

                <li><a href="#">Destinations </a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
