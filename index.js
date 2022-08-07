const openMenu = document.querySelector(".menu-hamburger")
const closeMenu = document.querySelector(".menu-close")
const nav = document.querySelector("nav")

openMenu.addEventListener("click", () => {
    nav.classList.add("opened")
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("opened")
})