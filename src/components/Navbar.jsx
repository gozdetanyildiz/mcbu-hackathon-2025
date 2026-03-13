import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { to: "/", label: "Anasayfa" },
  {
    label: "Akademik",
    dropdown: [
      { to: "/academics#fakulteler", label: "🏛️ Fakülteler" },
      { to: "/academics#programlar", label: "📚 Akademik Programlar" },
      { to: "/academics#enstituler", label: "🔬 Enstitüler" },
      { to: "/academics#kaynaklar", label: "📖 Öğrenci Kaynakları" },
    ],
  },
  {
    label: "Hakkımızda",
    dropdown: [
      { to: "/about#tarihce", label: "📜 Tarihçe" },
      { to: "/about#misyon", label: "🎯 Misyon & Vizyon" },
      { to: "/about#yonetim", label: "👤 Yönetim" },
      { to: "/about#iletisim", label: "📍 İletişim Bilgileri" },
    ],
  },
  {
    label: "Kampüs",
    dropdown: [
      { to: "/about#saglik", label: "🏥 Sağlık Hizmetleri" },
      { to: "/about#spor", label: "⚽ Spor Tesisleri" },
      { to: "/about#yurtlar", label: "🏠 Yurtlar" },
      { to: "/about#ulasim", label: "🚌 Ulaşım" },
    ],
  },
  {
    label: "Araştırma",
    dropdown: [
      { to: "/academics#arastirma", label: "🧪 Araştırma Merkezleri" },
      { to: "/academics#bap", label: "📊 Bilimsel Araştırma Projeleri" },
      { to: "/academics#kutuphane", label: "📚 Kütüphane" },
      { to: "/academics#teknokent", label: "💡 Teknokent" },
    ],
  },
  { to: "/news", label: "Haberler" },
  { to: "/announcements", label: "Duyurular" },
  { to: "/contact", label: "İletişim" },
];

const searchablePages = [
  { label: "Anasayfa", to: "/" },
  { label: "Haberler", to: "/news" },
  { label: "Akademik Programlar", to: "/academics" },
  { label: "Hakkımızda", to: "/about" },
  { label: "İletişim", to: "/contact" },
  { label: "Duyurular", to: "/announcements" },
  { label: "Fakülteler", to: "/academics" },
  { label: "Bilgisayar Mühendisliği", to: "/academics" },
  { label: "Makine Mühendisliği", to: "/academics" },
  { label: "Kütüphane", to: "/academics" },
  { label: "Teknokent", to: "/academics" },
  { label: "Misyon ve Vizyon", to: "/about" },
  { label: "Kampüs Sağlık", to: "/about" },
  { label: "Spor Tesisleri", to: "/about" },
  { label: "Yurtlar", to: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const { dark, setDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setSearchOpen(false); setQuery(""); setOpenDropdown(null); }, [location]);

  useEffect(() => {
    if (query.trim().length < 2) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(searchablePages.filter(p => p.label.toLowerCase().includes(q)));
  }, [query]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-darkBlue/95 backdrop-blur-md shadow-lg" : "bg-darkBlue"
        }`}

      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center" ref={dropdownRef}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://www.mcbu.edu.tr/img/cbu_logo_yan.png"
                alt="MCBÜ Logo"
                className="h-16 w-auto brightness-0 invert"
                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
              />
              <span style={{ display: "none" }} className="text-xl font-bold text-primaryLight navbar-logo tracking-wide">MCBÜ</span>
            </Link>

            {/* Masaüstü Menü */}
            <div className="hidden lg:flex items-center space-x-0.5">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        openDropdown === item.label
                          ? "text-white bg-primary"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-darkCard rounded-xl shadow-xl border border-gray-100 dark:border-darkBorder overflow-hidden z-50"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.to + sub.label}
                              to={sub.to}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={item.to} to={item.to}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.to
                        ? "text-white bg-primary"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >{item.label}</Link>
                )
              )}

              {/* Arama */}
              <button onClick={() => setSearchOpen(true)} className="ml-1 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
              </button>

              {/* Dark Mode */}
              <button onClick={() => setDark(!dark)} className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition">
                {dark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobil butonlar */}
            <div className="lg:hidden flex items-center gap-1">
              <button onClick={() => setSearchOpen(true)} className="p-2 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
              </button>
              <button onClick={() => setDark(!dark)} className="p-2 text-gray-300">{dark ? "☀️" : "🌙"}</button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {isOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Menü */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-darkBlue border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition"
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform ${mobileOpen === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileOpen === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-3 pl-3 border-l border-white/10 flex flex-col gap-0.5 mt-1"
                          >
                            {item.dropdown.map((sub) => (
                              <Link key={sub.label} to={sub.to}
                                className="px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition"
                              >{sub.label}</Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link key={item.to} to={item.to}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                        location.pathname === item.to ? "text-white bg-primary" : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >{item.label}</Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Arama Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            onClick={() => { setSearchOpen(false); setQuery(""); }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-xl bg-white dark:bg-darkCard rounded-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center px-4 py-3 border-b border-gray-100 dark:border-darkBorder">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                </svg>
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={e => e.key === "Escape" && setSearchOpen(false)}
                  placeholder="Sayfa veya konu ara..."
                  className="flex-1 bg-transparent text-gray-800 dark:text-white placeholder-gray-400 outline-none text-base"
                />
                <button onClick={() => { setSearchOpen(false); setQuery(""); }} className="text-gray-400 hover:text-gray-600 ml-2 text-sm">ESC</button>
              </div>
              {results.length > 0 && (
                <ul className="max-h-64 overflow-y-auto">
                  {results.map((r, i) => (
                    <li key={i}>
                      <button
                        onClick={() => { navigate(r.to); setSearchOpen(false); setQuery(""); }}
                        className="w-full text-left px-5 py-3 hover:bg-gray-50 dark:hover:bg-darkBg text-gray-700 dark:text-gray-300 text-sm transition flex items-center gap-3"
                      >
                        <span className="text-primary">→</span> {r.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {query.length >= 2 && results.length === 0 && (
                <div className="px-5 py-4 text-gray-400 text-sm">Sonuç bulunamadı.</div>
              )}
              {query.length < 2 && (
                <div className="px-5 py-3 text-gray-400 text-xs">Aramak için yazmaya başlayın...</div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;