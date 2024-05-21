import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/public/logo.webp';
import Afrique from '@/public/Afrique.webp';


import MenuNav from './MenuNav';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <Image
                    src={Afrique}
                    alt="logo de Notre page Web"
                    width={60}
                    height={60}
                />
                <h1><span className={styles.v}>V</span>isit <span className={styles.Africa}>Africa</span> </h1> 
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A propos</a></li>
                    <li><a href="#">Destinations populaires</a></li>
                    <li className={styles.contact}><a href="#">Contact</a></li>
                </ul>
            </nav>
             {/* <MenuNav /> */}
        </header>
    );
}
