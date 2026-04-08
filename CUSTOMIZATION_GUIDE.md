/* 
 * ===== ADVANCED CUSTOMIZATION GUIDE =====
 * This file contains code snippets for extending functionality
 * Copy these into your main files as needed
 */

// =====================================================
// ADVANCED JAVASCRIPT FEATURES
// =====================================================

// 1. ADD SEARCH FUNCTIONALITY
// Add this to your HTML: <input class="search-box" placeholder="Search images...">
/*
handleSearch() {
    const searchBox = document.querySelector('.search-box');
    const originalData = [...galleryData];
    
    searchBox.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        this.filteredData = originalData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        this.currentPage = 1;
        this.render();
        this.setupPagination();
    });
}
*/

// 2. ADD IMAGE RATINGS/STARS
/*
const galleryData = [
    {
        id: 1,
        title: "Mountain Peak",
        category: "nature",
        rating: 4.5,  // Add rating field
        description: "...",
        image: "...",
        alt: "..."
    }
];

// In createGalleryItem():
createGalleryItem(item, index) {
    const stars = this.generateStars(item.rating);
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.alt}" class="gallery-item-image">
        <div class="gallery-item-overlay">
            <h3 class="gallery-item-title">${item.title}</h3>
            <div class="gallery-item-stars">${stars}</div>
            <span class="gallery-item-category">${this.capitalizeCategory(item.category)}</span>
        </div>
        <div class="gallery-item-icon">
            <i class="fas fa-heart"></i>
        </div>
    `;
    div.addEventListener('click', () => this.openLightbox(index));
    return div;
}

generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}
*/

// 3. ADD FAVORITES/LIKES
/*
class GalleryController {
    constructor() {
        // ... existing code ...
        this.favorites = this.loadFavorites();
    }

    toggleFavorite(itemId) {
        if (this.favorites.includes(itemId)) {
            this.favorites = this.favorites.filter(id => id !== itemId);
        } else {
            this.favorites.push(itemId);
        }
        localStorage.setItem('galleryFavorites', JSON.stringify(this.favorites));
    }

    loadFavorites() {
        const saved = localStorage.getItem('galleryFavorites');
        return saved ? JSON.parse(saved) : [];
    }

    isFavorite(itemId) {
        return this.favorites.includes(itemId);
    }
}

// Add button in createGalleryItem:
const favoriteIcon = document.createElement('button');
favoriteIcon.className = 'favorite-btn';
favoriteIcon.innerHTML = this.isFavorite(item.id) ? 
    '<i class="fas fa-heart"></i>' : 
    '<i class="far fa-heart"></i>';
favoriteIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    this.toggleFavorite(item.id);
    this.render();
});
*/

// 4. ADD LAZY LOADING
/*
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// In HTML: <img data-src="image.jpg" src="placeholder.jpg">
*/

// 5. ADD SLIDESHOW MODE
/*
startSlideshow() {
    this.slideshowInterval = setInterval(() => {
        this.nextImage();
    }, 3000); // Change image every 3 seconds
}

stopSlideshow() {
    clearInterval(this.slideshowInterval);
}
*/

// 6. ADD DOWNLOAD FUNCTIONALITY
/*
downloadImage(imageUrl, title) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title}.jpg`;
    link.click();
}

// Add download button in lightbox:
<button class="lightbox-download" onclick="gallery.downloadImage(currentImageUrl, currentTitle)">
    <i class="fas fa-download"></i> Download
</button>
*/

// 7. ADD SOCIAL SHARE BUTTONS
/*
shareImage(imageUrl, title) {
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(title)}`
    };
    return urls;
}
*/

// =====================================================
// ADVANCED CSS FEATURES
// =====================================================

/* 
 * 1. ADD IMAGE FILTERS CSS
 */
/*
.gallery-item.filter-grayscale .gallery-item-image {
    filter: grayscale(100%);
}

.gallery-item.filter-sepia .gallery-item-image {
    filter: sepia(100%);
}

.gallery-item.filter-blur .gallery-item-image {
    filter: blur(5px);
}

.gallery-item.filter-brightness .gallery-item-image {
    filter: brightness(1.2);
}

.gallery-item.filter-invert .gallery-item-image {
    filter: invert(100%);
}
*/

/*
 * 2. ADD DARK MODE CSS
 */
/*
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #ffffff;
    }

    .gallery {
        background: #242424;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .gallery-item-overlay {
        background: linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(40, 40, 40, 0.9));
    }

    .filter-btn {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.2);
    }
}

body.dark-mode {
    background: #1a1a1a;
    color: #ffffff;
}
*/

/*
 * 3. ADD BLUR ON HOVER EFFECT
 */
/*
.gallery-item-blur:hover .gallery-item-image {
    filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.3);
}
*/

