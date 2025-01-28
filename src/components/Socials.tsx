import { useState, useEffect } from 'react';
import './Socials.css';

const Socials = () => {
  const [spotifyData, setSpotifyData] = useState(null);
  
  // You'll need to replace these with your actual IDs
  const SPOTIFY_ARTIST_ID = 'YOUR_SPOTIFY_ARTIST_ID';
  const INSTAGRAM_USERNAME = 'YOUR_INSTAGRAM_USERNAME';

  return (
    <div className="socials-container">
      <h1>Connect With Us</h1>
      
      <section className="spotify-section">
        <h2>Listen on Spotify</h2>
        <div className="spotify-embed">
          <iframe
            src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}`}
            width="100%"
            height="380"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media"
          ></iframe>
        </div>
      </section>

      <section className="instagram-section">
        <h2>Follow Us on Instagram</h2>
        <div className="instagram-feed">
          {/* Note: You'll need to sign up for Instagram's Basic Display API 
              or use a third-party service like EmbedSocial or LightWidget */}
          <iframe
            src={`https://www.instagram.com/embed/user/${INSTAGRAM_USERNAME}`}
            width="100%"
            height="750"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Socials;
