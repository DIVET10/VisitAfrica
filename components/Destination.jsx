import React from 'react';
import styles from './Destination.module.css'; // Importez les styles à partir du fichier de module CSS

// Définissez la fonction Destination
export default function Destination() {
  return (
    <div className={styles.destinationContainer}>
      <h2>Le Cap, Afrique du Sud</h2>
      <img src="images/destination1.jpg" alt="Le Cap, Afrique du Sud" />
      <div className={styles.destinationInfo}>
        <div>
          <h3>Informations générales</h3>
          <p>
            Le Cap est une ville côtière située à l'extrémité sud de l'Afrique. Elle est réputée pour sa beauté naturelle, ses plages magnifiques, sa vie nocturne animée et sa culture vibrante.
          </p>
        </div>
        <div>
          <h3>Attractions principales</h3>
          <ul>
            <li>Montagne de la Table</li>
            <li>Robben Island</li>
            <li>V&A Waterfront</li>
          </ul>
        </div>
        <div>
          <h3>Conseils de voyage</h3>
          <ul>
            <li>Assurez-vous de visiter la Montagne de la Table pour une vue panoramique sur la ville.</li>
            <li>Réservez une visite guidée à Robben Island pour en apprendre davantage sur son histoire.</li>
            <li>Profitez d'une promenade relaxante et de restaurants de fruits de mer frais au V&A Waterfront.</li>
          </ul>
        </div>
        <a href="#">En savoir plus</a>
      </div>
    </div>
  );
}
