# Brújula

Aplicación de agencia de viajes para Desarrollo Frontend II. Explora destinos chilenos y consulta las fechas, precios en pesos chilenos y disponibilidad de vuelos y hoteles. Los datos son simulados.

## En desarrollo

Requiere Node.js 22.12 o superior.

```sh
npm ci
npm run dev
```

Para comprobar la compilación estática, ejecuta `npm run build` y luego `npm run preview`.

## Estilos

Tailwind CSS, integrado mediante el plugin de Vite, controla las cuadrículas del catálogo y del detalle. La paleta, la tipografía y los estilos propios de Brújula se definen en `src/styles.css`.

## Integración de las APIs

- **REST** — `GET /api/destinos` obtiene los destinos, su país, región y actividades. El hook de React usa `useState` y `useEffect` para administrar la carga, el error y el reintento.
- **GraphQL** — `POST /graphql` recibe la operación `OpcionesDeViaje` con `destinationId`. Apollo Client consulta los vuelos y hoteles del destino que indica la ruta.
- **MSW** intercepta ambas peticiones en el navegador. El worker arranca antes de renderizar la aplicación y opera tanto en desarrollo como en la compilación publicada.

## GitHub Pages

https://arekkusu17.github.io/Desarrollo_Frontend_II_Viajes/

## Fotografías

Se usaron versiones reducidas de las fotos de Wikimedia Commons. El encuadre se ajusta en pantalla con CSS. Las tres se distribuyen bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

- [Valle de la Luna, panorámica](https://commons.wikimedia.org/wiki/File:Valle_de_la_Luna,_panor%C3%A1mica.jpg) — LBM1948.
- [Torres del Paine from Lake Pehoé](https://commons.wikimedia.org/wiki/File:Torres_del_Paine_from_Lake_Peho%C3%A9.jpg) — Diego Delso, [delso.photo](https://delso.photo/).
- [Palafitos de Castro, Chiloé](https://commons.wikimedia.org/wiki/File:Palafitos_de_Castro,_Chilo%C3%A9.jpg) — Martín Gaitán.
