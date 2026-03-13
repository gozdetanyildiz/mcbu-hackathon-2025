const InfoBar = () => {
    return (
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Bilgi Alanı</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-darkBlue text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Öğrenciler</h3>
              <p>Öğrenciler için tüm gerekli bilgiler</p>
              <a href="#" className="mt-4 text-primary hover:text-light">Detaylar</a>
            </div>
            <div className="bg-darkBlue text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Akademisyenler</h3>
              <p>Akademik personel için kaynaklar ve duyurular</p>
              <a href="#" className="mt-4 text-primary hover:text-light">Detaylar</a>
            </div>
            <div className="bg-darkBlue text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Mezunlar</h3>
              <p>Mezunlar için etkinlikler ve haberler</p>
              <a href="#" className="mt-4 text-primary hover:text-light">Detaylar</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default InfoBar;
  