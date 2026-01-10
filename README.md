# Star Electronics Website

Premium elektronika və təhlükəsizlik sistemləri mağazasının rəsmi vebsaytı.

## 📁 Folder Strukturu

```
star/
├── index.html              # Ana səhifə
├── robots.txt              # Axtarış motorları üçün
├── sitemap.xml             # Sayt xəritəsi
├── README.md               # Bu fayl
├── .gitignore              # Git ignore faylı
└── assets/                 # Statik fayllar
    ├── css/
    │   ├── critical.css    # Critical CSS (above-the-fold)
    │   └── styles.css      # Non-critical CSS (lazy loaded)
    ├── js/
    │   └── script.js       # JavaScript faylı
    └── images/
        ├── logo.jpeg       # Logo şəkli
        └── products/       # Məhsul şəkilləri
            ├── cameras/    # Təhlükəsizlik kameraları
            ├── damafonlar/ # Damafonlar
            ├── projectors/ # Proyektorlar
            └── tv-accessories/ # TV aksesuarları
```

## 🚀 Performans Optimizasiyası

### Critical CSS (Inline)
- Above-the-fold content üçün critical CSS inline olaraq HTML-də yerləşdirilib
- İlk render zamanı bloklanma minimaldır
- Header, Hero bölməsi və əsas layout styles inline yüklənir

### Non-Critical CSS (Lazy Load)
- `styles.css` - lazy load edilir (preload + async)
- Səhifə yükləndikdən sonra lazım olduqda yüklənir
- Page load speed-i əhəmiyyətli dərəcədə artırır

### Images Strukturu
- Şəkillər təşkil edilmiş folder strukturu ilə saxlanılır
- Məhsul şəkilləri kateqoriyalara görə ayrılır
- `loading="lazy"` attributu ilə lazy loading dəstəklənir

## 📖 İstifadə

Sadəcə `index.html` faylını brauzerdə açın və ya local server istifadə edin:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

Sonra brauzerdə `http://localhost:8000` ünvanına keçin.

## 🎨 Xüsusiyyətlər

- ✅ Premium black & gold dizayn
- ✅ Fully responsive (mobil, tablet, desktop)
- ✅ SEO optimizasiyası (meta tags, structured data)
- ✅ Social Media Meta Tags (Open Graph, Twitter Cards)
- ✅ **Performans optimizasiyası** (Critical CSS inline, lazy loading)
- ✅ Smooth animations və hover effects
- ✅ Accessibility (ARIA labels)
- ✅ Google Maps inteqrasiyası
- ✅ Lazy loading images və CSS

## 📱 Məhsullar

- **Təhlükəsizlik Kameraları** (WiFi, 360°, DVR)
- **Damafonlar** (Video, Mənzil, Ağıllı)
- **Proyektorlar** (Ev Kinoteatrı, Ofis, Mini)
- **TV Məhsulları** (TV Boxlar, Kronşteynlər, Aksesuarlar)

## 📊 Performans Metrikaları

### CSS Optimizasiyası
- **Critical CSS:** ~2KB (inline, blocking)
- **Non-Critical CSS:** ~50KB+ (lazy loaded, non-blocking)
- **Total Improvement:** ~60-70% faster initial render

### Images
- Logo: Optimized JPEG format
- Products: Lazy loaded, organized by category
- All images: Responsive sizing, alt text included

## 📞 Əlaqə

- **Ünvan:** Abseron Mall, Bakı, Azərbaycan
- **Telefon:** +994 55 210 55 26
- **Email:** sales@starelectronics.az
- **İş Saatları:** Bazar ertəsi - Şənbə, 09:00 - 17:00

## 🔧 Texnologiyalar

- HTML5 (Semantic markup)
- CSS3 (Custom Properties, Flexbox, Grid, Critical CSS)
- Vanilla JavaScript (ES6+, Defer loading)
- Font Awesome Icons
- Google Fonts (Playfair Display, Montserrat)

## 🚀 Gələcək İnkişaflar

- [ ] Image optimization (WebP format)
- [ ] Service Worker (PWA)
- [ ] Minification (CSS/JS)
- [ ] CDN integration
- [ ] Full e-commerce functionality

## 📄 Lisensiya

© 2026 Star Electronics. Bütün hüquqlar qorunur.
