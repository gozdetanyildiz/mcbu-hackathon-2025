import { useState } from "react";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const allNews = [
  { id: "1", title: "Mühendislik Fakültesi Mezunlar Buluşması Gerçekleşti", description: "Mühendislik Fakültesi mezunları, büyük bir buluşmada bir araya geldi. Etkinlik detayları ve katılımcı yorumları.", imageUrl: "/assets/campus-life-news.jpg", link: "/news/1", date: "13.03.2026", category: "Etkinlik" },
  { id: "2", title: "Sanayi-Üniversite İş Birliğini Güçlendiren Protokoller İmzalandı", description: "MCBÜ ve Manisa OSB, sanayi-üniversite iş birliğini geliştiren önemli protokoller imzaladı.", imageUrl: "/assets/1.jpg", link: "/news/2", date: "12.03.2026", category: "İş Birliği" },
  { id: "3", title: "Rektör Kibar, Manisa Valisi Özkan'ı Ağırladı", description: "Rektör Prof. Dr. Rana Kibar, Manisa Valisi Vahdettin Özkan'ı makamında ağırladı.", imageUrl: "/assets/edu-news.jpg", link: "/news/3", date: "11.03.2026", category: "Ziyaret" },
  { id: "mcbu-turkiye-karate-sampiyonasi", title: "MCBÜ Öğrencileri Türkiye Karate Şampiyonası'nda Büyük Başarı", description: "MCBÜ öğrencileri Türkiye Karate Şampiyonası'nda madalyalar kazandı.", imageUrl: "/assets/2.jpg", link: "/news/mcbu-turkiye-karate-sampiyonasi", date: "10.03.2026", category: "Spor" },
  { id: "karate-heysani", title: "Türkiye Üniversiteler Karate Şampiyonası MCBÜ'de", description: "Manisa Celal Bayar Üniversitesi'nde Türkiye Üniversiteler Karate Şampiyonası heyecanı başladı.", imageUrl: "/assets/3.jpg", link: "/news/karate-heysani", date: "09.03.2026", category: "Spor" },
  { id: "nevruz-kutlama", title: "Rektör Vekili Nevruz Kutlamalarına Katıldı", description: "Rektör Vekili Prof. Dr. Ahmet Çetin, üniversitemizdeki nevruz kutlamalarına katıldı.", imageUrl: "/assets/4.jpg", link: "/news/nevruz-kutlama", date: "08.03.2026", category: "Etkinlik" },
  { id: "tubitak-basari", title: "MCBÜ TÜBİTAK 1001 Programından Destek Aldı", description: "Üniversitemiz araştırmacıları TÜBİTAK 1001 kapsamında önemli destekler kazandı.", imageUrl: "/assets/university-image.jpg", link: "/news/tubitak-basari", date: "06.03.2026", category: "Araştırma" },
  { id: "iftar-bulusmasi", title: "İlahiyat Fakültesi'nde İftar Buluşması", description: "MCBÜ İlahiyat Fakültesi'nde düzenlenen iftar programı büyük ilgi gördü.", imageUrl: "/assets/university-image.jpg", link: "/news/iftar-bulusmasi", date: "13.03.2026", category: "Etkinlik" },
  { id: "deprem-konferans", title: "Afet ve Deprem Farkındalık Konferansı", description: "MCBÜ akademisyenleri Turgutlu'da afet bilinci konferansı düzenledi.", imageUrl: "/assets/university-image.jpg", link: "/news/deprem-konferans", date: "11.03.2026", category: "Akademik" },
];

const categories = ["Tümü", "Etkinlik", "Spor", "Akademik", "Araştırma", "İş Birliği", "Ziyaret"];

const NewsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [search, setSearch] = useState("");

  const filtered = allNews.filter(n => {
    const matchCat = activeCategory === "Tümü" || n.category === activeCategory;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-darkBg min-h-screen">
        {/* Hero */}
        <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: "url('/assets/university-image.jpg')" }}>
          <div className="absolute inset-0 bg-darkBlue/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white">
              Haberler
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-300 text-sm mt-2">
              MCBÜ'den güncel gelişmeler
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Arama + Filtre */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
            {/* Arama */}
            <div className="relative w-full md:w-72">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Haber ara..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Kategori filtreleri */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow"
                      : "bg-gray-100 dark:bg-darkCard text-gray-500 dark:text-gray-400 hover:bg-primary/10 hover:text-primary"
                  }`}
                >{cat}</button>
              ))}
            </div>
          </div>

          {/* Haber grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(news => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium">Sonuç bulunamadı</p>
              <p className="text-sm mt-1">Farklı bir arama terimi veya kategori deneyin.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewsGrid;