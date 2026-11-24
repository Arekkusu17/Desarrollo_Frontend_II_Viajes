import { delay, graphql, http, HttpResponse } from 'msw';
import { destinations, options } from './catalog.js';

export const handlers = [
  http.get('*/api/destinos', async () => {
    await delay(280);
    return HttpResponse.json(destinations);
  }),

  graphql.query('OpcionesDeViaje', async ({ variables }) => {
    await delay(320);
    const destination = destinations.find(({ id }) => id === variables.destinationId);
    if (!destination) return HttpResponse.json({ data: { destination: null } });

    return HttpResponse.json({
      data: {
        destination: {
          __typename: 'Destination',
          id: destination.id,
          name: destination.name,
          ...options[destination.id],
        },
      },
    });
  }),
];
