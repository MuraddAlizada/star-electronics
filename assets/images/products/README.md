# Products Images Folder

Bu folder məhsul şəkillərini saxlamaq üçün istifadə olunur.

## Folder Strukturu

```
products/
├── cameras/          # Təhlükəsizlik kameraları şəkilləri
│   ├── wifi-camera.jpg
│   ├── 360-camera.jpg
│   └── dvr-system.jpg
├── damafonlar/       # Damafonlar şəkilləri
│   ├── video-damafon.jpg
│   ├── apartment-damafon.jpg
│   └── smart-damafon.jpg
├── projectors/       # Proyektorlar şəkilləri
│   ├── home-theater.jpg
│   ├── office-projector.jpg
│   └── mini-projector.jpg
└── tv-accessories/   # TV aksesuarları şəkilləri
    ├── tv-box.jpg
    ├── tv-bracket.jpg
    ├── hdmi-cable.jpg
    └── tv-remote.jpg
```

## Şəkil Tövsiyələri

- **Format:** JPEG və ya WebP (yüksək keyfiyyət üçün)
- **Ölçü:** 800x600px minimum, 1200x900px tövsiyə olunur
- **Ölçü:** Hər şəkil maksimum 300KB-dan çox olmamalıdır
- **Optimizasiya:** Şəkilləri yükləməzdən əvvəl sıxışdırın
- **Adlandırma:** `kebab-case` formatında (məsələn: `wifi-camera.jpg`)

## HTML-də İstifadə

```html
<img src="assets/images/products/cameras/wifi-camera.jpg" 
     alt="WiFi Kamera" 
     loading="lazy"
     width="800" 
     height="600">
```

