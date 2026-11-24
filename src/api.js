import { useEffect, useState } from 'react';

export const appUrl = (path) => new URL(path, document.baseURI).href;

let destinationRequest;

function getDestinations() {
  destinationRequest ??= fetch(appUrl('api/destinos'))
    .then((response) => {
      if (!response.ok) throw new Error('No se pudo consultar el catálogo.');
      return response.json();
    })
    .catch((error) => {
      destinationRequest = undefined;
      throw error;
    });

  return destinationRequest;
}

export function useDestinations() {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    let active = true;
    getDestinations().then(
      (data) => { if (active) setResult({ attempt, data }); },
      () => { if (active) setResult({ attempt, error: 'No pudimos cargar los destinos. Inténtalo de nuevo.' }); },
    );
    return () => { active = false; };
  }, [attempt]);

  const current = result?.attempt === attempt ? result : null;
  return {
    data: current?.data,
    error: current?.error,
    loading: current === null,
    retry: () => setAttempt((previous) => previous + 1),
  };
}
