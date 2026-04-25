import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import SpotDetailPage from './pages/SpotDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:themeId" element={<CoursePage />} />
        <Route path="/spot/:contentId" element={<SpotDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}