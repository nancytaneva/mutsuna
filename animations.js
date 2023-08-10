// HOME MENU
// CAT
let homeToggle = document.querySelector('.home-toggle');
let homeMenu = document.querySelector('.home-menu');
homeToggle.onclick = function () {
    homeMenu.classList.toggle('active')
};

// DOG
let homeToggleDog = document.querySelector('.home-toggle--dog');
let homeMenuDog = document.querySelector('.home-menu--dog');
homeToggleDog.onclick = function () {
    homeMenuDog.classList.toggle('active')
};


// HOME MENU SHOW UP
document.addEventListener("DOMContentLoaded", function () {
    const catButton = document.getElementById("home--cat-button");
    const dogButton = document.getElementById("home--dog-button");
    const catSection = document.getElementById("home--cat-section");
    const dogSection = document.getElementById("home--dog-section");

    catButton.addEventListener("click", function () {
        catSection.style.display = "block";
        dogSection.style.display = "none";
    });

    dogButton.addEventListener("click", function () {
        catSection.style.display = "none";
        dogSection.style.display = "block";
    });
});
