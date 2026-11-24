import { Link } from 'react-router';
import brandMark from '../images/brujula.png';

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Brújula, inicio">
      <img className="brand-mark" src={brandMark} alt="" width="36" height="36" />
      Brújula<span className="brand-dot">.</span>
    </Link>
  );
}
