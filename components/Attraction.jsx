// Attraction.js
import React from "react";
import Image from 'next/image';
import styles from "./Attraction.module.css";
import attractionsData from "./Attraction.json";

export default function Attraction() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Les Trésors d'Afrique</h1>
            <p className={styles.introduction}>Découvrez les trésors de l'Afrique à travers ses attractions les plus emblématiques. Des vastes étendues sauvages du parc national Kruger à la majesté des pyramides égyptiennes, chaque destination offre une expérience unique, alliant nature, histoire et culture. Laissez-vous transporter dans un voyage inoubliable à travers les paysages spectaculaires, la faune diversifiée et la richesse culturelle incomparable de l'Afrique.</p>
            {attractionsData.map((attraction, index) => (
                <div key={index} className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image 
                            src={attraction.src} 
                            alt={attraction.alt} 
                            className={styles.image} 
                            layout="responsive" 
                            width={attraction.width}
                            height={attraction.height} 
                        />
                        <div className={styles.overlay}>
                            <p className={styles.caption}>{attraction.alt}</p>
                        </div>
                    </div>
                    <p className={styles.description}>{attraction.description}</p>
                </div>
            ))}
        </div>
    );
}
