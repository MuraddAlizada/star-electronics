/**
 * Products Data from tap.az
 * Məhsul məlumatlarını burada saxlayırıq
 */

const productsData = {
    cameras: [
        {
            id: 1,
            name: "WiFi Kamera",
            description: "Simsiz bağlantı ilə asanlıqla quraşdırın. Telefondan canlı izləyin.",
            price: "Qiymət üçün zəng edin",
            image: "assets/images/products/cameras/wifi-camera.jpg",
            tapazUrl: "https://tap.az/viplar/...", // tap.az linki
            features: ["1080p HD", "Gecə Görüntüsü", "Mobil Tətbiq"],
            badge: "Populyar"
        }
        // Buraya tap.az-dan məhsulları əlavə edə bilərsiniz
    ],
    damafonlar: [
        {
            id: 1,
            name: "Video Damafon",
            description: "Qapınızdakı hər kəsi görün. Telefondan cavab verin.",
            price: "Qiymət üçün zəng edin",
            image: "assets/images/products/damafonlar/video-damafon.jpg",
            tapazUrl: "https://tap.az/viplar/...",
            features: ["HD Video", "İki Tərəfli Səs", "WiFi Bağlantı"],
            badge: "Ən Çox Satılan"
        }
    ],
    projectors: [
        {
            id: 1,
            name: "Android Proyektor",
            description: "Yüksək keyfiyyətli görüntü ilə Android funksiyaları.",
            price: "Qiymət üçün zəng edin",
            image: "assets/images/products/projectors/android-projector.jpg",
            tapazUrl: "https://tap.az/viplar/...",
            features: ["Android OS", "4K Dəstəyi", "WiFi Bağlantı"],
            badge: "Yeni"
        }
    ],
    tvAccessories: [
        {
            id: 1,
            name: "Smart TV Box",
            description: "Televizorunuzu ağıllı funksiyalarla təchiz edən cihaz.",
            price: "Qiymət üçün zəng edin",
            image: "assets/images/products/tv-accessories/smart-tv-box.jpg",
            tapazUrl: "https://tap.az/viplar/...",
            features: ["Android 13", "4K Dəstəyi", "Minlərlə Kanal"],
            badge: "Populyar"
        },
        {
            id: 2,
            name: "TV Kronşteyn",
            description: "Divar üçün möhkəm və etibarlı tutucular.",
            price: "Qiymət üçün zəng edin",
            image: "assets/images/products/tv-accessories/tv-bracket.jpg",
            tapazUrl: "https://tap.az/viplar/...",
            features: ["32-75 düym", "Bucaq tənzimi", "Möhkəm Material"],
            badge: null
        }
    ]
};

/**
 * Product Card HTML yaradır
 */
function createProductCard(product) {
    const badgeHTML = product.badge ? `<div class="product-badge ${product.badge.toLowerCase().replace(' ', '-')}">${product.badge}</div>` : '';
    
    const featuresHTML = product.features.map(feature => 
        `<span><i class="fas fa-check"></i> ${feature}</span>`
    ).join('');
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-placeholder" style="display: none;">
                    <i class="fas fa-image"></i>
                </div>
                ${badgeHTML}
                <div class="product-overlay">
                    <a href="#contact" class="btn btn-sm">Qiymət Al</a>
                    ${product.tapazUrl ? `<a href="${product.tapazUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="margin-top: 10px;">tap.az-da Bax</a>` : ''}
                </div>
            </div>
            <div class="product-content">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-features">
                    ${featuresHTML}
                </div>
            </div>
        </div>
    `;
}

/**
 * Məhsulları render edir
 */
function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const products = productsData[category] || [];
    if (products.length === 0) return;
    
    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Səhifə yükləndikdə məhsulları render et
document.addEventListener('DOMContentLoaded', function() {
    // Əgər JavaScript ilə dinamik yükləmə istəsəniz, bu funksiyaları çağırın
    // renderProducts('cameras', 'cameras-products-grid');
    // renderProducts('damafonlar', 'damafonlar-products-grid');
    // renderProducts('projectors', 'projectors-products-grid');
    // renderProducts('tvAccessories', 'tv-accessories-products-grid');
});

