// HOME PAGE SLIDER

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const indicatorContainer = document.createElement("div");
indicatorContainer.classList.add("dots-container");
document.querySelector(".slider-container").appendChild(indicatorContainer);

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); 
    dot.setAttribute("data-index", i);
    dot.addEventListener("click", () => {
        showSlide(i);
    });
    indicatorContainer.appendChild(dot);
}

function showSlide(index) {
    currentIndex = index;

    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;

    const offset = -currentIndex * 100 + "%";
    document.querySelector(".slider").style.transform = "translateX(" + offset + ")";

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

setInterval(() => {
    showSlide((currentIndex + 1) % totalSlides);
}, 5000); 


// SLIDER CONTROLS

function nextSlide() {
    if (currentIndex < totalSlides - 1) { 
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex > 0) { 
        showSlide(currentIndex - 1);
    }
}

showSlide(currentIndex);


// NEW ARRIVAL PRODUCTS SLIDER

    const products = [
        { img: "assets/img-1.jpg", name: "Knitted Joggers" },
        { img: "assets/img-3.jpg", name: "Full Sleeve" },
        { img: "assets/img-4.jpg", name: "Active T-Shirts" },
        { img: "assets/img-2.jpg", name: "Urban Shirts" },
        { img: "assets/img-5.jpg", name: "Casual Hoodie" },
        { img: "assets/img-6.jpg", name: "Denim Jacket" },
        { img: "assets/img-7.jpg", name: "Classic Polo" },
        { img: "assets/img-9.jpg", name: "Sportswear" }
    ];

    const productWrapper = document.getElementById("productWrapper");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentSlide = 0;
    let productsPerSlide = 4; 

    function updateSlides() {
        let screenWidth = window.innerWidth;
        if (screenWidth < 480) {
            productsPerSlide = 1;
        } else if (screenWidth < 980) {
            productsPerSlide = 2;
        } else {
            productsPerSlide = 4;
        }

        productWrapper.innerHTML = "";

        let totalSlides = Math.ceil(products.length / productsPerSlide);
        for (let i = 0; i < totalSlides; i++) {
            let slide = document.createElement("div");
            slide.classList.add("slide");
            slide.style.display = "flex";
            slide.style.width = "100%";
            slide.style.justifyContent = "space-between";
            slide.style.flexShrink = "0";

            for (let j = 0; j < productsPerSlide; j++) {
                let index = i * productsPerSlide + j;
                if (index < products.length) {
                    let productDiv = document.createElement("div");
                    productDiv.classList.add("product");
                    productDiv.style.width = `${100 / productsPerSlide - 3}%`;
                    productDiv.innerHTML = `
                        <img src="${products[index].img}" alt="">
                        <h3>${products[index].name}</h3>
                    `;
                    slide.appendChild(productDiv);
                }
            }
            productWrapper.appendChild(slide);
        }
        currentSlide = 0;
        updateSlider();
    }

    function updateSlider() {
        productWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }


// NEW ARRIVAL PRODUCTS SLIDER CONTROLS

    nextBtn.addEventListener("click", () => {
        let totalSlides = Math.ceil(products.length / productsPerSlide);
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    window.addEventListener("resize", updateSlides);
    updateSlides();


// MENS PRODUCTS LIST

    let Menproducts = [
        { id: 1, name: "Shirts", image: "./assets/img-5.jpg" },
        { id: 2, name: "Printed T-Shirts", image: "./assets/img-6.jpg" },
        { id: 3, name: "Plain T-Shirts", image: "./assets/img-7.jpg" },
        { id: 4, name: "Polo T-Shirts", image: "./assets/img-8.jpg" },
        { id: 5, name: "Hoodies & Sweatshirt", image: "./assets/img-9.jpg" },
        { id: 6, name: "Jeans", image: "./assets/img-10.jpg" },
        { id: 7, name: "Activewear", image: "./assets/img-1.jpg" },
        { id: 8, name: "Boxers", image: "./assets/img-11.jpg" }
    ];

    let Menul = document.querySelector("section#categoryMen div.bottom ul.products");

    if (Menul) {
        Menproducts.forEach(Menproduct => {
            let li = document.createElement("li");
            li.innerHTML = `<div class="productImage" onclick="goto(${Menproduct.id})">
                                <img src="${Menproduct.image}" alt="Product Image">
                            </div>
                            <div class="productDetails">
                                <div class="left">
                                    <h4>${Menproduct.name}</h4>
                                    <a href="javascript:void(0)" onclick="goto(${Menproduct.id})">Explore Now!</a>
                                </div>
                                <div class="right"><a href="javascript:void(0)" onclick="goto(${Menproduct.id})"><img src="./assets/arrow-right.svg" alt="rightArrow-Btn"></a></div>
                            </div>`;
            Menul.appendChild(li);
        });
    }


// WOMENS PRODUCTS LIST

let Womenproducts = [
    { id: 9, name: "Hoodies & Sweetshirt", image: "./assets/img-12.jpg" },
    { id: 10, name: "Coats & Parkas", image: "./assets/img-13.jpg" },
    { id: 11, name: "Tees & T-Shirt", image: "./assets/img-14.jpg" },
    { id: 12, name: "Boxers", image: "./assets/img-15.jpg" },
];
let Womenul = document.querySelector("section#categoryWomen div.bottom ul.products");
if (Womenul) {
    Womenproducts.forEach(Womenproduct => {
        let li = document.createElement("li");
        li.innerHTML = `<div class="productImage" onclick="goto(${Womenproduct.id})">
                            <img src="${Womenproduct.image}" alt="Product Image">
                        </div>
                        <div class="productDetails">
                            <div class="left">
                                <h4>${Womenproduct.name}</h4>
                                <a href="javascript:void(0)" onclick="goto(${Womenproduct.id})">Explore Now!</a>
                            </div>
                            <div class="right"><a href="javascript:void(0)" onclick="goto(${Womenproduct.id})"><img src="./assets/arrow-right.svg" alt="rightArrow-Btn"></a></div>
                        </div>`;
        Womenul.appendChild(li);
    });
}


// HEADER MENU CLICK ACTIVE

const menuItems = document.querySelectorAll("header ul.middle li a");

menuItems.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); 

        menuItems.forEach(item => item.parentElement.classList.remove("active"));

        this.parentElement.classList.add("active");
    });
});


