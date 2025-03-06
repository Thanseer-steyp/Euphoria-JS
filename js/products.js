// PRODUCT SELECTER ACTIVE

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("section#productPage section.productPage div.left ul li");
    const upButton = document.querySelector("section#productPage section.productPage div.left img.up");
    const downButton = document.querySelector("section#productPage section.productPage div.left img.down");

    let selectedIndex = 0;

    function updateSelection() {
        listItems.forEach((li, index) => {
            li.classList.remove("selected");
            if (index === selectedIndex) {
                li.classList.add("selected");
            }
        });
    }

    if (upButton && downButton) {
        upButton.addEventListener("click", function () {
            if (selectedIndex > 0) {
                selectedIndex--;
                updateSelection();
            }
        });

        downButton.addEventListener("click", function () {
            if (selectedIndex < listItems.length - 1) {
                selectedIndex++;
                updateSelection();
            }
        });

        updateSelection();
    }
});


// MENS PRODUCT REDIRECTING

const MenurlParams = new URLSearchParams(window.location.search);
        const MenproductId = MenurlParams.get("id");

        const Menproducts = {
            1: { name: "Red Colour With Black Check Design",image: "./assets/img-5.jpg" , genderCategory: "Men", clothSection: "Shirts", price:"$29.99"},
            2: { name: "Front Printed Black T-Shirt",image: "./assets/img-6.jpg" , genderCategory: "Men", clothSection: "Printed T-Shirts", price:"$23.49"},
            3: { name: "Trendy Hash Green Plain T-Shirt",image: "./assets/img-7.jpg" , genderCategory: "Men", clothSection: "Plain T-Shirts", price:"$10.99"},
            4: { name: "Casual Polo Type New T-Shirts",image: "./assets/img-8.jpg" , genderCategory: "Men", clothSection: "Polo T-Shirts", price:"$17.49"},
            5: { name: "Green Colour Stylish Hoodie",image: "./assets/img-9.jpg" , genderCategory: "Men", clothSection: "Hoodies & Sweetshirt", price:"$69.49"},
            6: { name: "Blue Colour Trendy Baggy Jeans",image: "./assets/img-10.jpg" , genderCategory: "Men", clothSection: "Jeans", price:"$75.49"},
            7: { name: "Black Fully Covered Elastic Pants",image: "./assets/img-1.jpg" , genderCategory: "Men", clothSection: "Activewear", price:"$14.99"},
            8: { name: "New Model Multicoloured Boxer",image: "./assets/img-11.jpg", genderCategory: "Men", clothSection: "Boxers", price:"$8.99" },
        };

        const MenproductDetail = document.querySelector("section#productPage section.productPage");

        if (Menproducts[MenproductId]) {
            const Menproduct = Menproducts[MenproductId];
            MenproductDetail.innerHTML = `
            <div class="left">
                <ul>
                    <li><img src="${Menproduct.image}" alt=""></li>
                    <li><img src="./assets/img-3.jpg" alt=""></li>
                    <li><img src="./assets/img-24.jpg" alt=""></li>
                </ul>
                <img class="up" src="./assets/arrow-down.svg" alt="">
                <img class="down" src="./assets/arrow-down.svg" alt="">
            </div>
            <div class="detailedImage"><img src="${Menproduct.image}" alt=""></div>
            <div class="right">
                <div class="path">
                    <small>Shop</small>
                    <div class="arrow">
                        <img src="./assets/right-arrow-light.svg" alt="">
                    </div>
                    <small>${Menproduct.genderCategory}</small>
                    <div class="arrow">
                        <img src="./assets/right-arrow-light.svg" alt="">
                    </div>
                    <small>${Menproduct.clothSection}</small>
                </div>
                <h2>${Menproduct.name}</h2>
                <div class="ratings">
                    <div class="rating">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <small>3.5</small>
                    </div>
                    <div class="review">
                        <img src="./assets/message.svg" alt="">
                        <small>120 comment</small>
                    </div>
                </div>
                <div class="size">
                    <div class="top">
                        
                            <small>Select Size</small>
        
                            <small class="guide">Size Guide</small>
                            <img src="./assets/arrow-right.svg" alt="">
                        
                    </div>
                    <div class="bottom">
                        <ul class="sizes">
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                </div>
                <div class="colors">
                    <h6>Colours Available</h6>
                    <ul class="color">
                        <li class="clr1"></li>
                        <li class="clr2"></li>
                        <li class="clr3"></li>
                        <li class="clr4"></li>
                    </ul>
                </div>
                <div class="buy">
                    <div class="cart">
                        <img src="./assets/cart-1.svg" alt="">Add to cart
                    </div>
                    <div class="price">
                    ${Menproduct.price}
                    </div>
                </div>
                <div class="features">
                    <ul>
                        <li>
                            <div class="img">
                                <img src="./assets/credit card.svg" alt="">
                            </div>
                            Secure payment
                        </li>
                        <li>
                            <div class="img">
                                <img src="./assets/Size&Fit.svg" alt="">
                            </div>
                            Size & Fit
                        </li>
                        <li>
                            <div class="img">
                                <img src="./assets/truck.svg" alt="">
                            </div>
                            Free Shipping
                        </li>
                        <li>
                            <div class="img">
                                <img src="./assets/Free-Shipping&Returns.svg" alt="">
                            </div>
                            Free Shipping & Returns
                        </li>
                    </ul>
                </div>
            </div>
            `;
        }


// WOMENS PRODUCT REDIRECTING

        const WomenurlParams = new URLSearchParams(window.location.search);
        const WomenproductId = WomenurlParams.get("id");

        const Womenproducts = {
            9: { name: "Stylish Orange Hoodie with Cap",image: "./assets/img-12.jpg" , genderCategory: "Women", clothSection: "Hoodies & Sweetshirt", price:"$29.99"},
            10: { name: "Cotton Jacket",image: "./assets/img-13.jpg" , genderCategory: "Women", clothSection: "Coats & Parkas", price:"$23.49"},
            11: { name: "Flower Printed Tees",image: "./assets/img-14.jpg" , genderCategory: "Women", clothSection: "Tees & T-Shirt", price:"$10.99"},
            12: { name: "Jeans Scratch Shorts",image: "./assets/img-15.jpg" , genderCategory: "Women", clothSection: "Boxers", price:"$17.49"},
        };

        const WomenproductDetail = document.querySelector("section#productPage section.productPage");

        if (Womenproducts[WomenproductId]) {
            const Womenproduct = Womenproducts[WomenproductId];
            WomenproductDetail.innerHTML = `
            <div class="left">
                <ul>
                    <li><img src="${Womenproduct.image}" alt=""></li>
                    <li><img src="./assets/img-16.jpg" alt=""></li>
                    <li><img src="./assets/img-23.jpg" alt=""></li>
                </ul>
                <img class="up" src="./assets/arrow-down.svg" alt="">
                <img class="down" src="./assets/arrow-down.svg" alt="">
            </div>
            <div class="detailedImage"><img src="${Womenproduct.image}" alt=""></div>
            <div class="right">
                <div class="path">
                    <small>Shop</small>
                    <div class="arrow">
                        <img src="./assets/right-arrow-light.svg" alt="">
                    </div>
                    <small>${Womenproduct.genderCategory}</small>
                    <div class="arrow">
                        <img src="./assets/right-arrow-light.svg" alt="">
                    </div>
                    <small>${Womenproduct.clothSection}</small>
                </div>
                <h2>${Womenproduct.name}</h2>
                <div class="ratings">
                    <div class="rating">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <img src="./assets/star.svg" alt="">
                        <small>3.5</small>
                    </div>
                    <div class="review">
                        <img src="./assets/message.svg" alt="">
                        <small>120 comment</small>
                    </div>
                </div>
                <div class="size">
                    <div class="top">
                        
                            <small>Select Size</small>
        
                            <small class="guide">Size Guide</small>
                            <img src="./assets/arrow-right.svg" alt="">
                        
                    </div>
                    <div class="bottom">
                        <ul class="sizes">
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                </div>
                <div class="colors">
                    <h6>Colours Available</h6>
                    <ul class="color">
                        <li class="clr1"></li>
                        <li class="clr2"></li>
                        <li class="clr3"></li>
                        <li class="clr4"></li>
                    </ul>
                </div>
                <div class="buy">
                    <div class="cart">
                        <img src="./assets/cart-1.svg" alt="">Add to cart
                    </div>
                    <div class="price">
                    ${Womenproduct.price}
                    </div>
                </div>
                <div class="features">
                    <ul>
                        <li>
                            <div class="img">
                                <img src="./assets/credit card.svg" alt="">
                            </div>
                            Secure payment
                        </li>
                        <li>
                            <div class="img">
                                <img src="./assets/Size&Fit.svg" alt="">
                            </div>
                            Size & Fit
                        </li>
                        <li>
                            <div class="img">
                                <img src="./assets/truck.svg" alt="">
                            </div>
                            Free Shipping
                        </li>
                        <li>
                            <div class="img">
                                <img src="./assets/Free-Shipping&Returns.svg" alt="">
                            </div>
                            Free Shipping & Returns
                        </li>
                    </ul>
                </div>
            </div>
            `;
        }


// SIZE SELECTION ACTIVE

document.addEventListener("DOMContentLoaded", function () {
    const sizeOptions = document.querySelectorAll(".sizes li");

    sizeOptions.forEach(option => {
        option.addEventListener("click", function () {
            sizeOptions.forEach(item => item.classList.remove("active"));
            
            this.classList.add("active");
        });
    });
});


// COLOUR SELECTION ACTIVE
        
document.addEventListener("DOMContentLoaded", function () {
    const colorOptions = document.querySelectorAll(".color li");

    colorOptions.forEach(option => {
        option.addEventListener("click", function () {
            colorOptions.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


// PRODUCT DESCRIPTION TAB ACTIVE

document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("section#productPage section.wrapper section.productDescription div.left ul li");

    if (listItems.length > 0) {
        
        listItems[0].classList.add("active");

        listItems.forEach(item => {
            item.addEventListener("click", function() {
                listItems.forEach(li => li.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }
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


// FOOTER CATEGORY MENU

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".toggleDown");
    const arrow = document.querySelector(".popular img");

    arrow.addEventListener("click", function () {
        menu.classList.toggle("show");
        arrow.classList.toggle("rotate");
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
        

// SEARCHBAR ACTIVE

document.addEventListener("DOMContentLoaded" , function() {
    let searchBtn = document.querySelector("header ul.right li img.searchIcon")
    let searchInput = document.querySelector("header ul.right li.input input")

    function showSearch() {
        searchInput.classList.toggle("showinput")
    }

    searchBtn.addEventListener("click" , showSearch)
})
        