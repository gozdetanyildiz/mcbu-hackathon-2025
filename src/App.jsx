import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NewsGrid from './components/NewsGrid';
import NewsDetail from './components/NewsDetail';  // Detaylar için yeni sayfa
import Academics from './pages/Academics';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<NewsGrid />} />
      <Route path="/news/:newsId" element={<NewsDetail />} />  {/* Haber detayları */}
      <Route path="/academics" element={<Academics />} />
    </Routes>
  );
};

export default App;
