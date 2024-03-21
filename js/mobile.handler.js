let mobileTrigger = document.querySelector(".mobile-trigger");
let mobileNav = document.querySelector(".mobile-nav");
let overlay = document.querySelector(".overlay");

overlay.addEventListener('click', (e) => {
    mobileNav.classList.remove("mobile-nav-visible")
    overlay.classList.remove("visible")
})

mobileTrigger.addEventListener('click', (e) => {
    mobileNav.classList.add("mobile-nav-visible")
    overlay.classList.add("visible")
})