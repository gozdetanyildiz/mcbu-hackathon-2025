import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const StatCard = ({ value, suffix, label, icon, started }) => {
  const count = useCounter(value, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white dark:bg-darkCard rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-darkBorder"
    >
      <span className="text-4xl mb-2">{icon}</span>
      <div className="text-3xl font-bold text-primary">
        {count.toLocaleString("tr-TR")}{suffix}
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-sm mt-1 font-medium">{label}</div>
    </motion.div>
  );
};

const cards = [
  { to: "/academics", icon: "🎓", title: "Öğrenciler", desc: "Ders programları, not sistemi ve öğrenci hizmetleri hakkında tüm bilgiler.", cta: "İncele" },
  { to: "/academics", icon: "👨‍🏫", title: "Akademisyenler", desc: "Akademik personel için kaynaklar, duyurular ve araştırma imkânları.", cta: "İncele" },
  { to: "/about", icon: "🏅", title: "Mezunlar", desc: "Mezun ağı, kariyer fırsatları ve etkinlikler hakkında bilgi alın.", cta: "İncele" },
];

const InfoBar = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-darkBg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* İstatistikler */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <StatCard value={40000} suffix="+" label="Öğrenci" icon="👩‍🎓" started={started} />
          <StatCard value={1500} suffix="+" label="Akademisyen" icon="👨‍🏫" started={started} />
          <StatCard value={14} suffix="" label="Fakülte" icon="🏛️" started={started} />
          <StatCard value={100} suffix="+" label="Program" icon="📚" started={started} />
        </div>

        {/* Bilgi Kartları */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-darkBlue dark:text-white mb-10"
        >
          Size Özel Bölümler
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-darkCard rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 dark:border-darkBorder transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{c.icon}</div>
              <h3 className="text-xl font-bold text-darkBlue dark:text-white mb-2">{c.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">{c.desc}</p>
              <Link
                to={c.to}
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
              >
                {c.cta} <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBar;