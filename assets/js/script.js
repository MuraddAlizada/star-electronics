/**
 * Star Electronics - Main JavaScript
 * Premium interactions and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initCounterAnimation();
    initScrollReveal();
    initBackToTop();
    initContactForm();
    initActiveNavLink();
    initSearchFunctionality();
    initDropdownMenus();
});

/**
 * Header scroll effect
 */
function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('mobile-menu-close');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!toggle || !menu) return;
    
    // Function to close menu
    function closeMenu() {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Open/close menu with toggle button
    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu with close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (!link.classList.contains('dropdown-toggle')) {
                closeMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Initialize dropdown menus
    initDropdownMenu();
}

/**
 * Dropdown menu functionality
 */
function initDropdownMenu() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!toggle || !menu) return;
        
        // Check if mobile (window width <= 992px)
        function isMobile() {
            return window.innerWidth <= 992;
        }
        
        // Toggle dropdown on click (only on desktop)
        toggle.addEventListener('click', function(e) {
            // Don't toggle on mobile - menu should always be visible
            if (isMobile()) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
        
        // Close dropdown when clicking a menu item
        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                dropdown.classList.remove('active');
            });
        });
        
        // Hover support for desktop
        if (window.innerWidth > 768) {
            dropdown.addEventListener('mouseenter', function() {
                dropdown.classList.add('active');
            });
            
            dropdown.addEventListener('mouseleave', function() {
                dropdown.classList.remove('active');
            });
        }
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Counter animation for statistics
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            function updateCounter() {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }
            
            updateCounter();
        });
    }
    
    function checkCounters() {
        if (animated) return;
        
        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;
        
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            animated = true;
            animateCounters();
        }
    }
    
    window.addEventListener('scroll', checkCounters, { passive: true });
    checkCounters(); // Initial check
}

/**
 * Scroll reveal animations
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.product-card, .why-card, .contact-card, .badge-item');
    
    // Add reveal class to elements
    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${index % 4 * 0.1}s`;
    });
    
    function reveal() {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                el.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', reveal, { passive: true });
    reveal(); // Initial check
}

/**
 * Back to top button
 */
function initBackToTop() {
    const button = document.getElementById('back-to-top');
    if (!button) return;
    
    function toggleButton() {
        if (window.pageYOffset > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleButton, { passive: true });
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Contact form handling with Formspree integration
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    // Character counter for message textarea
    const messageField = form.querySelector('#message');
    const messageCount = document.getElementById('message-count');
    if (messageField && messageCount) {
        messageField.addEventListener('input', function() {
            messageCount.textContent = this.value.length;
        });
    }
    
    // Real-time validation
    const nameField = form.querySelector('#name');
    const phoneField = form.querySelector('#phone');
    const emailField = form.querySelector('#email');
    const productTypeField = form.querySelector('#product-type');
    
    // Name validation
    if (nameField) {
        nameField.addEventListener('blur', function() {
            validateField(this, 'name-error', {
                required: true,
                minLength: 2,
                maxLength: 50,
                pattern: /^[A-Za-zƏəĞğİiÖöŞşÜüÇç\s]+$/
            }, 'Ad minimum 2, maksimum 50 simvol olmalıdır və yalnız hərflər ehtiva edə bilər.');
        });
    }
    
    // Phone validation
    if (phoneField) {
        phoneField.addEventListener('blur', function() {
            validateField(this, 'phone-error', {
                required: true,
                pattern: /^[\d\s\+\-\(\)]{9,20}$/
            }, 'Düzgün telefon nömrəsi daxil edin (minimum 9 simvol).');
        });
    }
    
    // Email validation (optional)
    if (emailField) {
        emailField.addEventListener('blur', function() {
            if (this.value) {
                validateField(this, 'email-error', {
                    required: false,
                    pattern: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i
                }, 'Düzgün email ünvanı daxil edin.');
            } else {
                clearFieldError('email-error');
            }
        });
    }
    
    // Product type validation
    if (productTypeField) {
        productTypeField.addEventListener('change', function() {
            validateField(this, 'product-type-error', {
                required: true
            }, 'Zəhmət olmasa məhsul növü seçin.');
        });
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearAllErrors();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate all fields
        let isValid = true;
        
        // Validate name
        if (!validateField(nameField, 'name-error', {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: /^[A-Za-zƏəĞğİiÖöŞşÜüÇç\s]+$/
        }, 'Ad minimum 2, maksimum 50 simvol olmalıdır və yalnız hərflər ehtiva edə bilər.')) {
            isValid = false;
        }
        
        // Validate phone
        if (!validateField(phoneField, 'phone-error', {
            required: true,
            pattern: /^[\d\s\+\-\(\)]{9,20}$/
        }, 'Düzgün telefon nömrəsi daxil edin (minimum 9 simvol).')) {
            isValid = false;
        }
        
        // Validate email (optional)
        if (emailField && emailField.value) {
            if (!validateField(emailField, 'email-error', {
                required: false,
                pattern: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i
            }, 'Düzgün email ünvanı daxil edin.')) {
                isValid = false;
            }
        }
        
        // Validate product type
        if (!validateField(productTypeField, 'product-type-error', {
            required: true
        }, 'Zəhmət olmasa məhsul növü seçin.')) {
            isValid = false;
        }
        
        if (!isValid) {
            showNotification('Zəhmət olmasa formu düzgün doldurun.', 'error');
            // Scroll to first error
            const firstError = form.querySelector('.form-error:not(:empty)');
            if (firstError) {
                firstError.closest('.form-group').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Submit to Formspree
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Göndərilir...</span>';
        submitBtn.disabled = true;
        
        // Submit form data to Formspree
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showNotification('Müraciətiniz uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.', 'success');
                form.reset();
                if (messageCount) messageCount.textContent = '0';
                // Scroll to top of form
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                return response.json().then(data => {
                    throw new Error(data.error || 'Form göndərilmədi. Zəhmət olmasa yenidən cəhd edin.');
                });
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showNotification(error.message || 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin və ya bizimlə birbaşa əlaqə saxlayın.', 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

/**
 * Validate form field
 */
function validateField(field, errorId, rules, errorMessage) {
    if (!field) return false;
    
    const errorElement = document.getElementById(errorId);
    let isValid = true;
    
    // Required validation
    if (rules.required && !field.value.trim()) {
        isValid = false;
    }
    
    // Min length validation
    if (isValid && rules.minLength && field.value.trim().length < rules.minLength) {
        isValid = false;
    }
    
    // Max length validation
    if (isValid && rules.maxLength && field.value.trim().length > rules.maxLength) {
        isValid = false;
    }
    
    // Pattern validation
    if (isValid && rules.pattern && field.value.trim() && !rules.pattern.test(field.value.trim())) {
        isValid = false;
    }
    
    // Show/hide error
    if (!isValid && errorElement) {
        errorElement.textContent = errorMessage;
        field.classList.add('error');
    } else if (errorElement) {
        errorElement.textContent = '';
        field.classList.remove('error');
    }
    
    return isValid;
}

/**
 * Clear field error
 */
function clearFieldError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
        const field = errorElement.closest('.form-group')?.querySelector('input, select, textarea');
        if (field) field.classList.remove('error');
    }
}

/**
 * Clear all form errors
 */
function clearAllErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(error => {
        error.textContent = '';
        const field = error.closest('.form-group')?.querySelector('input, select, textarea');
        if (field) field.classList.remove('error');
    });
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" aria-label="Bağla">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        max-width: 400px;
        padding: 16px 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #166534, #15803d)' : type === 'error' ? 'linear-gradient(135deg, #991b1b, #b91c1c)' : '#1a1a1a'};
        border: 1px solid ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#d4af37'};
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        animation: slideIn 0.3s ease;
        color: white;
        font-family: 'Montserrat', sans-serif;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
        }
        .notification-content i {
            font-size: 20px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            opacity: 0.7;
            cursor: pointer;
            padding: 4px;
            transition: opacity 0.2s;
        }
        .notification-close:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/**
 * Active navigation link based on scroll position
 */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveLink() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink(); // Initial check
}

/**
 * Parallax effect for hero section
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (!hero || !heroContent) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight * 0.5);
        }
    }, { passive: true });
}

/**
 * Product card hover effects
 */
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});

/**
 * Lazy loading for images (future use)
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Typing effect for hero title (optional enhancement)
 */
function initTypingEffect() {
    const element = document.querySelector('.hero-title-line');
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 1000);
}

/**
 * Search Functionality
 */
