// Robokodkids Web Sitesi İçerik Yönetimi
// Bu dosyayı düzenleyerek web sitesinin içeriğini kolayca değiştirebilirsiniz

export const siteConfig = {
  // Site Genel Bilgileri
  siteName: "Robokodkids",
  siteDescription: "Fethiye Robotik Kodlama Atölyesi",
  
  // İletişim Bilgileri
  contact: {
    address: "Cumhuriyet, Dispanser Cd. No:27, 48303 Fethiye/Muğla",
    phone: "+90 505 577 97 18",
    email: "info@robokodkids.com",
    instagram: "https://www.instagram.com/robokodkids/",
    instagramHandle: "@robokodkids"
  },

  // Ana Sayfa Hero Bölümü
  hero: {
    badge: "6 yaşından itibaren",
    title: "Geleceğin",
    titleHighlight: "Teknoloji",
    titleEnd: "Liderleri",
    description: "Çocuklarınız Yapay Zeka, Robotik, Kodlama, 3D tasarım ve elektronik projelerle teknolojinin büyülü dünyasını keşfetsin.",
    primaryButton: "Hemen Başla",
    secondaryButton: "Daha Fazla Bilgi",
    stats: [
      { number: "500+", label: "Mutlu Öğrenci" },
      { number: "4", label: "Yaş Grubu" },
      { number: "10+", label: "Teknoloji" }
    ]
  },

  // Yaş Grupları
  ageGroups: [
    {
      age: "6-7 Yaş",
      description: "Temel robotik ve kodlama kavramları",
      color: "bg-blue-500",
      details: "Bu yaş grubunda çocuklar Lego Education setleri ile oyun temelli öğrenme ile robotik dünyasına adım atar."
    },
    {
      age: "8-9 Yaş", 
      description: "Lego Educaiton ile mühendislik, Scratch ile görsel programlama, 3d tasarım, Basit Elektrikli Devreler",
      color: "bg-green-500",
      details: "Lego Education Spike, Mindstorm, Scratch programlama dili ile çocuklar kendi oyunlarını ve animasyonlarını oluşturur."
    },
    {
      age: "10-11 Yaş",
      description: "Arduino ve ileri düzey elektronik projeler, GDevelop ile oyun programlama", 
      color: "bg-purple-500",
      details: "Arduino kartları ile elektronik devreler kurarak gerçek projeler geliştirir. GDevelop ile profosyonel oyun tasarımı yaparlar"
    },
    {
      age: "12-14 Yaş",
      description: "İleri seviye robotik ve Python, Blender ile 3d tasarım",
      color: "bg-orange-500", 
      details: "Python programlama dili ve ileri robotik projelerle profesyonel beceriler kazanır. Profosyonellerin kullandığı blender 3d tasarım uygulamasını öğrenirler"
    }
  ],

  // Ekipmanlar
  equipment: [
    {
      name: "3D Yazıcı",
      description: "Çocuklar kendi tasarladıkları objeleri 3D yazıcı ile hayata geçirir.",
      features: ["3D tasarım", "Yaratıcılık", "Mühendislik"]
    },
    {
      name: "Arduino Setleri", 
      description: "Elektronik devreler ve sensörlerle interaktif projeler geliştirme.",
      features: ["Elektronik", "Programlama", "Sensörler"]
    },
    {
      name: "LEGO Education",
      description: "LEGO WeDo, Mindstorms ve Spike Prime ile robotik öğrenme.",
      features: ["Robotik", "Mühendislik", "Problem çözme"]
    },
    {
      name: "Makerspace",
      description: "Yaratıcı projeler için tam donanımlı atölye ortamı.",
      features: ["Yaratıcılık", "İşbirliği", "Proje geliştirme"]
    }
  ],

  // Hakkımızda Bölümü
  about: {
    badge: "Hakkımızda",
    title: "Teknoloji ile",
    titleHighlight: "Büyüyen",
    titleEnd: "Nesil", 
    description: "Robokodkids olarak, çocukların teknoloji ile tanışmasını ve geleceğin becerilerini kazanmasını sağlıyoruz. Okul sonrası ve hafta sonu programlarımızla çocuklar eğlenerek öğrenir.",
    features: [
      {
        title: "Küçük Gruplar",
        description: "En fazla 10 kişilik gruplarla kişiselleştirilmiş eğitim",
        icon: "Users"
      },
      {
        title: "Esnek Saatler", 
        description: "Okul sonrası ve hafta sonu programları",
        icon: "Calendar"
      },
      {
        title: "Uygulamalı Öğrenme",
        description: "Teoriden çok pratik ve proje odaklı eğitim", 
        icon: "Zap"
      }
    ]
  },

  // Programlar Bölümü
  programs: {
    badge: "Eğitim Programları",
    title: "Yaş Gruplarına Özel",
    titleHighlight: "Eğitimler",
    description: "Her yaş grubuna uygun özel olarak tasarlanmış müfredatımızla çocuklar kendi seviyelerinde öğrenir."
  },

  // Ekipmanlar Bölümü
  equipmentSection: {
    badge: "Teknoloji Parkımız", 
    title: "Son Teknoloji",
    titleHighlight: "Ekipmanlar",
    description: "3D yazıcılardan Arduino setlerine, LEGO Education'dan lazer kesiciye kadar geniş ekipman yelpazemiz."
  },

  // İletişim Bölümü
  contactSection: {
    badge: "İletişim",
    title: "Hemen",
    titleHighlight: "Başlayın", 
    description: "Çocuğunuzun teknoloji yolculuğu için bizimle iletişime geçin.",
    ctaButton: "Ücretsiz Deneme Dersi"
  },

  // Footer
  footer: {
    description: "Geleceğin teknoloji liderlerini yetiştiriyoruz.",
    copyright: "© 2025 Robokodkids. Tüm hakları saklıdır."
  }
}

// Görseller - Bu dosya yollarını değiştirmeyin
export const images = {
  hero: "/src/assets/rt6VHzRJG2CI.jpg",
  robotics: "/src/assets/UWlCEtH4mnBM.jpg", 
  coding: "/src/assets/9V97JxXs2cB5.jpg",
  workshop: "/src/assets/4FetNTAezeun.jpg",
  lego: "/src/assets/dk8iMCb5ZqTM.png",
  arduino: "/src/assets/eZGxPmYNBA0v.jpg",
  makerspace: "/src/assets/EKZtw9Wwga3t.jpg",
  kids: "/src/assets/aCdhYH0NCUjL.jpg"
}

