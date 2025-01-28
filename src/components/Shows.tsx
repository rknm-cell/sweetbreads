import { useState, useEffect } from 'react';
import './Shows.css';

interface Show {
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
  flyer: string;
}

const Shows = () => {
  const [shows, setShows] = useState<Show[]>([
    {
      date: '2024-01-20',
      venue: 'The Music Hall',
      city: 'Nashville, TN',
      ticketLink: 'https://tickets.example.com/show1',
      flyer: 'https://example.com/flyer1.jpg'
    },
    {
      date: '2024-02-15', 
      venue: 'The Fillmore',
      city: 'San Francisco, CA',
      ticketLink: 'https://tickets.example.com/show2',
      flyer: 'https://example.com/flyer2.jpg'
    },
    // Add more shows as needed
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="shows-container">
      <h1>Upcoming Shows</h1>
      
      <div className="shows-list">
        {shows.map((show, index) => (
          <div key={index} className="show-item">
            <div className="show-date">
              {formatDate(show.date)}
            </div>
            <div className="show-info">
              <h2>{show.venue}</h2>
              <p>{show.city}</p>
            </div>
            <div className="show-action">
              <a 
                href={show.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-button"
              >
                Get Tickets
              </a>
            </div>
          </div>
        ))}
      </div>

      {shows.length === 0 && (
        <p className="no-shows">No upcoming shows scheduled. Check back soon!</p>
      )}
    </div>
  );
};

export default Shows;
