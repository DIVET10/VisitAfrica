import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/public/logo.webp';
import MenuNav from './MenuNav';

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title}>
            <Image
                src={logo}
                alt="logo de Notre page Web"
                width={60}
            />
            <h1>VisitAfrica</h1>
        </div>
        <MenuNav/>
    </header>
}