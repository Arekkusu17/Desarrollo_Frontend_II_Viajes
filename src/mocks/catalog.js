export const destinations = [
  { id: 'atacama', name: 'San Pedro de Atacama', country: 'Chile', region: 'Antofagasta',
    activities: ['Valle de la Luna', 'Géiseres del Tatio', 'Observación astronómica'] },
  { id: 'patagonia', name: 'Torres del Paine', country: 'Chile', region: 'Magallanes',
    activities: ['Senderismo', 'Mirador Base Torres', 'Navegación por el glaciar Grey'] },
  { id: 'chiloe', name: 'Chiloé', country: 'Chile', region: 'Los Lagos',
    activities: ['Palafitos de Castro', 'Iglesias patrimoniales', 'Parque Nacional Chiloé'] },
];

export const options = {
  atacama: {
    flights: [
      { id: 'f1', name: 'Santiago a Calama', detail: 'Directo · 2 h 10 min', start: '2027-01-15', end: '2027-01-19', price: 86990, available: 6 },
      { id: 'f2', name: 'Santiago a Calama', detail: 'Directo · 2 h 10 min', start: '2027-01-22', end: '2027-01-26', price: 74990, available: 0 },
    ],
    hotels: [
      { id: 'h1', name: 'Refugio del Desierto', detail: 'Habitación doble · San Pedro de Atacama', start: '2027-01-15', end: '2027-01-19', price: 63000, available: 3 },
      { id: 'h2', name: 'Casa Altiplano', detail: 'Habitación doble · San Pedro de Atacama', start: '2027-01-22', end: '2027-01-26', price: 57500, available: 4 },
    ],
  },
  patagonia: {
    flights: [
      { id: 'f3', name: 'Santiago a Puerto Natales', detail: 'Directo · 3 h 15 min', start: '2027-02-05', end: '2027-02-10', price: 139990, available: 4 },
      { id: 'f4', name: 'Santiago a Punta Arenas', detail: 'Directo · 3 h 25 min', start: '2027-02-12', end: '2027-02-17', price: 117500, available: 8 },
    ],
    hotels: [
      { id: 'h3', name: 'Hostería Estepa', detail: 'Habitación doble · Puerto Natales', start: '2027-02-05', end: '2027-02-10', price: 89000, available: 2 },
      { id: 'h4', name: 'Casa del Fiordo', detail: 'Habitación doble · Puerto Natales', start: '2027-02-12', end: '2027-02-17', price: 74500, available: 0 },
    ],
  },
  chiloe: { flights: [], hotels: [] },
};
