// Destination.jsx

import React from "react";
import styles from "./Destination.module.css"; // Importez les styles à partir du fichier de module CSS
import Image from "next/image";
import image1 from "@/public/image1.webp";
import image2 from "@/public/image2.webp";
import image3 from "@/public/image3.webp";
import image4 from "@/public/image4.webp";
import image5 from "@/public/image5.webp";
import image6 from "@/public/image6.webp";
import image7 from "@/public/image10.webp";

// Définissez la fonction Destination
export default function Destination() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.intro}>
        <h1>Découvrez les Merveilles Historiques et Naturelles de l'Afrique</h1>
        <p>
          L'Afrique est un continent riche en histoire et en beauté naturelle.
          De ses marchés animés aux vastes étendues désertiques, en passant par
          ses plages idylliques, chaque coin de ce continent raconte une
          histoire unique. Explorez avec nous quelques-unes des destinations les
          plus emblématiques et découvrez la diversité culturelle et
          géographique qui fait de l'Afrique un lieu si spécial.
        </p>
      </div>
      <div className={styles.destinationGrid}>
        <div className={styles.destinationItem}>
          <Image
            src={image1}
            alt="image1"
            className={styles.destinationImage}
          />
          <div className={styles.destinationText}>
            <h2>Marché de Marakeck</h2>
            <p>
              Explorez l'atmosphère vibrante et les étals colorés du célèbre
              marché de Marakeck, où vous pouvez découvrir une grande variété de
              produits locaux et d'artisanat traditionnel.
            </p>
          </div>
        </div>

        <div className={styles.destinationItem}>
          <Image
            src={image7}
            alt="image2"
            className={styles.destinationImage}
          />
          <div className={styles.destinationText}>
            <h2>Un coucher de soleil au Parc National de Lubumbashi</h2>
            <p>
              Admirez la splendeur d'un coucher de soleil époustouflant au cœur
              du Parc National de Lubumbashi. Les teintes chaudes et les
              silhouettes des arbres créent une ambiance magique, offrant une
              expérience inoubliable au milieu de la nature sauvage de la
              République Démocratique du Congo.
            </p>
          </div>
        </div>

        <div className={styles.destinationItem}>
          <Image
            src={image3}
            alt="image3"
            className={styles.destinationImage}
          />
          <div className={styles.destinationText}>
            <h2>Une plage à Zanzibar</h2>
            <p>
              Détendez-vous sur les plages de sable blanc et plongez dans les
              eaux turquoises de Zanzibar, une destination paradisiaque réputée
              pour sa beauté naturelle et son charme exotique.
            </p>
          </div>
        </div>

        <div className={styles.destinationItem}>
          <Image
            src={image4}
            alt="image4"
            className={styles.destinationImage}
          />
          <div className={styles.destinationText}>
            <h2>Vue panoramique sur une ville côtière à Madagascar</h2>
            <p>
              Admirez la vue imprenable sur la côte de Madagascar depuis un
              point de vue panoramique, offrant une perspective magnifique sur
              les plages de sable doré et les eaux scintillantes.
            </p>
          </div>
        </div>

        <div className={styles.destinationItem}>
          <Image
            src={image5}
            alt="image5"
            className={styles.destinationImage}
          />
          <div className={styles.destinationText}>
            <h2>Une image du désert du Sahara</h2>
            <p>
              Explorez les vastes étendues du désert du Sahara, où vous pouvez
              découvrir des paysages époustouflants, des dunes de sable sans fin
              et une tranquillité à couper le souffle.
            </p>
          </div>
        </div>

        <div className={styles.destinationItem}>
          <Image
            src={image6}
            alt="image6"
            className={styles.destinationImage}
          />
          <div className={styles.destinationText}>
            <h2>Une plage au large de Kribi au Cameroun</h2>
            <p>
              Détendez-vous sur les plages de sable doré de Kribi au Cameroun,
              où vous pourrez vous baigner dans des eaux chaudes, profiter du
              soleil et explorer la beauté naturelle de la côte africaine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
