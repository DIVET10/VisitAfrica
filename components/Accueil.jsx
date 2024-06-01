"use client"; 

import { useEffect } from 'react';
import styles from './Accueil.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypedEffect from './TypedEffect';
import Carousel from './Carousel';
import Button from './Button';
import AboutUs from './AboutUs';

export default function Accueil() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className={styles.container}>
      <div className="row"> 
        <div className={`col- ${styles.leftColumn}`}> 
          <h1 className={`py-3 text_baniere textt ${styles.spacing}`}> 
          <h1></h1>Visiter l'Afrique c'est <TypedEffect />
          
          </h1>
          
         
        </div>
        <div className={`col-6 ${styles.rightColumn}`}>
          
        </div>
      </div>
      <h5 className="italic spacing-bottom">Alors, on vous aide ?</h5>
      <br className={styles.space}/><Carousel />
      <div className={`${styles.aboutUs} ${styles.newSection}`}>
        <h2>Une aventure inoubliable... </h2>
        <p>Soyez assurer d'obtenir une bonne dose de paludisme apres votre visite</p>
      </div>
      <AboutUs />
    </div>
  );
}
