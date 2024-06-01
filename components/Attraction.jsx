// Attraction.js
import React from "react";
import Image from 'next/image';
import styles from "./Attraction.module.css";
import image1 from "@/public/zebre1.webp";
import image2 from "@/public/sahara.webp";
import image3 from "@/public/pyramide.webp";
import image4 from "@/public/kili.webp";
import image5 from "@/public/basil.webp";
import image6 from "@/public/sey.webp";

const attractions = [
    { 
        src: image1, 
        alt: "Parc national kruger en Afrique du sud ", 
        description: "Le parc national Kruger est l'une des réserves animalières les plus célèbres et les plus étendues d'Afrique du Sud. Il abrite une incroyable variété de faune sauvage, notamment des éléphants, des lions, des léopards, des rhinocéros et bien sûr, des zèbres. Explorez ses vastes plaines, ses rivières sinueuses et ses forêts denses lors de safaris guidés ou d'excursions en voiture. Le parc offre également une gamme d'hébergements, allant du camping traditionnel aux lodges de luxe, offrant ainsi une expérience unique de vie sauvage africaine.",
    },
    { 
        src: image2, 
        alt: "Desert du sahara ", 
        description: "Le Sahara est le plus grand désert chaud du monde, couvrant une grande partie de l'Afrique du Nord. Ses vastes étendues de sable, ses dunes ondulantes et ses oasis cachées en font un paysage spectaculaire et mystique. Découvrez la richesse culturelle et naturelle du Sahara en explorant ses villages traditionnels, en faisant du trekking à dos de chameau et en passant des nuits étoilées sous les tentes berbères. Le Sahara abrite également une biodiversité étonnante, y compris des espèces adaptées à la vie dans des conditions extrêmes.",
    },
    { 
        src: image3, 
        alt: "Pyramide d'Egypte", 
        description: "Les pyramides d'Égypte sont parmi les structures les plus emblématiques du monde antique. Construites il y a des milliers d'années par les anciens Égyptiens, ces monuments imposants étaient destinés à servir de tombeaux pour les pharaons et à abriter leurs trésors dans l'au-delà. Explorez les mystères de l'Égypte ancienne en visitant les pyramides de Gizeh, Karnak, et la vallée des rois. Les pyramides témoignent de l'ingéniosité et de la puissance de la civilisation égyptienne, ainsi que de leur croyance en la vie après la mort et dans l'immortalité.",
    },
    { 
        src: image4, 
        alt: "Mont Kilimandjaro", 
        description: "Le mont Kilimandjaro est le plus haut sommet d'Afrique, dominant les plaines de Tanzanie de ses 5 895 mètres d'altitude. L'ascension du Kilimandjaro est un défi passionnant qui attire des alpinistes du monde entier. Parcourez les différents écosystèmes, des forêts tropicales luxuriantes aux glaciers enneigés, et soyez récompensé par des vues à couper le souffle une fois au sommet. Le Kilimandjaro est également un symbole de la lutte contre le changement climatique, avec la fonte progressive de ses glaciers due au réchauffement de la planète.",
    },
    { 
        src: image5, 
        alt: "Basilique Notre Dame", 
        description: "La basilique Notre-Dame de la Paix, située à Yamoussoukro en Côte d'Ivoire, est l'une des plus grandes églises du monde. Construite dans les années 1980, elle est un chef-d'œuvre d'architecture moderne et un symbole de la foi chrétienne en Afrique. Visitez cette impressionnante basilique pour admirer ses vastes espaces, ses vitraux colorés et son ambiance spirituelle. La basilique est également un lieu de pèlerinage pour les fidèles du monde entier, attirant des visiteurs de toutes confessions pour des moments de prière et de contemplation.",
    },
    { 
        src: image6, 
        alt: "iles Seychelles", 
        description: "Les Seychelles sont un paradis tropical situé dans l'océan Indien, réputé pour ses plages de sable blanc immaculé, ses eaux cristallines et sa biodiversité exceptionnelle. Explorez les îles granitiques et coralliennes, plongez dans les récifs colorés, et découvrez des espèces uniques de flore et de faune. Les Seychelles offrent une escapade de rêve pour les amoureux de la nature et les amateurs de détente. En plus de ses paysages paradisiaques, les Seychelles ont une riche histoire culturelle, influencée par les peuples européens, africains et asiatiques qui ont colonisé les îles au fil des siècles.",
    }
];

export default function Attraction() {
    return (
        <div className={styles.container}>
       <h1 className={styles.title}>Les Trésors d'Afrique</h1>
            <p className={styles.introduction}>Découvrez les trésors de l'Afrique à travers ses attractions les plus emblématiques. Des vastes étendues sauvages du parc national Kruger à la majesté des pyramides égyptiennes, chaque destination offre une expérience unique, alliant nature, histoire et culture. Laissez-vous transporter dans un voyage inoubliable à travers les paysages spectaculaires, la faune diversifiée et la richesse culturelle incomparable de l'Afrique.</p>
            {attractions.map((attraction, index) => (
                <div key={index} className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image src={attraction.src} alt={attraction.alt} className={styles.image} layout="responsive" />
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
