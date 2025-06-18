import './ImageGallery.css';
import mainImage from '../assets/main.jpg'; 
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

function ImageGallery() {
  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={mainImage} alt="Main Property" />
      </div>
      <div className="sub-images">
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
        <img src={img4} alt="Image 4" />
        <img src={img5} alt="Image 5" />
      </div>
    </div>
  );
}

export default ImageGallery;
