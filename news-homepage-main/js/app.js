
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector(".open-btn");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".overlay");

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
});

function openMenu() {
    const navigation = document.querySelector(".nav-mobile");
    const overlay = document.querySelector(".overlay");
    navigation.style.width = "250px";
    overlay.style.display = "block";
}

function closeMenu() {
    const navigation = document.querySelector(".nav-mobile");
    const overlay = document.querySelector(".overlay");
    navigation.style.width = "0px";
    overlay.style.display = "none";
}