/*
 * 4. ADD FLIP CARD ANIMATION
 */
/*
.gallery-item.flip-card {
    perspective: 1000px;
}

.gallery-item.flip-card:hover .gallery-item-image {
    transform: rotateY(180deg);
}
*/

/*
 * 5. ADD PARALLAX EFFECT
 */
/*
document.addEventListener('scroll', () => {
    const galleryItems = document.querySelectorAll('.gallery-item-image');
    galleryItems.forEach((item) => {
        const scrollPosition = window.pageYOffset;
        item.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});
*/

// =====================================================
// EXTENDED HTML FEATURES
// =====================================================

/*
HTML ADDITIONS FOR ADVANCED FEATURES:

<!-- Search Bar -->
<div class="search-section">
    <input type="text" class="search-box" placeholder="🔍 Search images...">
</div>

<!-- Sort Options -->
<div class="sort-section">
    <label for="sortBy">Sort by:</label>
    <select id="sortBy" class="sort-select">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="name">Name (A-Z)</option>
        <option value="rating">Rating</option>
    </select>
</div>

<!-- View Options -->
<div class="view-options">
    <button class="view-btn grid-view active" title="Grid View">
        <i class="fas fa-th"></i>
    </button>
    <button class="view-btn list-view" title="List View">
        <i class="fas fa-list"></i>
    </button>
</div>

<!-- Slideshow Button -->
<button class="slideshow-btn">
    <i class="fas fa-play"></i> Start Slideshow
</button>

<!-- Download Button in Lightbox -->
<button class="lightbox-download">
    <i class="fas fa-download"></i>
</button>

<!-- Share Buttons in Lightbox -->
<div class="lightbox-share">
    <button class="share-btn facebook">
        <i class="fab fa-facebook"></i>
    </button>
    <button class="share-btn twitter">
        <i class="fab fa-twitter"></i>
    </button>
    <button class="share-btn pinterest">
        <i class="fab fa-pinterest"></i>
    </button>
</div>
*/

// =====================================================
// PERFORMANCE OPTIMIZATION
// =====================================================

/*
1. IMAGE OPTIMIZATION
   - Use WebP format for smaller file sizes
   - Implement srcset for responsive images
   - Use picture element for art direction

<picture>
    <source srcset="image-small.webp" media="(max-width: 600px)" type="image/webp">
    <source srcset="image-small.jpg" media="(max-width: 600px)">
    <source srcset="image-large.webp" type="image/webp">
    <img src="image-large.jpg" alt="Gallery image">
</picture>

2. LAZY LOADING
   - Load images only when needed
   - Use Intersection Observer API
   - Reduces initial page load time

3. MINIFICATION
   - Minify CSS and JavaScript for production
   - Use tools like UglifyJS or Terser
   - Reduce bundle size

4. CACHING
   - Use service workers for offline support
   - Implement browser caching headers
   - Cache frequently accessed data

5. CODE SPLITTING
   - Load gallery data from JSON file
   - Split large JavaScript files
   - Load JavaScript on demand
*/

// =====================================================
// ACCESSIBILITY ENHANCEMENTS
// =====================================================

/*
1. ARIA LABELS
<button class="filter-btn" data-filter="nature" aria-label="Filter by Nature">
    <i class="fas fa-leaf"></i> Nature
</button>

2. KEYBOARD NAVIGATION
- Tab through gallery items
- Enter to open lightbox
- Arrow keys in lightbox
- Escape to close

3. SCREEN READER SUPPORT
<img src="image.jpg" alt="Descriptive text about the image">

4. HIGH CONTRAST MODE
@media (prefers-contrast: more) {
    /* Increase contrast */
}

5. FOCUS VISIBLE
button:focus-visible {
    outline: 3px solid #667eea;
    outline-offset: 2px;
}
*/

// =====================================================
// TESTING & DEBUGGING
// =====================================================

/*
1. BROWSER CONSOLE DEBUGGING
console.log('Gallery initialized');
console.table(galleryData);
console.time('searchPerformance');
// ... code to test ...
console.timeEnd('searchPerformance');

2. PERFORMANCE MONITORING
// Measure Core Web Vitals
web-vitals.getCLS(console.log);
web-vitals.getFID(console.log);
web-vitals.getLCP(console.log);

3. UNIT TESTING (with Jest)
test('filter changes gallery items', () => {
    gallery.handleFilterClick('nature');
    expect(gallery.filteredData.length).toBeGreaterThan(0);
});

4. E2E TESTING (with Cypress)
describe('Gallery', () => {
    it('opens lightbox on image click', () => {
        cy.visit('index.html');
        cy.get('.gallery-item').first().click();
        cy.get('#lightbox').should('have.class', 'active');
    });
});
*/

// =====================================================
// END OF ADVANCED CUSTOMIZATION GUIDE
// =====================================================
