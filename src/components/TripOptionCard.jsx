const price = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
const date = new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export function TripOptionCard({ entry, unit, availability }) {
  return (
    <li className="option-card">
      <div>
        <h3>{entry.name}</h3>
        <p>{entry.detail}</p>
        <p className="dates">
          <time dateTime={entry.start}>{date.format(new Date(entry.start))}</time>
          {' – '}
          <time dateTime={entry.end}>{date.format(new Date(entry.end))}</time>
        </p>
      </div>
      <div className="option-price">
        <strong>{price.format(entry.price)}</strong>
        <p>{unit}</p>
        <p className={entry.available ? 'available' : 'sold-out'}>
          {entry.available ? entry.available + ' ' + availability : 'Agotado'}
        </p>
      </div>
    </li>
  );
}
