import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-gray-300">
      {/* Ana footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Hakkında */}
          <div className="lg:col-span-1">
            <img
              src="https://www.mcbu.edu.tr/img/cbu_logo_yan.png"
              alt="MCBÜ Logo"
              className="h-10 brightness-0 invert mb-4"
              onError={e => e.target.style.display = "none"}
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Manisa Celal Bayar Üniversitesi, Ege Bölgesi'nin köklü ve öncü üniversitelerinden biridir.
            </p>
            {/* Sosyal Medya */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "Facebook", href: "https://facebook.com", icon: "f" },
                { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
                { label: "Instagram", href: "https://instagram.com", icon: "▣" },
                { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-sm font-bold transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Anasayfa" },
                { to: "/academics", label: "Akademik" },
                { to: "/news", label: "Haberler" },
                { to: "/announcements", label: "Duyurular" },
                { to: "/about", label: "Hakkımızda" },
                { to: "/contact", label: "İletişim" },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-colors flex items-center gap-1.5">
                    <span className="text-primary text-xs">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Akademik Linkler */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Akademik</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "https://www.mcbu.edu.tr/Sayfa/Fakulteler", label: "Fakülteler" },
                { href: "https://www.mcbu.edu.tr/Sayfa/enstitler", label: "Enstitüler" },
                { href: "https://bologna.mcbu.edu.tr", label: "Bologna" },
                { href: "https://avesis.mcbu.edu.tr", label: "Akademik Veri Sistemi" },
                { href: "https://kutuphane.mcbu.edu.tr", label: "Kütüphane" },
                { href: "http://bap.mcbu.edu.tr", label: "BAP" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary text-xs">›</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="mt-0.5">📍</span>
                <span className="text-gray-400">Şehit Prof. Dr. İlhan Varank Yerleşkesi 45140 Yunusemre, MANİSA</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <a href="tel:+902362011000" className="text-gray-400 hover:text-primary transition">0 (236) 201 10 00</a>
              </li>
              <li className="flex gap-2">
                <span>📠</span>
                <span className="text-gray-400">0 (236) 237 24 42</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a href="mailto:celalbayaruniversitesi@hs01.kep.tr" className="text-gray-400 hover:text-primary transition text-xs break-all">
                  celalbayaruniversitesi@hs01.kep.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} MCBÜ — Tüm Hakları Saklıdır.</span>
          <div className="flex gap-4">
            <a href="https://kvkk.mcbu.edu.tr" target="_blank" rel="noreferrer" className="hover:text-primary transition">KVKK</a>
            <a href="https://www.mcbu.edu.tr" target="_blank" rel="noreferrer" className="hover:text-primary transition">Resmi Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;