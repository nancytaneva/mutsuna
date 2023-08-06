document.addEventListener('copy', function (event) {
    event.preventDefault();
    alert('При ИЗПОЛЗВАНЕ на текст от този сайт трябва да се спомене ИЗТОЧНИКА, в този случай: MUTSUNA.org ( Виж: "Политика на поверителност").');
  });



  // OPEN MENU WITH BURGER
  document.addEventListener('DOMContentLoaded', function () {
    const mobileBurger = document.querySelector('.mobile-burger');
    const mobileNavigation = document.getElementById('mobile-navigation');
    const overlay = document.getElementById('overlay');
  
    // console.log('mobileBurger:', mobileBurger);
    // console.log('mobileNavigation:', mobileNavigation);
    // console.log('overlay:', overlay);
  
    function toggleMobileNavigation() {
      const isMenuVisible = window.getComputedStyle(mobileNavigation).display === 'block';
      mobileNavigation.style.display = isMenuVisible ? 'none' : 'block';
      overlay.style.display = isMenuVisible ? 'none' : 'block'; // Show/hide the overlay
    }
  
    mobileBurger.addEventListener('click', () => {
      toggleMobileNavigation();
    });
  });
  

// OPEN MENU DESKTOP OVERLAY
const headerNavigationItems = document.querySelectorAll('#header-navigation li');
const overlayDesktop = document.querySelector('.overlay-desktop');

headerNavigationItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    overlayDesktop.style.visibility = 'visible';
    overlayDesktop.style.opacity = '1';
  });

  item.addEventListener('mouseleave', () => {
    overlayDesktop.style.visibility = 'hidden';
    overlayDesktop.style.opacity = '0';
  });
});





// ARROW ICON MENU CAT AND SLOW DROP MENU
// Get references to the button and navigation menu
const buttonCats = document.getElementById('buttonCats');
const navigationCats = document.getElementById('mobile-navigation--cats');
const arrowIcon = document.querySelector('.arrow-icon');

// Function to toggle the navigation menu and arrow icon
function toggleNavigationMenu() {
  // Check the current display state of the navigation menu
  const isMenuVisible = navigationCats.style.display === 'block';

  // Toggle the display property based on the current state
  navigationCats.style.display = isMenuVisible ? 'none' : 'block';

  // If showing the navigation menu, set the height to its full content height
  if (!isMenuVisible) {
    navigationCats.style.height = navigationCats.scrollHeight + 'px';
  } else {
    // If hiding the navigation menu, set the height back to 0
    navigationCats.style.height = '0';
  }

  // Toggle the arrow icon animation
  arrowIcon.classList.toggle('open');

  // Log the class list for debugging
  console.log('Arrow Icon Class List:', arrowIcon.classList);
}

// Add a click event listener to the button
buttonCats.addEventListener('click', () => {
  // Toggle the navigation menu and arrow icon
  toggleNavigationMenu();
});





// ARROW ICON MENU DOG AND SLOW DROP MENU
// Get references to the button and navigation menu
const buttonDogs = document.getElementById('buttonDogs');
const navigationDogs = document.getElementById('mobile-navigation--dogs');
const arrowIconDogs = document.querySelector('.arrow-icon--dogs');

// Function to toggle the navigation menu
function toggleNavigationMenuDogs() {
  // Check the current display state of the navigation menu
  const isMenuVisibleDogs = navigationDogs.style.display === 'block';

  // Toggle the display property based on the current state
  navigationDogs.style.display = isMenuVisibleDogs ? 'none' : 'block';

  // If showing the navigation menu, set the height to its full content height
  if (!isMenuVisibleDogs) {
      navigationDogs.style.height = navigationDogs.scrollHeight + 'px';
  } else {
      // If hiding the navigation menu, set the height back to 0
      navigationDogs.style.height = '0';
  }

  // Toggle the arrow icon animation
  arrowIconDogs.classList.toggle('open');

  // Log the class list for debugging
  console.log('Arrow Icon Class List:', arrowIconDogs.classList);
}

// Add a click event listener to the button
buttonDogs.addEventListener('click', () => {
  // Toggle the navigation menu
  toggleNavigationMenuDogs();

});



