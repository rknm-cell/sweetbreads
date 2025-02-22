import React from 'react';
import './Music.css';

const Music: React.FC = () => {
  return (
    <div className="music-container">
      <h2>Our Music</h2>
      <div className="spotify-widget">
        <iframe
          src="https://open.spotify.com/embed/artist/64qlz7g7Qy6LALNgBsLEZ4"
          width="100%"
          height="380"
          frameBorder="0"
          allowTransparency={true}
          allow="encrypted-media"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Music;