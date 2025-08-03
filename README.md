# Robokodkids Web Sitesi

Robotik kodlama atölyesi için modern, responsive web sitesi.

## Özellikler

- 🎨 Apple.com tarzında modern tasarım
- 📱 Responsive (mobil uyumlu) yapı
- ⚡ Hızlı yükleme süreleri
- 🔧 Kolay içerik yönetimi
- 🎯 SEO optimizasyonu

## Teknolojiler

- React 18
- Vite
- Tailwind CSS
- Shadcn/UI
- Lucide Icons

## Kurulum

### Gereksinimler
- Node.js 18+
- npm veya pnpm

### Yerel Geliştirme
```bash
# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu başlat
pnpm run dev

# Tarayıcıda http://localhost:5173 açılacak
```

### Production Build
```bash
# Build oluştur
pnpm run build

# Build'i test et
pnpm run preview
```

## İçerik Düzenleme

Web sitesinin tüm içeriği `src/config/content.js` dosyasında bulunur. Bu dosyayı düzenleyerek:

- İletişim bilgilerini
- Yaş grupları bilgilerini
- Ekipman açıklamalarını
- Hakkımızda metnini
- Diğer tüm içerikleri

kolayca değiştirebilirsiniz.

Detaylı rehber için `ICERIK_DUZENLEME_REHBERI.md` dosyasına bakın.

## Deployment

### Netlify (Önerilen)
1. GitHub'a kod yükleyin
2. Netlify'da "New site from Git" seçin
3. Repository'yi bağlayın
4. Build ayarları:
   - Build command: `pnpm run build`
   - Publish directory: `dist`

### Vercel
1. GitHub'a kod yükleyin
2. Vercel'da "New Project" seçin
3. Repository'yi import edin
4. Otomatik deployment başlayacak

### Manuel Hosting
1. `pnpm run build` çalıştırın
2. `dist` klasörü içeriğini hosting sağlayıcınıza yükleyin

## Özel Domain Bağlama

Hosting sağlayıcınızda domain ayarlarından `www.robokodkids.com` domain'ini ekleyin.

DNS ayarları için hosting rehberine bakın.

## Destek

Teknik destek için:
- İçerik düzenleme: `ICERIK_DUZENLEME_REHBERI.md`
- Hosting kurulumu: `robokodkids_hosting_rehberi.md`

## Lisans

Bu proje Robokodkids için özel olarak geliştirilmiştir.

