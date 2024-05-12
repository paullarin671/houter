// burger menu
"use strict";
let header = document.querySelector(".header");
let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
const headerListLinks = document.querySelectorAll(".header__link");
let headerItemLists = document.querySelectorAll(".header__link-list");
let headerProperties = document.querySelectorAll(".header__properties");
let heroSearchBtn = document.querySelector(".hero__search-btn");
let subscribeFormBtn = document.querySelector(".subscribe__form-btn");
let offerBtnPlay = document.querySelector(".offer__btn-play");

// modals
let modals = document.querySelectorAll(".modal");
let modalSearch = document.querySelector(".modal__search");
let modalSubscribe = document.querySelector(".modal__subscribe");
let modalVideo = document.querySelector(".modal__video");
let modalBurgers = document.querySelectorAll(".modal__burger");

// links scroll
const menuLinks = document.querySelectorAll("a[href^='#']");
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    let href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector(".header").offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}

heroSearchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
  body.classList.add("lock");
});

subscribeFormBtn.addEventListener("click", () => {
  modalSubscribe.classList.add("active");
  body.classList.add("lock");
});

offerBtnPlay.addEventListener("click", () => {
  modalVideo.classList.add("active");
  body.classList.add("lock");
});

headerItemLists.forEach((headerItemList) => {
  headerItemList.addEventListener("click", () => {
    headerProperties.forEach((headerProperty) => {
      headerProperty.classList.toggle("active");
      headerItemList.classList.toggle("active");
    });
  });
});

// headerList
for (let i = 0; i < headerListLinks.length; i++) {
  headerListLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    headerMenu.classList.remove("active");
  });
}

// header burger
let body = document.querySelector("body");
headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});

modalBurgers.forEach((modalBurger) => {
  modalBurger.addEventListener("click", () => {
    modals.forEach((modal) => {
      if (modal.classList.contains("active")) {
        modal.classList.remove("active");
        body.classList.remove("lock");
      }
    });
  });
});

// hero card slider
const heroRightSlider = new Swiper(".hero__right", {
  speed: 700,
  autoplay: true,
  autoHeight: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 10,
});

// availability items slider
const availabilityItemsSlider = new Swiper(".availability__items", {
  speed: 700,
  autoplay: true,
  autoHeight: true,
  slidesPerView: 3.5,
  spaceBetween: 40,
  navigation: {
    nextEl: ".availability__slider-next",
    prevEl: ".availability__slider-prev",
    disabledClass: "availability__slider-disabled",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1430: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
  },
});

// reviews items slider
const reviewsItemsSlider = new Swiper(".reviews__items", {
  speed: 700,
  autoplay: true,
  autoHeight: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
});
