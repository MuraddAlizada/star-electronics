# tap.az-dan Məhsulları Sayta Əlavə Etmək

Bu sənəd tap.az mağazanızdan məhsulları Star Electronics vebsaytına necə əlavə edəcəyinizi izah edir.

## 📋 Addım 1: tap.az-dan Məhsul Məlumatlarını Çıxarmaq

1. [tap.az/shops/star_electronika](https://tap.az/shops/star_electronika) səhifəsinə daxil olun
2. Hər məhsul üçün aşağıdakı məlumatları toplayın:
   - **Məhsul adı**
   - **Qiymət** (və ya "Qiymət üçün zəng edin")
   - **Təsvir** (qısa)
   - **Şəkil URL** (sağ klik → "Copy image address")
   - **tap.az linki** (məhsul səhifəsinin URL-i)
   - **Xüsusiyyətlər** (3-4 əsas xüsusiyyət)

## 📸 Addım 2: Şəkilləri Yükləmək

### Seçim 1: tap.az-dan Şəkilləri Yükləmək (Tövsiyə olunmur - copyright problemi)

```bash
# Şəkilləri yükləmək üçün curl istifadə edin
curl -o assets/images/products/cameras/wifi-camera.jpg "https://tap.az/images/..."
```

### Seçim 2: Öz Şəkillərinizi İstifadə Etmək (Tövsiyə olunur)

1. Öz məhsul şəkillərinizi hazırlayın
2. Şəkilləri optimize edin (800x600px, max 300KB)
3. Müvafiq folder-a yükləyin:
   - `assets/images/products/cameras/` - Kameralar üçün
   - `assets/images/products/damafonlar/` - Damafonlar üçün
   - `assets/images/products/projectors/` - Proyektorlar üçün
   - `assets/images/products/tv-accessories/` - TV aksesuarları üçün

## 💻 Addım 3: Məhsulları Əlavə Etmək

### Metod 1: JavaScript ilə (Dinamik)

`assets/js/products.js` faylını açın və məhsulları `productsData` obyektinə əlavə edin:

```javascript
const productsData = {
    cameras: [
        {
            id: 1,
            name: "WiFi IP Kamera 1080p",
            description: "Simsiz bağlantı ilə asanlıqla quraşdırın. Telefondan canlı izləyin.",
            price: "120 AZN",
            image: "assets/images/products/cameras/wifi-camera.jpg",
            tapazUrl: "https://tap.az/viplar/12345678",
            features: ["1080p HD", "Gecə Görüntüsü", "Mobil Tətbiq", "WiFi"],
            badge: "Populyar"
        },
        // Daha çox məhsul əlavə edin...
    ],
    // Digər kateqoriyalar...
};
```

### Metod 2: HTML ilə (Statik) - Tövsiyə olunur

`index.html` faylını açın və məhsul kartlarını əlavə edin. Mövcud məhsul kartları kimi:

```html
<div class="product-card">
    <div class="product-image">
        <img src="assets/images/products/cameras/wifi-camera.jpg" 
             alt="WiFi IP Kamera 1080p" 
             loading="lazy">
        <div class="product-badge">Populyar</div>
        <div class="product-overlay">
            <a href="#contact" class="btn btn-sm">Qiymət Al</a>
            <a href="https://tap.az/viplar/12345678" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn btn-sm" 
               style="margin-top: 10px;">
                tap.az-da Bax
            </a>
        </div>
    </div>
    <div class="product-content">
        <h4 class="product-name">WiFi IP Kamera 1080p</h4>
        <p class="product-desc">Simsiz bağlantı ilə asanlıqla quraşdırın. Telefondan canlı izləyin.</p>
        <div class="product-price">120 AZN</div>
        <div class="product-features">
            <span><i class="fas fa-check"></i> 1080p HD</span>
            <span><i class="fas fa-check"></i> Gecə Görüntüsü</span>
            <span><i class="fas fa-check"></i> Mobil Tətbiq</span>
        </div>
    </div>
</div>
```

## 📝 Məhsul Template

Hər məhsul üçün aşağıdakı struktur istifadə edin:

```javascript
{
    id: 1,                    // Unikal ID
    name: "Məhsul Adı",       // tap.az-dan götürün
    description: "Təsvir...", // Qısa təsvir (1-2 cümlə)
    price: "120 AZN",         // Qiymət və ya "Qiymət üçün zəng edin"
    image: "path/to/image.jpg", // Şəkil path-i
    tapazUrl: "https://tap.az/...", // tap.az linki
    features: [               // 3-4 əsas xüsusiyyət
        "Xüsusiyyət 1",
        "Xüsusiyyət 2",
        "Xüsusiyyət 3"
    ],
    badge: "Populyar"         // "Populyar", "Yeni", "Ən Çox Satılan", null
}
```

## 🎨 Badge Seçimləri

- `"Populyar"` - Qızılı rəng
- `"Yeni"` - Yaşıl rəng  
- `"Ən Çox Satılan"` - Qızılı rəng
- `"Pro"` - Mavi rəng
- `null` - Badge göstərilmir

## 📊 Məhsul Kateqoriyaları

Məhsulları aşağıdakı kateqoriyalara bölün:

1. **cameras** - Təhlükəsizlik kameraları (WiFi, 360°, PTZ, DVR)
2. **damafonlar** - Damafonlar (Video, Mənzil, Ağıllı)
3. **projectors** - Proyektorlar (Ev, Ofis, Mini)
4. **tvAccessories** - TV aksesuarları (TV Box, Kronşteyn, Kabellər, Pultlar)

## ⚠️ Qeyd

- tap.az-dan şəkilləri birbaşa istifadə etməyin (copyright problemi)
- Öz şəkillərinizi çəkib istifadə edin
- tap.az linkini "tap.az-da Bax" düyməsi ilə əlaqələndirin
- Məhsul məlumatlarını düzgün tərcümə edin (azərbaycan dilində)

## 🔗 Faydalı Linklər

- tap.az mağaza: https://tap.az/shops/star_electronika
- Şəkil optimizasiya: https://tinypng.com/
- Image compressor: https://compressor.io/

