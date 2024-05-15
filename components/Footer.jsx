import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>&copy; VisitAfrica</div>
            <div>Adresse: 123 Olmstar street , Ottawa, Canada</div>
            <div>Téléphone: +123 456 789</div>
            <div> Email: info@visitafrica.com</div>
        </footer>
    );
}
