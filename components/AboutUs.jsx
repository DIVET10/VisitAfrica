import Image from 'next/image';
import photo from '@/public/photo.webp';
import styles from './Accueil.module.css';

export default function AboutUs() {
  return (
    <div className={`${styles.newSection} row`}>
      <div className={`col-6 ${styles.logoContainer}`}>
        <Image
          src={photo}
          alt="Logo de l'entreprise"
          width={200}
          height={200}
        />
      </div>
      <div className={`col-6 ${styles.textContainer}`}>
        <h3>Qui sommes nous ?</h3>
        <p>Nous sommes une entreprise passionnée par l'Afrique et ses merveilles. Notre mission est de vous faire découvrir la beauté et la diversité de ce continent fascinant.</p>
        <p>Que vous souhaitiez partir en safari, vous détendre sur des plages paradisiaques ou explorer des cultures riches et variées, nous sommes là pour vous aider à vivre une expérience inoubliable.</p>
      </div>
    </div>
  );
}
