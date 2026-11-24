import { Link } from 'react-router';
import { Brand } from './Brand.jsx';

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell bar">
        <Brand />
        <Link className="credits-link" to="/creditos">Créditos</Link>
      </div>
    </footer>
  );
}
