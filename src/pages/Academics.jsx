import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const fakulteler = [
  { icon: "💻", name: "Mühendislik Fakültesi", bolumler: ["Bilgisayar Müh.", "Elektrik-Elektronik Müh.", "Makine Müh.", "İnşaat Müh.", "Endüstri Müh."] },
  { icon: "📊", name: "İktisadi ve İdari Bilimler", bolumler: ["İşletme", "İktisat", "Maliye", "Uluslararası İlişkiler"] },
  { icon: "🔬", name: "Fen-Edebiyat Fakültesi", bolumler: ["Matematik", "Fizik", "Kimya", "Biyoloji", "Türk Dili"] },
  { icon: "⚕️", name: "Tıp Fakültesi", bolumler: ["Dahiliye", "Cerrahi", "Pediatri", "Psikiyatri"] },
  { icon: "⚖️", name: "Hukuk Fakültesi", bolumler: ["Kamu Hukuku", "Özel Hukuk"] },
  { icon: "🎨", name: "Güzel Sanatlar Tasarım", bolumler: ["Grafik Tasarım", "İç Mimarlık", "Resim"] },
  { icon: "🌾", name: "Ziraat Fakültesi", bolumler: ["Tarımsal Biyoteknoloji", "Bahçe Bitkileri", "Tarım Ekonomisi"] },
  { icon: "📚", name: "Eğitim Fakültesi", bolumler: ["Sınıf Öğretmenliği", "Matematik Öğretmenliği", "Fen Bilimleri Öğretmenliği"] },
];

const programlar = [
  { name: "Bilgisayar Mühendisliği", sure: "4 Yıl", dil: "Türkçe", tur: "Lisans" },
  { name: "Elektrik-Elektronik Mühendisliği", sure: "4 Yıl", dil: "Türkçe", tur: "Lisans" },
  { name: "Makine Mühendisliği", sure: "4 Yıl", dil: "Türkçe", tur: "Lisans" },
  { name: "İşletme", sure: "4 Yıl", dil: "Türkçe", tur: "Lisans" },
  { name: "Tıp", sure: "6 Yıl", dil: "Türkçe", tur: "Lisans" },
  { name: "Hukuk", sure: "4 Yıl", dil: "Türkçe", tur: "Lisans" },
  { name: "Yapay Zeka Mühendisliği", sure: "4 Yıl", dil: "Türkçe", tur: "Lisans" },
  { name: "Veri Bilimi", sure: "2 Yıl", dil: "Türkçe", tur: "Yüksek Lisans" },
  { name: "Biyoteknoloji", sure: "4 Yıl", dil: "Türkçe", tur: "Lisans" },
];

