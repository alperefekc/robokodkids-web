# Robokodkids Web Sitesi İçerik Düzenleme Rehberi

Bu rehber, Robokodkids web sitesinin içeriğini kolayca nasıl düzenleyebileceğinizi açıklar.

## İçerik Dosyası Konumu

Web sitesinin tüm içeriği şu dosyada bulunur:
```
src/config/content.js
```

## İçerik Düzenleme Adımları

### 1. İletişim Bilgilerini Güncelleme

```javascript
contact: {
  address: "Gerçek adresinizi buraya yazın",
  phone: "+90 XXX XXX XX XX", // Telefon numaranızı yazın
  email: "info@robokodkids.com", // E-posta adresinizi yazın
  instagram: "https://www.instagram.com/robokodkids/",
  instagramHandle: "@robokodkids"
}
```

### 2. Ana Sayfa Hero Bölümünü Düzenleme

```javascript
hero: {
  badge: "6 yaşından itibaren", // Üst rozet metni
  title: "Geleceğin", // Ana başlık başlangıcı
  titleHighlight: "Teknoloji", // Vurgulanan kelime
  titleEnd: "Liderleri", // Ana başlık sonu
  description: "Açıklama metninizi buraya yazın...", // Alt açıklama
  primaryButton: "Hemen Başla", // Ana buton metni
  secondaryButton: "Daha Fazla Bilgi", // İkinci buton metni
  stats: [
    { number: "500+", label: "Mutlu Öğrenci" }, // İstatistikleri güncelleyin
    { number: "4", label: "Yaş Grubu" },
    { number: "10+", label: "Teknoloji" }
  ]
}
```

### 3. Yaş Gruplarını Düzenleme

```javascript
ageGroups: [
  {
    age: "6-7 Yaş", // Yaş aralığı
    description: "Açıklama metni", // Kısa açıklama
    color: "bg-blue-500", // Renk (değiştirmeyin)
    details: "Detaylı açıklama metni" // Gelecekte kullanılacak
  },
  // Diğer yaş grupları...
]
```

### 4. Ekipman Bilgilerini Güncelleme

```javascript
equipment: [
  {
    name: "3D Yazıcı", // Ekipman adı
    description: "Açıklama metni", // Açıklama
    features: ["Özellik 1", "Özellik 2", "Özellik 3"] // Özellikler
  },
  // Diğer ekipmanlar...
]
```

### 5. Hakkımızda Bölümünü Düzenleme

```javascript
about: {
  badge: "Hakkımızda",
  title: "Teknoloji ile",
  titleHighlight: "Büyüyen", 
  titleEnd: "Nesil",
  description: "Atölyeniz hakkında açıklama metni...",
  features: [
    {
      title: "Özellik Başlığı",
      description: "Özellik açıklaması",
      icon: "Users" // İkon adı (değiştirmeyin)
    },
    // Diğer özellikler...
  ]
}
```

## Değişiklikleri Uygulama

1. `src/config/content.js` dosyasını düzenleyin
2. Dosyayı kaydedin
3. Web sitesi otomatik olarak güncellenecektir

## Önemli Notlar

- **Görseller**: Görsel dosya yollarını değiştirmeyin
- **Renkler**: CSS sınıf adlarını (bg-blue-500 gibi) değiştirmeyin
- **İkonlar**: İkon adlarını değiştirmeyin
- **Yapı**: JavaScript nesne yapısını bozmayın

## Yardım

Eğer bir sorun yaşarsanız:
1. Dosyayı kaydetmeden önce yedek alın
2. Sadece metin içeriklerini değiştirin
3. Teknik kısımlara dokunmayın

## Örnek Değişiklik

**Önce:**
```javascript
description: "Çocuklarınız robotik kodlama, 3D tasarım ve elektronik projelerle teknolojinin büyülü dünyasını keşfetsin."
```

**Sonra:**
```javascript
description: "Atölyemizde çocuklar robotik, kodlama ve 3D tasarım ile geleceğin teknolojilerini öğrenir."
```

Bu şekilde kolayca içeriği güncelleyebilirsiniz!

