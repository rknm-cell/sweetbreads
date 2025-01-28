import { useState } from 'react';
import './ShowContainer.css';
import ShowsCard from './ShowsCard';

interface Show {
  title: string;
  date: string;
  location: string;
  image: string;
}



  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  const [shows, setShows] = useState<Show[]>([
    {
      title: "Summer Concert Series",
      date: "2024-06-15",
      location: "Central Park, New York",
      image: "/images/summer-concert.jpg"
    },
    {
      title: "Fall Music Festival", 
      date: "2024-09-20",
      location: "Golden Gate Park, San Francisco",
      image: "/images/fall-festival.jpg"
    }
  ]);

  const renderShows = (shows: Show[]) => {
    return shows.map((show, index) => (
      <ShowsCard
        key={index}
        show={show}
      />
    ));
  };
  return (
    <div className="show-container">
     {renderShows(shows)}
    </div>
  );
};

export default ShowsContainer;
