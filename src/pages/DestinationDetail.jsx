import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { Link, useParams } from 'react-router';
import { ErrorState } from '../components/ErrorState.jsx';
import { TripOptions } from '../components/TripOptions.jsx';

const TRIP_OPTIONS = gql`
  query OpcionesDeViaje($destinationId: ID!) {
    destination(id: $destinationId) {
      id
      name
      flights { id name detail start end price available }
      hotels { id name detail start end price available }
    }
  }
`;

export function DestinationDetail() {
  const { id } = useParams();
  const { data, loading, error, refetch } = useQuery(TRIP_OPTIONS, {
    variables: { destinationId: id },
  });

  const destination = data?.destination;

  return (
    <section className="shell section detail">
      <Link className="back" to="/">Todos los destinos</Link>
      <h1>{destination?.name ?? 'Opciones de viaje'}</h1>
      <div aria-busy={loading}>
        {loading && <p className="state" role="status">Consultando vuelos y hoteles…</p>}
        {!loading && error && (
          <ErrorState message="No pudimos consultar las opciones. Inténtalo de nuevo." retry={() => { refetch().catch(() => {}); }} />
        )}
        {!loading && !error && !destination && <p className="state" role="status">No encontramos este destino.</p>}
        {!loading && !error && destination && (
          <div className="grid grid-cols-1 gap-6 desktop:grid-cols-2">
            <TripOptions title="Vuelos" entries={destination.flights} unit="ida y vuelta" availability="asientos disponibles" emptyMessage="Aún no hay vuelos para este destino." />
            <TripOptions title="Hoteles" entries={destination.hotels} unit="por noche" availability="habitaciones disponibles" emptyMessage="Aún no hay hoteles para este destino." />
          </div>
        )}
      </div>
    </section>
  );
}
