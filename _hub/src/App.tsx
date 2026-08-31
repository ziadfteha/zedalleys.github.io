import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { SiteFooter } from './components/SiteFooter';
import { Home } from './pages/Home';
import { SubjectPathPage } from './pages/SubjectPathPage';
import { StepPage } from './pages/StepPage';
import { CertificatePage } from './pages/CertificatePage';
import { VerifyPage } from './pages/VerifyPage';
import './App.css';

/**
 * Reset scroll to the top whenever the route changes. HashRouter does no
 * scroll restoration of its own, so without this a link followed from a
 * scrolled-down page (e.g. "Subjects" from the bottom of a subject path)
 * lands mid-page and looks like it did nothing.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <main className="hub-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects/:subjectId" element={<SubjectPathPage />} />
          <Route path="/subjects/:subjectId/steps/:stepId" element={<StepPage />} />
          <Route path="/subjects/:subjectId/certificate" element={<CertificatePage />} />
          <Route path="/verify/:certificateId" element={<VerifyPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </HashRouter>
  );
}

export default App;
