import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-darkBg min-h-screen">
        {/* Hero */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/university-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-darkBlue/70" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.h1
              {...fadeUp()}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              İletişim
            </motion.h1>
          </div>
        </div>

        {/* İçerik */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <motion.div {...fadeUp(0.1)}>
              <h2 className="text-2xl font-bold text-darkBlue dark:text-white mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    title: "Adres",
                    text: "Şehit Prof. Dr. İlhan Varank Yerleşkesi 45140 Yunusemre - MANİSA",
                  },
                  { icon: "📞", title: "Santral", text: "0 (236) 201 10 00" },
                  { icon: "📠", title: "Faks", text: "0 (236) 237 24 42" },
                  { icon: "✉️", title: "KEP", text: "celalbayaruniversitesi@hs01.kep.tr" },
                ].map(({ icon, title, text }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-darkCard border border-gray-100 dark:border-darkBorder"
                  >
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="font-semibold text-darkBlue dark:text-white">{title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Harita */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="MCBÜ Harita"
                  width="100%"
                  height="280"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.5!2d27.3072481!3d38.6743963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9846159b4f467%3A0xf80361ea5d300f13!2sManisa%20Celal%20Bayar%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* İletişim Formu */}
            <motion.div {...fadeUp(0.2)}>
              <h2 className="text-2xl font-bold text-darkBlue dark:text-white mb-6">
                Bize Yazın
              </h2>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      placeholder="Ad Soyad"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      E-posta
                    </label>
                    <input
                      type="email"
                      placeholder="ornek@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Konu
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition">
                    <option value="">Konu Seçiniz</option>
                    <option>Görüş</option>
                    <option>Öneri</option>
                    <option>Şikayet</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Mesajınızı yazınız..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary hover:bg-primaryLight text-white font-semibold py-3 rounded-lg transition-colors duration-300 shadow-md"
                >
                  Gönder
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;