import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { newsId } = useParams();

  // Haber detaylarını statik olarak belirliyoruz.
  const newsDetails = {
    'mcbu-turkiye-karate-sampiyonasi': {
      title: "MCBÜ Öğrencileri Türkiye Karate Şampiyonası'nda Büyük Başarı",
      content: "MCBÜ öğrencileri Türkiye Karate Şampiyonası'nda büyük bir başarıya imza attılar. Detaylar burada yer alacak."
    },
    'karate-heysani': {
      title: "Manisa Celal Bayar Üniversitesi'nde Türkiye Üniversiteler Karate Şampiyonası Heyecanı Başladı",
      content: "Manisa Celal Bayar Üniversitesi'nde Türkiye Üniversiteler Karate Şampiyonası heyecanı başladı. Katılımcılar büyük ödüller için mücadele ediyor."
    },
    'nevruz-kutlama': {
      title: "Rektör Vekili Prof. Dr. Ahmet Çetin Nevruz Kutlamalarına Katıldı",
      content: "Rektör Vekili Prof. Dr. Ahmet Çetin, üniversitemizdeki nevruz kutlamalarına katıldı ve önemli konuşmalar yaptı."
    },
    'haber-1': {
      title: "Yeni Eklenen Haber Başlığı 1",
      content: "Bu haber hakkında daha fazla bilgi edinmek için detayları okuyabilirsiniz."
    },
    'haber-2': {
      title: "Yeni Eklenen Haber Başlığı 2",
      content: "Bu haber hakkında daha fazla bilgi edinmek için detayları okuyabilirsiniz."
    },
    'haber-3': {
      title: "Yeni Eklenen Haber Başlığı 3",
      content: "Bu haber hakkında daha fazla bilgi edinmek için detayları okuyabilirsiniz."
    },
    '1': {
      title: "Mühendislik Fakültesi Mezunlar Buluşması Gerçekleşti",
      content: "Mühendislik Fakültesi mezunları büyük bir buluşmada bir araya geldi. Etkinlik detayları burada yer alacak."
    },
    '2': {
      title: "Sanayi-Üniversite İş Birliğini Güçlendiren Protokoller",
      content: "MCBÜ ve Manisa OSB, sanayi-üniversite iş birliğini geliştiren önemli protokoller imzaladı."
    },
    '3': {
      title: "Rektör Kibar, Manisa Valisi Özkan’ı Ağırladı",
      content: "Rektör Prof. Dr. Rana Kibar, Manisa Valisi Vahdettin Özkan’ı makamında ağırladı."
    }
  };

  const news = newsDetails[newsId] || {};

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold">{news.title}</h1>
      <p className="mt-4">{news.content}</p>
    </div>
  );
};

export default NewsDetail;
