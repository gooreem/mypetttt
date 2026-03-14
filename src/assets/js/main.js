/**
 * ثيم mypetttt - الملف الرئيسي للجافاسكريبت
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // تهيئة جميع السليدرز
    // ========================================
    if (typeof Swiper !== 'undefined') {
        
        // سليدر سطح المكتب (سكشن 1)
        initDesktopSliders();
        
        // سليدر المنتجات (سكشن 9)
        initProductSliders();
        
        // سليدر العلامات التجارية (سكشن 7)
        initBrandSliders();
    }
    
    // ========================================
    // معالجة أزرار الفيديو (سكشن 5)
    // ========================================
    initVideoPlayers();
    
    // ========================================
    // معالجة مودال الفلترة (سكشن 0)
    // ========================================
    initFilterModals();
    
    // ========================================
    // إضافة للسلة (Ajax)
    // ========================================
    initAddToCartButtons();
});

/**
 * تهيئة سليدرات سطح المكتب
 */
function initDesktopSliders() {
    document.querySelectorAll('.desktop-slider').forEach((slider, index) => {
        new Swiper(slider, {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    });
}

/**
 * تهيئة سليدرات المنتجات
 */
function initProductSliders() {
    document.querySelectorAll('.product-slider').forEach((slider) => {
        new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
            }
        });
    });
}

/**
 * تهيئة سليدرات العلامات التجارية
 */
function initBrandSliders() {
    document.querySelectorAll('.brands-slider').forEach((slider) => {
        new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 }
            }
        });
    });
}

/**
 * تهيئة مشغلات الفيديو
 */
function initVideoPlayers() {
    document.querySelectorAll('.play-video-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const videoId = this.dataset.videoId;
            const container = this.closest('.video-container');
            const poster = container.querySelector('img');
            const player = container.querySelector('.video-player');
            
            if (poster) poster.style.display = 'none';
            this.style.display = 'none';
            
            player.classList.remove('hidden');
            const iframe = player.querySelector('iframe');
            if (iframe) {
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            }
        });
    });
}

/**
 * تهيئة مودالات الفلترة
 */
function initFilterModals() {
    const filterBtn = document.querySelector('.mobile-filter-toggle');
    const modal = document.getElementById('mobileFilterModal');
    const closeBtn = document.querySelector('.close-filter-modal');
    
    if (filterBtn && modal) {
        filterBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            });
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * تهيئة أزرار الإضافة للسلة
 */
function initAddToCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // هنا يمكن إضافة كود Ajax للإضافة للسلة
            showNotification('تمت إضافة المنتج للسلة', 'success');
        });
    });
}

/**
 * عرض إشعار للمستخدم
 */
function showNotification(message, type = 'info') {
    // يمكن تطوير هذه الدالة لعرض إشعارات جميلة
    alert(message); // مؤقتاً
}