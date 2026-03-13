import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-darkBg">

        {/* Hero */}
        <div className="relative h-72 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/university-image.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-darkBlue/80 to-darkBlue/60" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.p {...fadeUp(0)} className="text-primaryLight text-sm font-semibold uppercase tracking-widest mb-2">
              Bizi Tanıyın
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-bold text-white">
              Hakkımızda
            </motion.h1>
          </div>
        </div>

        {/* Tanıtım */}
        <section id="tarihce" className="max-w-5xl mx-auto px-4 py-20 text-center">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-darkBlue dark:text-white mb-6">
            Manisa Celal Bayar Üniversitesi
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Manisa Celal Bayar Üniversitesi, 1992 yılında kurulan ve Ege Bölgesi'nin en köklü üniversitelerinden biridir.
            Çağdaş eğitim anlayışı ve yenilikçi araştırmaları ile Türkiye'nin önde gelen üniversiteleri arasında yer almaktadır.
            Akademik mükemmeliyeti, bilimsel araştırmaları ve toplumsal katkısıyla öğrencilerine geleceğe hazırlayan bir deneyim sunmaktadır.
          </motion.p>
        </section>

        {/* Misyon & Vizyon */}
        <section id="misyon" className="bg-gray-50 dark:bg-darkCard py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center text-darkBlue dark:text-white mb-12">
              Misyon & Vizyon
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Misyonumuz",
                  text: "Öğrencilerimize bilimsel bilgi, eleştirel düşünme becerisi ve topluma hizmet bilincini kazandırmaktır. Bilimsel araştırmalara katkı sağlayarak ülkemizin gelişimine hizmet etmeyi amaçlıyoruz.",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: "🌟",
                  title: "Vizyonumuz",
                  text: "Global anlamda tanınan ve liderlik eden bir üniversite olmayı sürdürmektir. Eğitimde kaliteyi artırarak toplumsal sorunlara yenilikçi çözümler üretmeyi hedefliyoruz.",
                  color: "from-purple-500 to-purple-600",
                },
              ].map((item, i) => (
                <motion.div key={item.title} {...fadeUp(i * 0.15)}
                  className="bg-white dark:bg-darkBg rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-darkBorder"
                >
                  <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                  <div className="p-8">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-darkBlue dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Yönetim */}
        <section id="yonetim" className="py-20 max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center text-darkBlue dark:text-white mb-12">
            Yönetim
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Rektör", name: "Prof. Dr. Rana Kibar", icon: "👩‍💼" },
              { title: "Genel Sekreter", name: "Üniversite Yönetimi", icon: "👨‍💼" },
              { title: "Senato", name: "Akademik Kurul", icon: "🏛️" },
            ].map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i * 0.1)}
                className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-darkCard border border-gray-100 dark:border-darkBorder hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{p.icon}</div>
                <div className="text-sm text-primary font-semibold uppercase tracking-wide mb-1">{p.title}</div>
                <div className="font-bold text-darkBlue dark:text-white">{p.name}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Neden MCBÜ */}
        <section className="bg-darkBlue py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center text-white mb-12">
              Neden MCBÜ?
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🏆", title: "Akredite Programlar", desc: "Ulusal ve uluslararası akreditasyona sahip programlarla kaliteli eğitim." },
                { icon: "🔬", title: "Araştırma İmkânları", desc: "Modern laboratuvarlar ve araştırma merkezleriyle bilimsel çalışma ortamı." },
                { icon: "🌍", title: "Uluslararası İlişkiler", desc: "Erasmus ve değişim programlarıyla dünyaya açılan kapılar." },
                { icon: "🏥", title: "Sağlık Hizmetleri", desc: "Hafsa Sultan Hastanesi ile kampüste tam donanımlı sağlık hizmeti." },
                { icon: "⚽", title: "Kampüs Hayatı", desc: "Spor tesisleri, öğrenci kulüpleri ve sosyal etkinliklerle zengin kampüs yaşamı." },
                { icon: "💼", title: "Kariyer Desteği", desc: "İstihdam ve kariyer merkezi ile mezuniyette iş hayatına hazır olun." },
              ].map((item, i) => (
                <motion.div key={item.title} {...fadeUp(i * 0.08)}
                  className="flex gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Harita */}
        <section id="iletisim" className="py-20 max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold text-center text-darkBlue dark:text-white mb-10">
            Bizi Ziyaret Edin
          </motion.h2>
          <motion.div {...fadeUp(0.1)} className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-darkBorder">
            <iframe
              title="MCBÜ Konum"
              width="100%" height="400" frameBorder="0" style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.5!2d27.3072481!3d38.6743963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9846159b4f467%3A0xf80361ea5d300f13!2sManisa%20Celal%20Bayar%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1"
              allowFullScreen
            />
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default About;