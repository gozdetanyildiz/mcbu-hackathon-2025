import React from 'react';

const Academics = () => {
  return (
    <div className="bg-light">
      {/* Hero Bölümü - Arka Plan Görseli Ekleme */}
      <div 
        className="relative bg-cover bg-center h-96" 
        style={{ backgroundImage: `url('/assets/5.jpg')` }} // Burada görseli ekliyoruz
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Görselin üzerine hafif karartma */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Akademik</h1> {/* Başlık */}
        </div>
      </div>

      {/* Akademik Programlar */}
      <section className="mt-16 px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-darkBlue">Akademik Programlarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Bilgisayar Mühendisliği</h3>
            <p className="mt-2 text-gray-600">Bilgisayar mühendisliği programımız, yazılım geliştirme, donanım tasarımı ve veritabanı yönetimi gibi geniş bir alanı kapsar.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Elektrik ve Elektronik Mühendisliği</h3>
            <p className="mt-2 text-gray-600">Elektrik ve elektronik mühendisliği programı, enerji sistemleri, elektronik devreler ve haberleşme sistemleri gibi alanlarda derinlemesine bilgi sağlar.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Makine Mühendisliği</h3>
            <p className="mt-2 text-gray-600">Makine mühendisliği, termodinamik, mekanik tasarım ve üretim süreçlerine dair kapsamlı bir eğitim sunar.</p>
          </div>
          {/* Diğer akademik programlar */}
        </div>
      </section>

      {/* Fakülte ve Bölümler */}
      <section className="mt-16 px-6 py-12 bg-lightGray">
        <h2 className="text-3xl font-bold text-center text-darkBlue">Fakülteler ve Bölümler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Mühendislik Fakültesi</h3>
            <p className="mt-2 text-gray-600">Mühendislik Fakültemiz, yüksek teknolojiye dayalı mühendislik eğitimini, dünya standartlarında sunmaktadır.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">İktisadi ve İdari Bilimler Fakültesi</h3>
            <p className="mt-2 text-gray-600">İktisadi ve idari bilimler fakültemiz, ekonomi, işletme, finans ve yönetim gibi birçok alanda eğitim sunmaktadır.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Fen Fakültesi</h3>
            <p className="mt-2 text-gray-600">Fen Fakültemiz, temel bilimler ve araştırmalar alanında lider bir eğitim sunarak öğrencilerimize derinlemesine bilgi kazandırmaktadır.</p>
          </div>
          {/* Diğer fakülteler */}
        </div>
      </section>

      {/* Öğrenciler için Kaynaklar */}
      <section className="mt-16 px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-darkBlue">Öğrenciler İçin Kaynaklar</h2>
        <p className="mt-6 text-lg text-gray-700 text-center">
          Üniversitemiz, öğrencilerine araştırma yapabilecekleri, projeler geliştirebilecekleri ve kendi akademik gelişimlerini sürdürebilecekleri birçok imkan sunmaktadır.
        </p>
        <div className="mt-6 text-center">
          <a href="#resources" className="text-blue-500 hover:underline">Daha Fazla Bilgi İçin</a>
        </div>
      </section>
    </div>
  );
};

export default Academics;
