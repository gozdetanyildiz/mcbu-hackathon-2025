import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-white dark:bg-darkBg flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl font-black text-primary opacity-20 select-none leading-none">404</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="-mt-6"
          >
            <div className="text-6xl mb-4">🎓</div>
            <h1 className="text-3xl font-bold text-darkBlue dark:text-white mb-3">
              Sayfa Bulunamadı
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
              Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="bg-primary hover:bg-primaryLight text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-md"
              >
                🏠 Anasayfaya Dön
              </Link>
              <Link
                to="/contact"
                className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105"
              >
                📞 Bize Ulaşın
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;