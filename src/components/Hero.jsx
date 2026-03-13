import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/university-image.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Üst badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 px-4 py-1.5 bg-primary/80 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider"
        >
          🎓 Ege Bölgesi'nin Köklü Üniversitesi
        </motion.div>

        {/* Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight"
        >
          Manisa Celal Bayar
          <br />
          <span className="text-light">Üniversitesi</span>
        </motion.h1>

        {/* Alt yazı */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
        >
          Geleceğe yön veren bir üniversite deneyimi
        </motion.p>

        {/* Butonlar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/academics"
            className="bg-primary hover:bg-primaryLight text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Üniversiteyi Keşfet
          </Link>
          <Link
            to="/about"
            className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Hakkımızda
          </Link>
        </motion.div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-12 flex gap-8 md:gap-16 text-center"
        >
          {[
            { value: "40.000+", label: "Öğrenci" },
            { value: "1.500+", label: "Akademisyen" },
            { value: "14", label: "Fakülte" },
            { value: "100+", label: "Program" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl md:text-3xl font-bold text-light">{value}</div>
              <div className="text-sm text-gray-300">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;