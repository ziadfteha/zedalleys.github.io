import { HashRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { SiteFooter } from './components/SiteFooter';
import { Home } from './pages/Home';
import { SubjectPathPage } from './pages/SubjectPathPage';
import { StepPage } from './pages/StepPage';
import { CertificatePage } from './pages/CertificatePage';
import { VerifyPage } from './pages/VerifyPage';
import './App.css';

function App() {
  return (
    <HashRouter>
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