const Academics = () => {
  const [activeTab, setActiveTab] = useState("fakulteler");
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-darkBg min-h-screen">

        {/* Hero */}
        <div className="relative h-72 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/5.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-darkBlue/80 to-darkBlue/60" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.p {...fadeUp(0)} className="text-primaryLight text-sm font-semibold uppercase tracking-widest mb-2">
              Eğitim & Araştırma
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-bold text-white">
              Akademik
            </motion.h1>
          </div>
        </div>

        {/* Tab Menü */}
        <div className="sticky top-16 z-40 bg-white dark:bg-darkBg border-b border-gray-200 dark:border-darkBorder shadow-sm">
          <div className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {[
              { id: "fakulteler", label: "🏛️ Fakülteler" },
              { id: "programlar", label: "📚 Programlar" },
              { id: "enstituler", label: "🔬 Enstitüler" },
              { id: "kaynaklar", label: "📖 Kaynaklar" },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-darkCard"
                }`}
              >{tab.label}</button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">

          {/* Fakülteler */}
          {activeTab === "fakulteler" && (
            <div id="fakulteler">
              <motion.h2 {...fadeUp()} className="text-3xl font-bold text-darkBlue dark:text-white mb-10 text-center">
                Fakültelerimiz
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {fakulteler.map((f, i) => (
                  <motion.div key={f.name} {...fadeUp(i * 0.05)}
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="cursor-pointer bg-white dark:bg-darkCard rounded-2xl p-6 border border-gray-100 dark:border-darkBorder hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{f.icon}</span>
                        <h3 className="font-bold text-darkBlue dark:text-white text-sm leading-snug">{f.name}</h3>
                      </div>
                      <span className="text-gray-400 text-sm">{expanded === i ? "▲" : "▼"}</span>
                    </div>
                    {expanded === i && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 space-y-1 border-t border-gray-100 dark:border-darkBorder pt-3"
                      >
                        {f.bolumler.map(b => (
                          <li key={b} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> {b}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Programlar */}
          {activeTab === "programlar" && (
            <div id="programlar">
              <motion.h2 {...fadeUp()} className="text-3xl font-bold text-darkBlue dark:text-white mb-10 text-center">
                Akademik Programlar
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {programlar.map((p, i) => (
                  <motion.div key={p.name} {...fadeUp(i * 0.05)}
                    className="bg-white dark:bg-darkCard rounded-2xl p-6 border border-gray-100 dark:border-darkBorder hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full mb-3 inline-block ${
                      p.tur === "Lisans" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    }`}>{p.tur}</span>
                    <h3 className="font-bold text-darkBlue dark:text-white mb-3">{p.name}</h3>
                    <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span>⏱ {p.sure}</span>
                      <span>🌐 {p.dil}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Enstitüler */}
          {activeTab === "enstituler" && (
            <div id="enstituler">
              <motion.h2 {...fadeUp()} className="text-3xl font-bold text-darkBlue dark:text-white mb-10 text-center">
                Enstitülerimiz
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "🔬", name: "Fen Bilimleri Enstitüsü", desc: "Mühendislik ve fen alanlarında lisansüstü eğitim." },
                  { icon: "📖", name: "Sosyal Bilimler Enstitüsü", desc: "Sosyal bilimler alanında yüksek lisans ve doktora programları." },
                  { icon: "⚕️", name: "Sağlık Bilimleri Enstitüsü", desc: "Tıp ve sağlık alanlarında ileri düzey araştırma eğitimi." },
                  { icon: "🎨", name: "Güzel Sanatlar Enstitüsü", desc: "Sanat ve tasarım alanlarında lisansüstü programlar." },
                ].map((e, i) => (
                  <motion.div key={e.name} {...fadeUp(i * 0.1)}
                    className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-darkCard border border-gray-100 dark:border-darkBorder hover:shadow-lg transition-shadow"
                  >
                    <span className="text-4xl">{e.icon}</span>
                    <div>
                      <h3 className="font-bold text-darkBlue dark:text-white mb-1">{e.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{e.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Kaynaklar */}
          {activeTab === "kaynaklar" && (
            <div id="kaynaklar">
              <motion.h2 {...fadeUp()} className="text-3xl font-bold text-darkBlue dark:text-white mb-10 text-center">
                Öğrenci Kaynakları
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: "📚", title: "Kütüphane", desc: "Geniş koleksiyon ve dijital kaynaklara erişim.", href: "https://kutuphane.mcbu.edu.tr" },
                  { icon: "🖥️", title: "Bilişim Servisleri", desc: "Öğrenci bilgi sistemi ve dijital hizmetler.", href: "https://www.mcbu.edu.tr" },
                  { icon: "🌍", title: "Erasmus", desc: "Uluslararası değişim ve burs programları.", href: "https://international.mcbu.edu.tr" },
                  { icon: "💼", title: "Kariyer Merkezi", desc: "Staj ve iş imkânları için kariyer desteği.", href: "https://ika.mcbu.edu.tr" },
                  { icon: "🏅", title: "BAP", desc: "Bilimsel araştırma projeleri koordinasyon.", href: "http://bap.mcbu.edu.tr" },
                  { icon: "📅", title: "Akademik Takvim", desc: "Dönem ve sınav tarihleri için akademik takvim.", href: "https://www.mcbu.edu.tr" },
                ].map((r, i) => (
                  <motion.a key={r.title} {...fadeUp(i * 0.05)} href={r.href} target="_blank" rel="noreferrer"
                    className="group block p-6 rounded-2xl bg-white dark:bg-darkCard border border-gray-100 dark:border-darkBorder hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all hover:-translate-y-0.5"
                  >
                    <div className="text-3xl mb-3">{r.icon}</div>
                    <h3 className="font-bold text-darkBlue dark:text-white mb-1 group-hover:text-primary transition-colors">{r.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{r.desc}</p>
                    <span className="text-primary text-xs font-semibold mt-3 inline-block">Ziyaret Et →</span>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Academics;