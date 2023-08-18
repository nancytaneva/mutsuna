const homeCatButton     = document.getElementById("home--cat-button");
const homeDogButton     = document.getElementById("home--dog-button");
const homeCatSection    = document.getElementById("home--cat-section");
const homeDogSection    = document.getElementById("home--dog-section");

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








function scrollToHomeCatSection() {
    const screenWidth = window.innerWidth;
    let headerHeight;

    if (screenWidth <= 768) {
        // Mobile version
        headerHeight = 400;
    } else {
        // Desktop version
        headerHeight = 500;
    }

    const offset = homeCatSection.offsetTop - headerHeight;
  
    // Scroll to the target section, applying the offset
    window.scroll({
      top: homeCatSection.getBoundingClientRect().top + window.scrollY + offset,
      behavior: 'smooth'
    });
  }


  function scrollToHomeDogSection() {
    const screenWidth = window.innerWidth;
    let headerHeight;

    if (screenWidth <= 768) {
        // Mobile version
        headerHeight = 350;
    } else {
        // Desktop version
        headerHeight = 470;
    }

    const offset = homeDogSection.offsetTop - headerHeight;
    
      // Scroll to the target section, applying the offset
      window.scroll({
        top: homeDogSection.getBoundingClientRect().top + window.scrollY + offset,
        behavior: 'smooth'
      });
    }



// HOME MENU SHOW UP
document.addEventListener("DOMContentLoaded", function () {


    homeCatButton.addEventListener("click", function () {
        homeCatSection.style.display = "block";
        homeDogSection.style.display = "none";
        // Add a time delay of 2 seconds before scrolling
        setTimeout(scrollToHomeCatSection, 500);
    });

    homeDogButton.addEventListener("click", function () {
        homeCatSection.style.display = "none";
        homeDogSection.style.display = "block";
        // Add a time delay of 2 seconds before scrolling
        setTimeout(scrollToHomeDogSection, 500);
    });
});