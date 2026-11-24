import { Route, Routes } from 'react-router';
import { Footer } from './components/Footer.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Catalog } from './pages/Catalog.jsx';
import { DestinationDetail } from './pages/DestinationDetail.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { PhotoCredits } from './pages/PhotoCredits.jsx';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/destinos/:id" element={<DestinationDetail />} />
          <Route path="/creditos" element={<PhotoCredits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
