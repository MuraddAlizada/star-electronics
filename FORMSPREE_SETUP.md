# Formspree Setup Təlimatı

## Formspree Quraşdırması

### Addım 1: Formspree Hesabı Yarat
1. https://formspree.io/ səhifəsinə gedin
2. "Get Started for Free" düyməsini klikləyin
3. Email ünvanınızla qeydiyyatdan keçin

### Addım 2: Yeni Form Yarat
1. Dashboard-da "New Form" düyməsini klikləyin
2. Form adını daxil edin: "Star Electronics Contact Form"
3. Form ID-ni kopyalayın (məsələn: `xrgpqnkw`)

### Addım 3: Form ID-ni Əlavə Et
1. `index.html` faylını açın
2. Form action atributunu tapın:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. `YOUR_FORM_ID` yerinə öz Formspree Form ID-nizi yazın:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/xrgpqnkw" method="POST">
   ```

### Addım 4: Email Konfiqurasiyası
1. Formspree dashboard-da form ayarlarına daxil olun
2. "Email Notifications" bölməsində öz email ünvanınızı təyin edin
3. Email formatını seçin (HTML və ya Plain Text)

### Addım 5: Form Sahələrinin Adları
Formda istifadə olunan field adları:
- `name` - Ad
- `phone` - Telefon
- `email` - Email (optional)
- `product-type` - Məhsul növü
- `message` - Mesaj (optional)

### Addım 6: Test Etmə
1. Səhifəni yükləyin
2. Formu doldurun və göndərin
3. Formspree dashboard-da gəlmə müraciətləri yoxlayın
4. Email qutusunu yoxlayın

### Alternativ: EmailJS (Əgər Formspree istifadə etmək istəmirsinizsə)

1. https://www.emailjs.com/ səhifəsinə gedin
2. Pulsuz hesab yaradın
3. Email service bağlayın (Gmail, Outlook və s.)
4. Template yaradın
5. JavaScript kodunu `assets/js/script.js`-də yeniləyin

```javascript
// EmailJS example (EmailJS SDK lazımdır)
emailjs.send('service_id', 'template_id', {
    name: data.name,
    phone: data.phone,
    email: data.email,
    product_type: data['product-type'],
    message: data.message
})
```

### Qeydlər:
- Formspree pulsuz planda ayda 50 müraciət limiti var
- Hədd aşılırsa, premium plana keçmək və ya EmailJS istifadə etmək lazımdır
- Form validation artıq JavaScript-də təmin olunub
- Email göndərmə real vaxtda işləyir

