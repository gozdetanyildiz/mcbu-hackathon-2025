// src/pages/News.jsx
import React from 'react';

const News = () => {
  return (
    <div className="bg-light">
      {/* Hero Bölümü */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('/path-to-news-image.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Haberler</h1>
        </div>
      </div>

      {/* Haber Kartları */}
      <section className="mt-16 px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Kart Örneği */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="news-image-1.jpg" alt="Haber" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Haber Başlığı</h3>
              <p className="mt-2 text-gray-600">Kısa haber açıklaması burada yer alacak.</p>
              <a href="#" className="mt-4 text-blue-500">Devamını oku</a>
            </div>
          </div>
          {/* Diğer haber kartları burada yer alacak */}
        </div>
      </section>
    </div>
  );
};

export default News;
