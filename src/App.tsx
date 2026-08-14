import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import IntroAnimation from './components/IntroAnimation';
import Home from './pages/Home';
import Activities from './pages/Activities';
import CoLearning from './pages/CoLearning';
import Team from './pages/Team';
import Charity from './pages/Charity';
import FAQ from './pages/FAQ';
import StudyAbroad from './pages/StudyAbroad';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AntiFraud from './pages/AntiFraud';
import Reviews from './pages/Reviews';

export default function App() {
  return (
    <>
      <IntroAnimation />
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
          <Route path="reviews" element={<Reviews />} />
          <Route path="anti-fraud" element={<AntiFraud />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

