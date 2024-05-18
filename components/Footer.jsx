
import React from 'react';


import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-md-4">
                        <h4>À propos de nous</h4>
                        <p>Découvrez les merveilles de l'Afrique avec notre site touristique</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Nos Destinations</h4>
                        <ul className={styles.list}>
                            <li><a href="#">Maroc</a></li>
                            <li><a href="#">Kenya</a></li>
                            <li><a href="#">Égypte</a></li>
                            <li><a href="#">Afrique du Sud</a></li>
                            <li><a href="#">Tanzanie</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contactez-nous</h4>
                        <p>Pour toute question ou assistance, n'hésitez pas à nous contacter :</p>
                        <ul className={styles.list}>
                            <li><a href="mailto:contact@votresite.com">Email: visitafrica@africa.com</a></li>
                            <li><a href="tel:+123456789">Téléphone: +123456789</a></li>
                            <li>Adresse: 123 Rue de la Tour, Katina, Africa</li>
                        </ul>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className="row">
                    <div className="col-md-6 text-center">
                        <p>&copy; 2024 VisitAfrica. Tous droits réservés.</p>
                    </div>
                </div>
            </div>

            <div>&copy; VisitAfrica</div>
            <div>Adresse: 123 Olmstar street , Ottawa, Canada</div>
            <div>Téléphone: +123 456 789</div>
            <div> Email: info@visitafrica.com</div>
        </footer>
    );
}