function initSearchFunctionality() {
    const searchToggle = document.getElementById('search-toggle');
    const searchBox = document.getElementById('search-box');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchResults = document.getElementById('search-results');
    
    if (!searchToggle || !searchBox || !searchInput) return;
    
    // Product data for search (all products from homepage)
    const allProducts = [
        { name: 'WiFi Kameralar', description: 'Simsiz bağlantı ilə asanlıqla quraşdırın. Telefondan canlı izləyin.', link: 'products/cameras/index.html', category: 'Kameralar' },
        { name: '4G Sim Kartlı Kameralar', description: 'WiFi bağlantıya ehtiyac yoxdur. Sim kartla mobil şəbəkə üzərindən işləyir.', link: 'products/cameras/4g.html', category: 'Kameralar' },
        { name: 'Solar Panelli Kameralar', description: 'Günəş enerjisi ilə işləyən müstəqil kameralar. Kabelsiz quraşdırma.', link: 'products/cameras/panel.html', category: 'Kameralar' },
        { name: 'Video Damafonlar', description: 'Qapınızdakı hər kəsi görün. Telefondan cavab verin.', link: 'products/damafonlar/video.html', category: 'Damafonlar' },
        { name: 'Mənzil Damafonları', description: 'Çox mənzilli binalar üçün peşəkar damafon sistemləri.', link: 'products/damafonlar/menzil.html', category: 'Damafonlar' },
        { name: 'Ağıllı Damafonlar', description: 'Smart ev sisteminizə inteqrasiya. Səslə idarə edin.', link: 'products/damafonlar/agilli.html', category: 'Damafonlar' },
        { name: 'Ev Kinoteatrı Proyektorları', description: 'Evinizi kinoteatra çevirin. Yüksək keyfiyyətli görüntü.', link: 'products/projectors/ev.html', category: 'Proyektorlar' },
        { name: 'Ofis Proyektorları', description: 'Təqdimatlar və iclaslar üçün peşəkar proyektorlar.', link: 'products/projectors/ofis.html', category: 'Proyektorlar' },
        { name: 'Mini Proyektorlar', description: 'Kompakt və portativ. Hər yerə aparın.', link: 'products/projectors/mini.html', category: 'Proyektorlar' },
        { name: 'Android TV Boxlar', description: 'Android OS ilə smart funksiyalar. Minlərlə kanal və tətbiq.', link: 'products/tv-boxes/android.html', category: 'TV Boxlar' },
        { name: '4K Ultra HD TV Boxlar', description: '4K Ultra HD görüntü ilə yüksək keyfiyyətli TV Boxlar.', link: 'products/tv-boxes/4k.html', category: 'TV Boxlar' },
        { name: 'Pro & Premium TV Boxlar', description: 'Peşəkar performans üçün premium TV Boxlar. 8GB+ RAM.', link: 'products/tv-boxes/pro.html', category: 'TV Boxlar' },
        { name: 'TV Kronşteynləri', description: 'Divar üçün möhkəm və etibarlı tutucular.', link: 'products/tv-accessories/kronstein.html', category: 'TV Aksesuarları' },
        { name: 'HDMI Kabellər', description: 'Yüksək sürətli HDMI 2.1 kabellər. 8K dəstəyi.', link: 'products/tv-accessories/kabeller.html', category: 'TV Aksesuarları' },
        { name: 'Krosna Aparatları', description: 'Peyklərdən gələn siqnalları qəbul və dekod edən cihazlar.', link: 'products/tv-accessories/krosna.html', category: 'TV Aksesuarları' },
        { name: 'Pultlar & Aksesuarlar', description: 'Simsiz klaviaturalar, TV pultları və digər Bluetooth aksesuarlar.', link: 'products/tv-accessories/pultlar.html', category: 'TV Aksesuarları' }
    ];
    
    // Toggle search box
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            searchBox.classList.toggle('active');
            if (searchBox.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }
    
    // Close search box
    if (searchClose) {
        searchClose.addEventListener('click', function(e) {
            e.stopPropagation();
            searchBox.classList.remove('active');
            searchInput.value = '';
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
        });
    }
    
    // Close search box when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
            searchBox.classList.remove('active');
            searchInput.value = '';
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
        }
    });
    
    // Close search box on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
            searchInput.value = '';
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
        }
    });
    
    // Search functionality
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim().toLowerCase();
            
            searchTimeout = setTimeout(() => {
                if (query.length < 2) {
                    searchResults.classList.remove('active');
                    searchResults.innerHTML = '';
                    return;
                }
                
                // Search products
                const filteredProducts = allProducts.filter(product => {
                    return product.name.toLowerCase().includes(query) ||
                           product.description.toLowerCase().includes(query) ||
                           product.category.toLowerCase().includes(query);
                });
                
                // Display results
                if (filteredProducts.length > 0) {
                    searchResults.innerHTML = filteredProducts.map(product => `
                        <a href="${product.link}" class="search-results-item">
                            <h4>${highlightMatch(product.name, query)}</h4>
                            <p>${product.category} - ${product.description}</p>
                        </a>
                    `).join('');
                    searchResults.classList.add('active');
                } else {
                    searchResults.innerHTML = '<div class="search-results-empty">Məhsul tapılmadı</div>';
                    searchResults.classList.add('active');
                }
            }, 300);
        });
        
        // Prevent form submission on Enter
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const firstResult = searchResults.querySelector('.search-results-item');
                if (firstResult) {
                    firstResult.click();
                }
            }
        });
    }
}

/**
 * Highlight search matches in text
 */
function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Console branding
console.log('%c★ Star Electronics', 'color: #d4af37; font-size: 24px; font-weight: bold;');
console.log('%cPremium Elektronika və Təhlükəsizlik Sistemləri', 'color: #888; font-size: 12px;');

