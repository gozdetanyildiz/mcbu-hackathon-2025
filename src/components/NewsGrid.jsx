import NewsCard from './NewsCard'; // Haber kartı bileşeni

const NewsGrid = () => {
  const newsData = [
    {
      title: "Mühendislik Fakültesi Mezunlar Buluşması Gerçekleşti",
      description: "Mühendislik Fakültesi mezunları, büyük bir buluşmada bir araya geldi. Etkinlik detayları.",
      imageUrl: "/assets/campus-life-news.jpg",
      link: "/news/1", // Detay sayfası için uygun linki burada belirtiyoruz
    },
    {
      title: "Sanayi-Üniversite İş Birliğini Güçlendiren Protokoller",
      description: "MCBÜ ve Manisa OSB, sanayi-üniversite iş birliğini geliştiren önemli protokoller imzaladı.",
      imageUrl: "/assets/1.jpg",
      link: "/news/2",
    },
    {
      title: "Rektör Kibar, Manisa Valisi Özkan’ı Ağırladı",
      description: "Rektör Prof. Dr. Rana Kibar, Manisa Valisi Vahdettin Özkan’ı makamında ağırladı.",
      imageUrl: "/assets/edu-news.jpg",
      link: "/news/3",
    },
    {
      title: "MCBÜ Öğrencileri Üniversitesi Türkiye Karate Şampiyonası'nda Büyük Başarı",
      description: "Açıklama ve detaylar burada yer alacak. Önemli gelişmeleri takip edin.",
      imageUrl: "/assets/2.jpg", // Yeni görseli ekledik
      link: "/news/mcbu-turkiye-karate-sampiyonasi",
    },
    {
      title: "Manisa Celal Bayar Üniversitesi'nde Türkiye Üniversiteler Karate Şampiyonası Heyecanı Başladı",
      description: "Bu haber açıklaması önemli bir konuya dair bilgi verecek.",
      imageUrl: "/assets/3.jpg", // Yeni görsel
      link: "/news/karate-heysani",
    },
    {
      title: "Rektör Vekili Prof. Dr. Ahmet Çetin Nevruz Kutlamalarına Katıldı",
      description: "Bu haber son gelişmeleri kaçırmamanız için önemlidir.",
      imageUrl: "/assets/4.jpg", // Yeni görsel
      link: "/news/nevruz-kutlama",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          description={news.description}
          imageUrl={news.imageUrl}
          link={news.link}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
