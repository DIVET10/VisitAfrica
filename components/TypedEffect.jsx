import { useEffect } from 'react';
import Typed from 'typed.js';

export default function TypedEffect() {
  useEffect(() => {
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

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="auto-typing"></span>;
}
