import { FavoritesProvider } from "./contexts/FavoritesContext";
import Favorites from "./pages/Favorites";
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
import ParentingEducation from './pages/ParentingEducation';
import ParentingArticle1 from './pages/ParentingArticle1';
import ParentingArticle2 from './pages/ParentingArticle2';
import ParentingArticle3 from './pages/ParentingArticle3';
import ParentingArticle4 from './pages/ParentingArticle4';
import ParentingArticle5 from './pages/ParentingArticle5';

export default function App() {
  return (
    <>
      <IntroAnimation />
      <FavoritesProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="co-learning" element={<CoLearning />} />
          <Route path="parenting-education" element={<ParentingEducation />} />
          <Route path="parenting-education/life-lessons-stories" element={<ParentingArticle1 />} />
          <Route path="parenting-education/respect-child-growth" element={<ParentingArticle2 />} />
          <Route path="parenting-education/global-perspective" element={<ParentingArticle3 />} />
          <Route path="parenting-education/five-essential-skills" element={<ParentingArticle4 />} />
          <Route path="parenting-education/learning-beyond-classroom" element={<ParentingArticle5 />} />
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
    </FavoritesProvider>
    </>
  );
}

