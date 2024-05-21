"use client";

import { useEffect } from 'react';
import styles from './Accueil.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'typed.js';
import Image from 'next/image';
import logo from '@/public/logo.webp';
import Afrique from '@/public/Afrique.webp';
import Afrique2 from '@/public/Afrique2.webp';
import photo from '@/public/photo.webp';

export default function Accueil() {
  useEffect(() => {
    // Importer le JS de Bootstrap
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialiser Typed.js
    const options = {
      strings: [
        'magique', 'de l’amour', 'surprenant', 'romantique',
        'emouvant', 'de la confiance', 'du bonheur', 'amusant'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      shuffle: true
    };
    
    const typed = new Typed('.auto-typing', options);

    // Nettoyer l'instance de Typed.js lors du démontage du composant
    return () => {
      typed.destroy();
    };
  }, []);

page_Acceuil
  return (
    <div className={styles.container}>
      <div className="row">
        {/* Texte à gauche */}
        <div className={`col-6 ${styles.leftColumn}`}>
          <h1 className="py-3 text_baniere textt"> 
            Visiter l'Afrique c'est&nbsp;
            <span className="auto-typing"></span>
          </h1>
          <h5 className="italic">Alors, on vous aide ?</h5>
          <p>
            <a href="#">
              <button className="bout py-3 btn btn-lg btn-order">
                <div>Commencez 
                  <i className="fleche fa fa-right-long"></i>
                </div>
              </button>
            </a>         
          </p>
        </div>
        
        {/* Carrousel à droite */}
        <div className={`col-6 ${styles.rightColumn}`}>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src={logo}
                  alt="logo de Notre page Web"
                  width={600}
                  height={400}
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={logo}
                  alt="logo de Notre page Web"
                  width={600}
                  height={400}
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={logo}
                  alt="logo de Notre page Web"
                  width={600}
                  height={400}
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={logo}
                  alt="logo de Notre page Web"
                  width={600}
                  height={400}
                  className="d-block w-100"
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


 main
        </div>
      </div>
    
      {/* Section "Qui sommes-nous" en bas */}
      <div className={`${styles.aboutUs} ${styles.newSection}`}>
        <h2>Une aventure inoubliable... </h2>
        <p>Soyez assurer d'obtenir une bonne dose de paludisme apres votre visite </p>
      </div>
      
      {/* Nouvelle section en bas */}
      <div className={`${styles.newSection} row`}>
        {/* Logo à gauche */}
        <div className={`col-6 ${styles.logoContainer}`}>
          <Image
            src={photo}
            alt="Logo de l'entreprise"
            width={200}
            height={200}
          />
        </div>
        {/* Texte à droite */}
        <div className={`col-6 ${styles.textContainer}`}>
          <h3>Qui sommes nous ?</h3>
          <p>Nous sommes une entreprise passionnée par l'Afrique et ses merveilles. Notre mission est de vous faire découvrir la beauté et la diversité de ce continent fascinant.</p>
          <p>Que vous souhaitiez partir en safari, vous détendre sur des plages paradisiaques ou explorer des cultures riches et variées, nous sommes là pour vous aider à vivre une expérience inoubliable.</p>
        </div>
      </div>

    </div>
  );
}