import { Link } from 'react-router';

export function PhotoCredits() {
  return (
    <section className="shell section detail">
      <Link className="back" to="/">Todos los destinos</Link>
      <h1>Créditos fotográficos</h1>
      <ul>
        <li><a href="https://commons.wikimedia.org/wiki/File:Valle_de_la_Luna,_panor%C3%A1mica.jpg">Valle de la Luna</a> — LBM1948</li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Torres_del_Paine_from_Lake_Peho%C3%A9.jpg">Torres del Paine</a> — <a href="https://delso.photo/">Diego Delso</a></li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Palafitos_de_Castro,_Chilo%C3%A9.jpg">Palafitos de Castro</a> — Martín Gaitán</li>
      </ul>
      <p>Fotografías con licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>, reducidas y reencuadradas para el sitio.</p>
    </section>
  );
}
