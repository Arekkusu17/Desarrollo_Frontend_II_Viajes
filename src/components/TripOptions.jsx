import { TripOptionCard } from './TripOptionCard.jsx';

export function TripOptions({ title, entries, unit, availability, emptyMessage }) {
  return (
    <section className="options">
      <h2>{title}</h2>
      {entries.length === 0
        ? <p className="state">{emptyMessage}</p>
        : (
          <ul className="option-list">
            {entries.map((entry) => (
              <TripOptionCard key={entry.id} entry={entry} unit={unit} availability={availability} />
            ))}
          </ul>
        )}
    </section>
  );
}