// WISHLIST ACTIVE

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".wishlist").forEach((wishlist) => {
        wishlist.addEventListener("click", function () {
            if (this.src.includes("wishlist.svg")) {
                this.src = "assets/wishlist-red.svg";
            } else {
                this.src = "assets/wishlist.svg"; 
            }
        });
    });
});


// HAMBERGER MENU IN HEADER

document.addEventListener("DOMContentLoaded" , function() {

    let Btn = document.querySelector("header div.menubar")
    let Btn1 = document.querySelector("header div.menubar div.singleBar1")
    let Btn2 = document.querySelector("header div.menubar div.singleBar2")
    let Btn3 = document.querySelector("header div.menubar div.singleBar3")
    let navMenu = document.querySelector("header ul.middle")
    
    function toggle() {
        Btn.classList.toggle("an")
        Btn1.classList.toggle("an")
        Btn2.classList.toggle("an")
        Btn3.classList.toggle("an")
        navMenu.classList.toggle("show")

        if (navMenu.classList.contains("show")) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto"; 
        }
    }
    
    Btn.addEventListener("click" , toggle)
})

// FEEDBACK INDICATOR


const carousel = document.querySelector('section#feedback-section div.carousel');
const dotss = document.querySelectorAll('section#feedback-section span.dotfd');
let currentIndexx = 0;
let isAutoScrolling = false;
let autoScrollInterval;

function updateDots(index) {
  dotss.forEach(dot => dot.classList.remove('activesfd'));
  dotss[index].classList.add('activesfd');
  currentIndexx = index;
}

function scrollToSlide(index) {
  const slideWidth = document.querySelector('section#feedback-section div.carousel div.carousel-item').offsetWidth;
  carousel.scrollLeft = slideWidth * index;
}

function currentSlidefd(index) {
  isAutoScrolling = true;
  
  updateDots(index);

  scrollToSlide(index);
  
  setTimeout(() => {
    isAutoScrolling = false;
  }, 450);
}

currentSlidefd(0);

autoScrollInterval = setInterval(() => {
  const nextIndex = (currentIndexx + 1) % dotss.length;
  currentSlidefd(nextIndex);
}, 4000);


dotss.forEach((dot, index) => {
  dot.addEventListener('click', () => {

    clearInterval(autoScrollInterval);
    
    currentSlidefd(index);
    
    autoScrollInterval = setInterval(() => {
      const nextIndex = (currentIndexx + 1) % dotss.length;
      currentSlidefd(nextIndex);
    }, 4000);
  });
});


carousel.addEventListener('scroll', () => {
  if (isAutoScrolling) {
    return; 
  }
  
  const slideWidth = document.querySelector('section#feedback-section div.carousel div.carousel-item').offsetWidth;
  const index = Math.round(carousel.scrollLeft / slideWidth);
  
  if (index !== currentIndexx && index >= 0 && index < dotss.length) {
    updateDots(index);
  }
});


// SEARCHBAR ACTIVE

document.addEventListener("DOMContentLoaded" , function() {
    let searchBtn = document.querySelector("header ul.right li img.searchIcon")
    let searchInput = document.querySelector("header ul.right li.input input")

    function showSearch() {
        searchInput.classList.toggle("showinput")
    }

    searchBtn.addEventListener("click" , showSearch)
})


// FOOTER CATEGORY MENU

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".toggleDown");
    const arrow = document.querySelector(".popular img");

    arrow.addEventListener("click", function () {
        menu.classList.toggle("show");
        arrow.classList.toggle("rotate");
    });
});


// REDIRECTING GOTO FUNCTION

function goto(id) {
    window.location.href = `product.html?id=${id}`;
}
