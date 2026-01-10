# Google Analytics Quraşdırması

## Google Analytics 4 (GA4) Quraşdırması

### Addım 1: Google Analytics Hesabı Yarat
1. https://analytics.google.com/ səhifəsinə gedin
2. "Start measuring" düyməsini klikləyin
3. Account adı daxil edin: "Star Electronics"
4. Property adı: "Star Electronics Website"
5. Ölkə: Azerbaijan
6. Sənaye kateqoriyası: Retail/E-commerce
7. Biznes ölçüsü: Seçin
8. Məqsədlər: "Get baseline reports" və "Examine traffic" seçin

### Addım 2: Data Stream Yarat
1. "Web" platformunu seçin
2. Website URL: `https://starelectronics.az` (və ya test URL)
3. Stream adı: "Star Electronics Web"
4. Measurement ID-ni kopyalayın (format: `G-XXXXXXXXXX`)

### Addım 3: Tracking Kodu Əlavə Et
1. `index.html` faylını açın
2. Google Analytics kodunu tapın (sətir 57-63 ətrafında):
   ```html
   <!-- Google Analytics (Replace G-XXXXXXXXXX with your tracking ID) -->
   <!-- 
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
   </script>
   -->
   ```
3. Comment işarələrini silin (`<!--` və `-->`)
4. `G-XXXXXXXXXX` yerinə öz Measurement ID-nizi yazın:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-1234567890"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-1234567890');
   </script>
   ```

### Addım 4: Bütün Səhifələrə Əlavə Et
- `index.html` - ✅ hazırdır (comment içində)
- `products/cameras/index.html` - Əlavə edilməlidir
- `products/damafonlar/index.html` - Əlavə edilməlidir
- `products/projectors/index.html` - Əlavə edilməlidir
- `products/tv-boxes/index.html` - Əlavə edilməlidir
- `products/tv-accessories/index.html` - Əlavə edilməlidir
- `404.html` - Əlavə edilməlidir

### Addım 5: Test Etmə
1. Səhifəni yükləyin
2. Google Analytics Real-time reports-da yoxlayın
3. Bir neçə səhifəni ziyarət edin
4. Real-time görüntü olmalıdır

### Qeydlər:
- Google Analytics pulsuzdur
- Data 24-48 saat sonra tam görünür
- Real-time data dərhal görünür
- Privacy policy-ə GDPR uyğunluq əlavə edilməlidir

