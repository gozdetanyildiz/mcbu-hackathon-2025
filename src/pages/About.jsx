import React from 'react';

const About = () => {
  return (
    <div className="bg-light">
      {/* Hero Bölümü */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('/path-to-about-image.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Hakkımızda</h1>
        </div>
      </div>

      {/* Üniversite Tanıtımı */}
      <section className="mt-16 px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-darkBlue">Manisa Celal Bayar Üniversitesi</h2>
        <p className="mt-6 text-lg text-gray-700 text-center">
          Manisa Celal Bayar Üniversitesi, çağdaş eğitim anlayışı ve yenilikçi araştırmaları ile Türkiye’nin önde gelen üniversitelerinden biridir. Misyonumuz, öğrencilerimizi geleceğe hazırlamak ve onları toplumda lider olarak yetiştirmektir. Üniversitemiz, akademik mükemmeliyet, bilimsel araştırmalar ve toplumsal katkı konularında yüksek standartlara ulaşmayı hedeflemektedir.
        </p>
      </section>

      {/* Misyon ve Vizyon */}
      <section className="mt-16 px-6 py-12 bg-lightGray">
        <h2 className="text-3xl font-bold text-center text-darkBlue">Misyonumuz ve Vizyonumuz</h2>
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Misyonumuz</h3>
            <p className="mt-2 text-gray-600">
              Üniversitemizin misyonu, öğrencilerine bilimsel bilgi, eleştirel düşünme becerisi ve topluma hizmet bilincini kazandırmaktır. Ayrıca, bilimsel araştırmalara katkı sağlayarak ülkemizin gelişimine hizmet etmeyi amaçlıyoruz.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Vizyonumuz</h3>
            <p className="mt-2 text-gray-600">
              Celal Bayar Üniversitesi olarak vizyonumuz, global anlamda tanınan ve liderlik eden bir üniversite olmayı sürdürmektir. Eğitimde kaliteyi artırarak, toplumsal sorunlara çözüm önerileri getirmeyi hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="mt-16 px-6 py-12 bg-light">
        <h2 className="text-3xl font-bold text-center text-darkBlue">İletişim Bilgilerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Adres</h3>
            <p className="mt-2 text-gray-600">
              Manisa Celal Bayar Üniversitesi<br />
              Manisa, Türkiye
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Telefon</h3>
            <p className="mt-2 text-gray-600">
              +90 236 123 45 67
            </p>
          </div>
        </div>
      </section>

      {/* Harita Entegrasyonu */}
      <section className="mt-16 px-6 py-12 bg-lightGray">
        <h2 className="text-3xl font-bold text-center text-darkBlue">Bizi Ziyaret Edin</h2>
        <div className="mt-6">
          {/* Google Maps Embed API */}
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/place/Manisa+Celal+Bayar+%C3%9Cniversitesi/@38.6743963,27.3072481,17z/data=!3m1!4b1!4m6!3m5!1s0x14b9846159b4f467:0xf80361ea5d300f13!8m2!3d38.6743921!4d27.309823!16s%2Fg%2F11g6wft9nz?hl=tr&entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
