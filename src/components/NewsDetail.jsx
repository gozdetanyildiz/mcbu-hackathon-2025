import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const newsDetails = {
  "1": { title: "Mühendislik Fakültesi Mezunlar Buluşması Gerçekleşti", date: "13.03.2026", category: "Etkinlik", imageUrl: "/assets/campus-life-news.jpg", content: "Mühendislik Fakültesi mezunları, üniversitemizin ev sahipliğinde büyük bir buluşmada bir araya geldi. Etkinlikte mezunlar birbirleriyle deneyimlerini paylaşırken, mevcut öğrencilerle de iletişim kurma fırsatı buldular. Fakülte Dekanı açılış konuşmasında mezunların üniversiteye katkılarına değindi." },
  "2": { title: "Sanayi-Üniversite İş Birliğini Güçlendiren Protokoller İmzalandı", date: "12.03.2026", category: "İş Birliği", imageUrl: "/assets/1.jpg", content: "MCBÜ ve Manisa OSB arasında imzalanan protokollerle sanayi-üniversite iş birliği daha da güçlendirildi. Protokol kapsamında staj imkânları, ortak araştırma projeleri ve istihdam fırsatları artırılacak." },
  "3": { title: "Rektör Kibar, Manisa Valisi Özkan'ı Ağırladı", date: "11.03.2026", category: "Ziyaret", imageUrl: "/assets/edu-news.jpg", content: "Rektör Prof. Dr. Rana Kibar, Manisa Valisi Vahdettin Özkan'ı makamında ağırladı. Görüşmede üniversite-il yönetimi iş birliği ve bölgesel kalkınmaya katkılar ele alındı." },
  "mcbu-turkiye-karate-sampiyonasi": { title: "MCBÜ Öğrencileri Türkiye Karate Şampiyonası'nda Büyük Başarı", date: "10.03.2026", category: "Spor", imageUrl: "/assets/2.jpg", content: "MCBÜ sporcuları Türkiye Karate Şampiyonası'nda 3 altın, 2 gümüş ve 4 bronz madalya kazandı. Sporcularımız ülke genelinde büyük bir başarıya imza attı." },
  "karate-heysani": { title: "Türkiye Üniversiteler Karate Şampiyonası MCBÜ'de", date: "09.03.2026", category: "Spor", imageUrl: "/assets/3.jpg", content: "Manisa Celal Bayar Üniversitesi'nde Türkiye Üniversiteler Karate Şampiyonası düzenlendi. 40'tan fazla üniversiteden 500'ü aşkın sporcu katıldı." },
  "nevruz-kutlama": { title: "Rektör Vekili Nevruz Kutlamalarına Katıldı", date: "08.03.2026", category: "Etkinlik", imageUrl: "/assets/4.jpg", content: "Rektör Vekili Prof. Dr. Ahmet Çetin, üniversitemizdeki nevruz kutlamalarına katılarak öğrencilerle bir araya geldi." },
  "tubitak-basari": { title: "MCBÜ TÜBİTAK 1001 Programından Destek Aldı", date: "06.03.2026", category: "Araştırma", imageUrl: "/assets/university-image.jpg", content: "Üniversitemiz akademisyenleri TÜBİTAK 1001 Bilimsel ve Teknolojik Araştırma Projeleri kapsamında önemli destekler kazandı. Projeler yapay zeka, enerji ve biyoteknoloji alanlarını kapsıyor." },
  "iftar-bulusmasi": { title: "İlahiyat Fakültesi'nde İftar Buluşması", date: "13.03.2026", category: "Etkinlik", imageUrl: "/assets/university-image.jpg", content: "MCBÜ İlahiyat Fakültesi'nde Ramazan ayı vesilesiyle düzenlenen iftar programına akademisyenler, öğrenciler ve davetliler katıldı." },
  "deprem-konferans": { title: "Afet ve Deprem Farkındalık Konferansı", date: "11.03.2026", category: "Akademik", imageUrl: "/assets/university-image.jpg", content: "MCBÜ akademisyenleri Turgutlu'da afet ve deprem farkındalığına yönelik konferans düzenledi. Konferansta deprem hazırlığı ve kentsel dönüşüm konuları ele alındı." },
};

const NewsDetail = () => {
  const { newsId } = useParams();
  const news = newsDetails[newsId];

  if (!news) {
    return (
      <>
        <Navbar />
        <div className="pt-16 min-h-screen bg-white dark:bg-darkBg flex flex-col items-center justify-center text-center px-4">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-2xl font-bold text-darkBlue dark:text-white mb-2">Haber bulunamadı</h1>
          <Link to="/news" className="text-primary hover:underline mt-2">← Haberlere dön</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-darkBg min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Geri butonu */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/news" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm mb-8">
              ← Tüm Haberler
            </Link>
          </motion.div>

          {/* Kategori & Tarih */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">{news.category}</span>
            <span className="text-gray-400 text-sm">📅 {news.date}</span>
          </motion.div>

          {/* Başlık */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-3xl md:text-4xl font-bold text-darkBlue dark:text-white mb-6 leading-tight"
          >
            {news.title}
          </motion.h1>

          {/* Görsel */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden mb-8 shadow-lg"
          >
            <img src={news.imageUrl} alt={news.title}
              className="w-full h-72 object-cover"
              onError={e => { e.target.src = "/assets/university-image.jpg"; }}
            />
          </motion.div>

          {/* İçerik */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <p>{news.content}</p>
          </motion.div>

          {/* Alt navigasyon */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-darkBorder">
            <Link to="/news"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primaryLight text-white font-semibold py-2.5 px-6 rounded-full transition"
            >
              ← Tüm Haberlere Dön
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewsDetail;