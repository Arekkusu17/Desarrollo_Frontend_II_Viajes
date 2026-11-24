import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { useDestinations } from '../api.js';
import { DestinationCard } from '../components/DestinationCard.jsx';
import { ErrorState } from '../components/ErrorState.jsx';

export function Catalog() {
  const { data, error, loading, retry } = useDestinations();
  const location = useLocation();
  const catalogHeading = useRef(null);

  useEffect(() => {
    if (location.hash === '#destinos') {
      catalogHeading.current.focus({ preventScroll: true });
      catalogHeading.current.scrollIntoView();
    }
  }, [location]);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-content">
          <p className="overline">Viajes por Chile</p>
          <h1 id="hero-title">Tu próximo<br />destino está aquí.</h1>
          <p>Explora Chile y encuentra vuelos y alojamiento para tu próxima escapada.</p>
        </div>
      </section>
      <section className="shell section" aria-labelledby="catalog-title">
        <h2 id="catalog-title" ref={catalogHeading} tabIndex={-1}>Explora destinos</h2>
        <div aria-busy={loading}>
          {loading && <p className="state" role="status">Cargando destinos…</p>}
          {error && <ErrorState message={error} retry={retry} />}
          {data?.length === 0 && <p className="state">Aún no hay destinos en el catálogo.</p>}
          {data?.length > 0 && (
            <ul className="grid grid-cols-1 gap-[1.2rem] tablet:grid-cols-2 desktop:grid-cols-3">
              {data.map((destination) => (
                <li className="min-w-0" key={destination.id}>
                  <DestinationCard destination={destination} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
