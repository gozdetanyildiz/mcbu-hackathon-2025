import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkBlue text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide text-primary navbar-logo">
            <span>MCBÜ</span> {/* Fontu buraya uyguladık, imleci kaldırdık */}
          </div>

          {/* Menü - Masaüstü */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Anasayfa
            </Link>
            <Link to="/news" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Haberler
            </Link>
            <Link to="/academics" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Akademik
            </Link>
            <Link to="/about" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Hakkımızda
            </Link>
          </div>

          {/* Hamburger Menü - Mobil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 pb-4">
            <Link to="/" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Anasayfa
            </Link>
            <Link to="/news" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Haberler
            </Link>
            <Link to="/academics" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Akademik
            </Link>
            <Link to="/about" className="hover:text-primary transition border-b-2 border-transparent hover:border-white">
              Hakkımızda
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
