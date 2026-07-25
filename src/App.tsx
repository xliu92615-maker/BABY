import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Activities from './pages/Activities';
import CoLearning from './pages/CoLearning';
import Team from './pages/Team';
import Charity from './pages/Charity';
import FAQ from './pages/FAQ';
import StudyAbroad from './pages/StudyAbroad';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="co-learning" element={<CoLearning />} />
          <Route path="team" element={<Team />} />
          <Route path="charity" element={<Charity />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="study-abroad" element={<StudyAbroad />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

