import Image from 'next/image';
import photo from '@/public/photo.webp';
import styles from './Accueil.module.css';
import pic1 from '@/public/pic1.webp';
import pic2 from '@/public/pic2.webp';
import pic3 from '@/public/pic3.webp';
import pic4 from '@/public/pic4.webp';

export default function AboutUs() {
  return (
    <div className="container">
      <div className={`${styles.newSection} row`}>
        <div className={` ${styles.logoContainer}`}>
           
        </div>
        <div className={` ${styles.textContainer}`}>
          <h3 className="text-center">Qui sommes nous ?</h3>
          <br />
          <p>Nous sommes une entreprise passionnée par l'Afrique et ses merveilles. Notre mission est de vous faire découvrir la beauté et la diversité de ce continent fascinant.</p>
          <p>Que vous souhaitiez partir en safari, vous détendre sur des plages paradisiaques ou explorer des cultures riches et variées, nous sommes là pour vous aider à vivre une expérience inoubliable.</p>
          <div style={{ textAlign: 'center' }}>
            <br />
            <br />
            
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <h2 className="text-center">Ils nous ont fait confiance</h2>
       
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center" style={{ backgroundColor: 'lightblue' }}>
            <div className="card-body">
              <div style={{ float: 'left', marginRight: '20px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src={pic1} alt="Photo" width={200} height={200} />
              </div>
              <p className="card-text">  « Partez à l'aventure lors d'un safari exceptionnel en Afrique, où la nature sauvage dévoile toute sa splendeur. Traversez des paysages époustouflants, observez des animaux majestueux dans leur habitat naturel et vivez des moments uniques au cœur de la savane. Une expérience inoubliable qui vous plongera au plus près de la vie sauvage.»</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center" style={{ backgroundColor: '#E6F1DA'}}>
            <div className="card-body">
              <div style={{ float: 'left', marginRight: '20px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src={pic2} alt="Photo" width={200} height={200} />
              </div>
              <p className="card-text"> « Évadez-vous vers des destinations de rêve où les plages de sable fin et les eaux cristallines vous invitent à la détente absolue. Profitez de moments de calme et de relaxation sous le soleil, laissez-vous bercer par le bruit des vagues et offrez-vous des instants de pur bonheur au bord de l'océan. Une escapade paradisiaque pour recharger vos batteries.»</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center" style={{ backgroundColor: 'lightblue' }}>
            <div className="card-body">
              <div style={{ float: 'left', marginRight: '20px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src={pic3} alt="Photo" width={200} height={200} />
              </div>
              <p className="card-text"> « Plongez au cœur de cultures fascinantes et découvrez la richesse et la diversité des traditions du monde. Imprégnez-vous de l'histoire, des coutumes et des modes de vie locaux à travers des rencontres authentiques et des expériences uniques. Une exploration riche en émotions et en découvertes qui vous ouvrira l'esprit sur la diversité culturelle de notre planète.»</p>
            </div>
          </div>
        </div>
        <br/>
        <div className="col-md-6">
          <div className="card text-center" style={{ backgroundColor: 'lightblue' }}>
            <div className="card-body">
              <div style={{ float: 'left', marginRight: '20px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src={pic4} alt="Photo" width={200} height={200} />
              </div>
              <p className="card-text"> « Explorez les trésors cachés de l'Afrique, un continent aux mille merveilles. Parcourez des sites historiques, admirez des paysages spectaculaires et plongez dans une nature luxuriante et préservée. Vivez des moments intenses en découvrant la beauté et la diversité de l'Afrique, un voyage qui restera gravé dans votre mémoire pour toujours.»</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '50px' }}></div> {/* Espace en bas */}
    </div>
  );
}
