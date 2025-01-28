import { FC } from 'react';
import './ShowsCard.css';

interface ShowsCardProps {
  name: string;
  location: string;
  date: string;
  image: string;
  description: string;
}

const ShowsCard: FC<ShowsCardProps> = ({ show }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="shows-card">
      <div className="shows-card-image">
        <img src={show.image} alt={show.name} />
      </div>
      <div className="shows-card-content">
        <h2 className="shows-card-title">{show.name}</h2>
        <p className="shows-card-date">{formatDate(show.date)}</p>
        <p className="shows-card-location">{show.location}</p>
        <p className="shows-card-description">{show.description}</p>
      </div>
    </div>
  );
};

export default ShowsCard;
