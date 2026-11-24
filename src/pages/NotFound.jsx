import { Link } from 'react-router';

export function NotFound() {
  return (
    <section className="shell section detail">
      <h1>Página no encontrada</h1>
      <Link className="back" to="/">Volver a destinos</Link>
    </section>
  );
}
