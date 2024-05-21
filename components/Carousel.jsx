import Image from 'next/image';
import logo from '@/public/logo.webp';

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {[...Array(4)].map((_, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <Image
              src={logo}
              alt="logo de Notre page Web"
              width={600}
              height={400}
              className="d-block w-100"
            />
          </div>
        ))}
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
  );
}
