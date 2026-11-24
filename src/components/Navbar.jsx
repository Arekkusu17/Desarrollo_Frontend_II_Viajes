import { Link } from 'react-router';
import { Brand } from './Brand.jsx';

export function Navbar() {
  return (
    <header className="header">
      <div className="shell bar">
        <Brand />
        <nav aria-label="Navegación principal">
          <Link to="/#destinos">Destinos</Link>
        </nav>
      </div>
    </header>
  );
}
