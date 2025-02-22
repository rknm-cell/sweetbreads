import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, url: 'src/assets/image01.jpg', title: 'Live Show 2024' },
    { id: 2, url: 'src/assets/image02.jpg', title: 'Studio Session' },
    { id: 3, url: 'src/assets/image03.jpg', title: 'Band Practice' },
    // Add more images as needed
  ];

  return (
    <div className="gallery-container">
      <div className="preview-container">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected preview" className="preview-image" />
        ) : (
          <div className="preview-placeholder">
            <p>Select an image to preview</p>
          </div>
        )}
      </div>
      
      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-card"
            onClick={() => setSelectedImage(image.url)}
          >
            <img src={image.url} alt={image.title} />
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;