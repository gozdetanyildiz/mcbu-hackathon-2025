import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import NewsGrid from './components/NewsGrid';
import NewsDetail from './components/NewsDetail';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import Announcements from './pages/Announcements';
import NotFound from './pages/NotFound';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/news" element={<PageWrapper><NewsGrid /></PageWrapper>} />
        <Route path="/news/:newsId" element={<PageWrapper><NewsDetail /></PageWrapper>} />
        <Route path="/academics" element={<PageWrapper><Academics /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/announcements" element={<PageWrapper><Announcements /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;