import { Link } from 'react-router';

export function DestinationCard({ destination }) {
  const { id, name, region, country, activities } = destination;

  return (
    <Link className="destination" to={'/destinos/' + encodeURIComponent(id)}>
      <div className={'destination-image image-' + id} aria-hidden="true" />
      <div className="destination-info">
        <p className="region">{region}, {country}</p>
        <h3>{name}</h3>
        <p className="activities">{activities.join(' · ')}</p>
        <span className="card-link">Ver vuelos y hoteles</span>
      </div>
    </Link>
  );
}
