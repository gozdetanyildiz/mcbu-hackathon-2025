import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const announcements = [
  { id: 1, date: "13.03.2026", category: "Duyuru", title: "Vefat ve Başsağlığı", desc: "Üniversitemiz mensuplarına duyurulur." },
  { id: 2, date: "11.03.2026", category: "Duyuru", title: "Bayramlaşma Programı", desc: "Ramazan Bayramı dolayısıyla bayramlaşma programı düzenlenecektir." },
  { id: 3, date: "11.03.2026", category: "Duyuru", title: "DAPSİS Faaliyete Başladı", desc: "Dış kaynaklı araştırma projelerinin süreçlerinin takip edildiği otomasyon yazılımı DAPSİS faaliyete geçmiştir." },
  { id: 4, date: "10.03.2026", category: "Duyuru", title: "8 Adet Yeni Veritabanı", desc: "TÜBİTAK-ULAKBİM EKUAL kapsamında 8 yeni veritabanı üniversitemizin erişimine açıldı." },
  { id: 5, date: "06.03.2026", category: "Duyuru", title: "Bağış Kampanyası: Geleceğin Işığı", desc: "Öğrencilerimize destek olmak için bağış kampanyamız başlamıştır." },
  { id: 6, date: "06.03.2026", category: "Duyuru", title: "Kurumsal Dijital Dönüşüm Eğitimi", desc: "Kamu ve özel sektör profesyonellerine yönelik dijital dönüşüm eğitim programı başlıyor." },
];

const events = [
  { id: 1, date: "13.03.2026", time: "14:30", title: "Tam Bağımsızlık Fikri ve 14 Mart", location: "MCBÜ Tıp Tarihi ve Deontoloji Müzesi", color: "bg-blue-500" },
  { id: 2, date: "16.03.2026", time: "11:00", title: "Siperin Ardındaki Çanakkale", location: "İnsan ve Toplum Bilimleri Fakültesi Konferans Salonu", color: "bg-red-500" },
  { id: 3, date: "17.03.2026", time: "10:30", title: "Bayramlaşma Programı", location: "MCBÜ Uncubozköy Yerleşkesi", color: "bg-green-500" },
  { id: 4, date: "23.03.2026", time: "11:00", title: "Su Yönetimi ve Toplumsal Farkındalık", location: "Prof. Ümit Doğay Arınç Kültür Merkezi", color: "bg-purple-500" },
  { id: 5, date: "26.03.2026", time: "13:30", title: "Kolon Kanseri Sadece Bir Tümör Değil", location: "Hafsa Sultan Hastanesi Toplantı Salonu", color: "bg-orange-500" },
  { id: 6, date: "05.05.2026", time: "18:30", title: "Teachers' Trivia Night", location: "Prof. Ümit Doğay Arınç Kültür Merkezi", color: "bg-pink-500" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const Announcements = () => {
  const [tab, setTab] = useState("duyurular");

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-darkBg min-h-screen">
        {/* Hero */}
        <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: "url('/assets/university-image.jpg')" }}>
          <div className="absolute inset-0 bg-darkBlue/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
            <motion.h1 {...fadeUp()} className="text-4xl md:text-5xl font-bold text-white">
              Duyurular & Etkinlikler
            </motion.h1>
            <motion.p {...fadeUp(0.1)} className="text-gray-300 text-sm">
              Güncel haberler ve kampüs etkinlikleri
            </motion.p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Tab */}
          <div className="flex gap-2 mb-8 bg-gray-100 dark:bg-darkCard rounded-xl p-1 w-fit">
            {["duyurular", "etkinlikler"].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${
                  tab === t
                    ? "bg-primary text-white shadow"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                {t === "duyurular" ? "📢 Duyurular" : "📅 Etkinlikler"}
              </button>
            ))}
          </div>

          {/* Duyurular */}
          {tab === "duyurular" && (
            <div className="space-y-4">
              {announcements.map((a, i) => (
                <motion.div key={a.id} {...fadeUp(i * 0.05)}
                  className="flex gap-4 p-5 rounded-xl border border-gray-100 dark:border-darkBorder bg-white dark:bg-darkCard hover:shadow-md transition-shadow"
                >
                  <div className="min-w-[60px] text-center">
                    <div className="text-xs text-gray-400 dark:text-gray-500">{a.date.split(".")[2]}</div>
                    <div className="text-2xl font-bold text-primary">{a.date.split(".")[0]}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      {["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"][parseInt(a.date.split(".")[1]) - 1]}
                    </div>
                  </div>
                  <div className="border-l border-gray-200 dark:border-darkBorder pl-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{a.category}</span>
                    <h3 className="font-semibold text-gray-800 dark:text-white mt-0.5">{a.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Etkinlikler */}
          {tab === "etkinlikler" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {events.map((e, i) => (
                <motion.div key={e.id} {...fadeUp(i * 0.05)}
                  className="rounded-xl overflow-hidden border border-gray-100 dark:border-darkBorder bg-white dark:bg-darkCard hover:shadow-md transition-shadow"
                >
                  <div className={`${e.color} h-1.5`} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-2">
                      <span>📅 {e.date}</span>
                      <span>•</span>
                      <span>⏰ {e.time}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{e.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-start gap-1">
                      <span>📍</span> {e.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Announcements;