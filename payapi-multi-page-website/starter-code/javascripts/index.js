const hamburger = document.querySelector("#menu");
const nav = document.querySelector("#nav-div");
const closeHamburger = document.querySelector("#close");

function openNav() {
    nav.style.display = "block";
    nav.classList.remove("hide-nav");
}

function closeNav() {
    nav.style.display = "none";
}

hamburger.addEventListener("click", openNav);
closeHamburger.addEventListener("click", closeNav);

document.addEventListener("click", (event) => {
    if(event.target !== hamburger) {
        nav.classList.add("hide-nav");
    }
});