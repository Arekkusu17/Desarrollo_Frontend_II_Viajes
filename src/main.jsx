import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { HashRouter } from 'react-router';
import { App } from './App.jsx';
import { appUrl } from './api.js';
import './styles.css';

const root = createRoot(document.getElementById('root'));
const client = new ApolloClient({
  link: new HttpLink({ uri: appUrl('graphql') }),
  cache: new InMemoryCache(),
});

async function start() {
  const { worker } = await import('./mocks/browser.js');
  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: { url: appUrl('mockServiceWorker.js') },
  });
  root.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <HashRouter>
          <App />
        </HashRouter>
      </ApolloProvider>
    </StrictMode>,
  );
}

start().catch((error) => {
  console.error('No se pudo iniciar el servicio de demostración', error);
  root.render(
    <main className="shell state" role="alert">
      <h1>No pudimos iniciar el catálogo</h1>
      <button onClick={() => window.location.reload()}>Volver a cargar</button>
    </main>,
  );
});
