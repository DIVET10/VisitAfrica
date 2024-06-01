import React from 'react';
import TestimonialCard from './Testi';
import styles from './AboutUs.module.css';
import Image from 'next/image';
import pic1 from '@/public/pic1.webp';
import pic2 from '@/public/pic2.webp';
import pic3 from '@/public/pic3.webp';
import pic4 from '@/public/pic4.webp';

import G1 from '@/public/G1.webp';
import G2 from '@/public/G2.webp';
import G3 from '@/public/G3.webp';
import G4 from '@/public/G4.webp';
import G5 from '@/public/G5.webp';
import G6 from '@/public/G6.webp';
import G7 from '@/public/G7.webp';
import G8 from '@/public/G8.webp';
import G9 from '@/public/G9.webp';
import G10 from '@/public/G10.webp';
import G11 from '@/public/G11.webp';
import G12 from '@/public/G12.webp';
import G13 from '@/public/G13.webp';
import G14 from '@/public/G14.webp';
import G15 from '@/public/G15.webp';
import G16 from '@/public/G16.webp';

export default function AboutUs() {
  return (
    <div className="container">
      <div className={`${styles.newSection} row`}>
        <div className={styles.logoContainer}>
          {/* Logo or image here */}
        </div>
        <div className={styles.textContainer}>
          <h3 className="text-center">Qui sommes nous ?</h3>
          <br />
          <p>Nous sommes une entreprise passionnée par l'Afrique et ses merveilles. Notre mission est de vous faire découvrir la beauté et la diversité de ce continent fascinant.</p>
          <p>Que vous souhaitiez partir en safari, vous détendre sur des plages paradisiaques ou explorer des cultures riches et variées, nous sommes là pour vous aider à vivre une expérience inoubliable.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <h2 className="text-center">Ils nous ont fait confiance</h2>
      </div>
      <br />
      <div className="row justify-content-center">
        <TestimonialCard
          image={pic1}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Mon safari en Afrique a été une aventure inoubliable. La nature sauvage était époustouflante, avec des paysages à couper le souffle. Observer les animaux majestueux dans leur habitat naturel a été une expérience unique. »</span>}
          bgColor="lightblue"
        />
        <TestimonialCard
          image={pic2}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Mes vacances sur les plages africaines étaient tout simplement paradisiaques. Le sable fin et les eaux cristallines offraient un cadre parfait pour la détente. Chaque moment passé au bord de l'océan était un véritable moment de bonheur. »</span>}
          bgColor="#E6F1DA"
        />
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        <TestimonialCard
          image={pic3}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Découvrir les cultures locales en Afrique a été une expérience inoubliable. J'ai plongé dans l'histoire et les traditions locales à travers des rencontres authentiques. Ces moments m'ont ouvert l'esprit sur la richesse de la diversité culturelle africaine. »</span>}
          bgColor="lightblue"
        />
        <TestimonialCard
          image={pic4}
          alt="Photo"
          text={<span style={{ fontStyle: 'italic' }}>« Explorer les trésors cachés de l'Afrique a été une aventure incroyable. Parcourir des sites historiques, admirer des paysages spectaculaires et plonger dans une nature luxuriante étaient des expériences uniques. Chaque moment passé en Afrique restera gravé dans ma mémoire pour toujours. »</span>}
          bgColor="lightblue"
        />
      </div>
      <div className="row justify-content-center">
  <h2 className="text-center">Galerie photos</h2>
  <p className="row justify-content-center">Le gout du voyage parfait hummm... </p>
  
</div>
<br />
<div className="row">
  <div className="col-3 mb-3"><Image src={G1} alt="G1" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G2} alt="G2" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G3} alt="G3" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G4} alt="G4" className="img-fluid" /></div>
</div>
<div className="row">
  <div className="col-3 mb-3"><Image src={G5} alt="G5" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G6} alt="G6" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G7} alt="G7" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G8} alt="G8" className="img-fluid" /></div>
</div>
<div className="row">
  <div className="col-3 mb-3"><Image src={G9} alt="G9" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G10} alt="G10" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G11} alt="G11" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G12} alt="G12" className="img-fluid" /></div>
</div>
<div className="row">
  <div className="col-3 mb-3"><Image src={G13} alt="G13" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G14} alt="G14" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G5} alt="G15" className="img-fluid" /></div>
  <div className="col-3 mb-3"><Image src={G6} alt="G16" className="img-fluid" /></div>
</div>

<div style={{ marginBottom: '50px' }}></div> {/* Espace en bas */}


 
    </div>
  );
}