window.onscroll = function() {myFunctionMobile()};

function myFunctionMobile() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBarMobile").style.width = scrolled + "%";
}


// CONTENT

// Smooth scrolling behavior from article content to headings
const headerHeight = document.querySelector('.header-section').offsetHeight;

// Smooth scrolling behavior from article content to headings
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the current scroll position
    const currentScrollPosition = window.scrollY;

    // Calculate the target scroll position, accounting for the header height
    const targetHeading = document.querySelector(this.getAttribute('href'));
    const targetScrollPosition = targetHeading.getBoundingClientRect().top + currentScrollPosition - headerHeight;

    // Scroll to the target heading with the adjusted scroll position
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });
  });
});



// JavaScript function to clear the image when clicked
function clearImage(element) {
  element.style.display = 'none'; // Hide the blurred image
  var clearImage = element.nextElementSibling; // Get the clear image
  clearImage.style.display = 'inline-block'; // Display the clear image
}

// JavaScript function to blur the image when clicked
function blurImage(element) {
  element.style.display = 'none'; // Hide the clear image
  var blurredImage = element.previousElementSibling; // Get the blurred image
  blurredImage.style.display = 'inline-block'; // Display the blurred image
}








// EMAIL
function sendByEmail() {
  const subject = "Сайт за по-добра грижа към домашните ни любимци"; 
  const body = "Здравей, този сайт цели да подпомогне стопаните да се грижат по-добре за своите мили любимци - mutsunaa.org. Посети го!";

  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

// PRINT
function printContent() {
  window.print();
}

function addPrintPageBreaks() {
  const elements = document.getElementsByClassName('print-page-break');
  for (const element of elements) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('print-page-break-wrapper');
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
  }
}

window.addEventListener('load', addPrintPageBreaks);


// FACEBOOK
window.fbAsyncInit = function() {
  FB.init({
    appId: '599719842052630',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v13.0'
  });
};

document.getElementById('postFacebookBtn').addEventListener('click', function() {
  FB.ui({
    method: 'share',
    href: window.location.href,
  }, function(response) {
    // Handle the response if needed
  });
});


// MESSENGER
window.fbAsyncInit = function() {
  FB.init({
    appId: '599719842052630',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v13.0'
  });
};

document.getElementById('shareMessengerBtn').addEventListener('click', function() {
  FB.ui({
    method: 'send',
    link: window.location.href,
  }, function(response) {
    // Handle the response if needed
  });
});











// Add this JavaScript code to your existing script or a new script
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function scrollToTop() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function handleScroll() {
  // Show or hide the button based on the user's scroll position
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
}

// Add a click event listener to the button to scroll to the top when clicked
scrollToTopBtn.addEventListener('click', scrollToTop);

// Add a scroll event listener to show/hide the button as the user scrolls
window.addEventListener('scroll', handleScroll);









const scrollToSectionBtn = document.getElementById('scrollToSectionBtn');
const ShareWIthOthers = document.getElementById('share-with-others');

function scrollToSection(event) {
  event.preventDefault();

  // Calculate the offset for scrolling to the target section
  const offset = -headerHeight;

  // Scroll to the target section, applying the offset
  window.scroll({
    top: ShareWIthOthers.getBoundingClientRect().top + window.scrollY + offset,
    behavior: 'smooth'
  });
}

// Add a click event listener to the button to scroll to the target section when clicked
scrollToSectionBtn.addEventListener('click', scrollToSection);





// DISABLE VIEW SOURSE

      //   // Disable Ctrl + U
      //   document.onkeydown = function (event) {
      //     if (event.ctrlKey && event.keyCode === 85) { // 85 is the key code for 'U'
      //         return false;
      //     }
      // };

      // // Show a custom message when someone tries to right-click.
      // document.addEventListener('contextmenu', function(event) {
      //     event.preventDefault();
      //     alert("Right-click is disabled.");
      // });

      //         // Show a custom message when someone tries to right-click.
      //         document.addEventListener('contextmenu', function(event) {
      //           event.preventDefault();
      //           alert("Right-click is disabled.");
      //       });