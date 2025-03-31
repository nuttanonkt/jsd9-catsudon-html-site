/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header'); 
    if (this.scrollY >= 50) { 
        header.classList.add('scroll-header'); 
    } else {
        header.classList.remove('scroll-header'); 
    }
}

window.addEventListener('scroll', scrollHeader); 

/*=============== HOME SEARCH BAR ===============*/
function toggleSearch(search, button) {
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)

    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle("show-search")
    })
}

toggleSearch("search-bar", "search-button");

/*=============== SWIPER HOME CATEGORY RATINGS ===============*/
var swiperCategoryRatings = new Swiper(".home__category-ratings", {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    speed: 800,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function() {
            var activeSlide = this.slides[this.activeIndex];
            this.slides.forEach(slide => slide.classList.remove('swiper-slide-active'));
            activeSlide.classList.add('swiper-slide-active');
        }
    }
});


/*=============== SWIPER HOME MAIN IMAGES ===============*/
var swiperHomeMainImages = new Swiper(".home__main-images", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    }
});

/*=============== SWIPER HOME SECONDARY IMAGES ===============*/
var swiperSecondaryImage = new Swiper(".secondary__image", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    }
});

/*=============== SWIPER SHOP CATEGORY===============*/
var swipercategory = new Swiper(".category", { 
    spaceBetween: 20, 
    grabCursor: true, 
    // centeredSlides: true, 
    slidesPerView: "auto", 
    loop: true, 

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: { 
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

/*=============== FARM FRESH PRODUCTS ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(heart => {
        heart.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("heart-active");
        });
    });
});

/*=============== FARM FRESH PRODUCTS ===============*/
var farmFreshSwiper = new Swiper(".farm-fresh__cards", {
    spaceBetween: 20, 
    grabCursor: true, 
    slidesPerView: "auto", 
    loop: true, 

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*=============== SWIPER FRESH & FLAVORFUL ===============*/
var swiperFreshFlavorfulImages = new Swiper(".fresh-flavorful__images", {
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    }
});

const freshFlavorfulItem = document.querySelectorAll('.fresh-flavorful__item');

freshFlavorfulItem.forEach((item) => {
    const freshFlavorfulHeader = item.querySelector('.fresh-flavorful__header');

    freshFlavorfulHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);
        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const freshFlavorfulContent = item.querySelector('.section__content');

    if (item.classList.contains('accordion-open')) {
        freshFlavorfulContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        freshFlavorfulContent.style.height = freshFlavorfulContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};

/*=============== CLIENT REVIEW ===============*/

const swiper = new Swiper('.client-review__wrapper', {
    slidesPerView: "auto",
    spaceBetween: 20, 
    centeredSlides: true, 
    loop: true,
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});