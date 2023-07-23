document.addEventListener('copy', function (event) {
    event.preventDefault();
    alert('При ИЗПОЛЗВАНЕ на текст от този сайт трябва да се спомене ИЗТОЧНИКА, в този случай: MUTSUNA.com ( Виж: "Политика на поверителност").');
  });



//Ne raboti
  // const subscribeButton = document.getElementById("subscribeButton");
  // const emailInputContainer = document.getElementById("emailInputContainer");

  // function subscribe() {
  //   isSubscribeInboxVisible = window.getComputedStyle(emailInputContainer).display === 'block';
  //   emailInputContainer.style.display = isSubscribeInboxVisible ? 'none' : 'block';
  // }




  
  // Get references to the mobile-burger and mobile-navigation elements
const mobileBurger = document.querySelector('.mobile-burger');
const mobileNavigation = document.getElementById('mobile-navigation');

// Function to toggle the mobile navigation
function toggleMobileNavigation() {
    const isMenuVisible = window.getComputedStyle(mobileNavigation).display === 'block';
    mobileNavigation.style.display = isMenuVisible ? 'none' : 'block';
}

// Add a click event listener to the mobile-burger
mobileBurger.addEventListener('click', () => {
    // Toggle the mobile navigation
    toggleMobileNavigation();
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









// CONTENT
// EMAIL
function sendByEmail() {
  const subject = "Сайт за по-добра грижа към домашните ни любимци"; 
  const body = "Здравей, този сайт цели да подпомогне стопаните да се грижат по-добре за своите мили любимци - mustsuna.com. Посети го.";

  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

// PRINT
function printContent() {
  window.print();
}

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
    href: 'https://nancytaneva.github.io/',
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
    link: 'https://nancytaneva.github.io/',
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









// Add JavaScript code to handle scrolling to the target section
const scrollToSectionBtn = document.getElementById('scrollToSectionBtn');
const ShareWIthOthers = document.getElementById('share-with-others');

function scrollToSection() {
  // Scroll to the target section smoothly
  ShareWIthOthers.scrollIntoView({
    behavior: 'smooth'
  });
}

// Add a click event listener to the button to scroll to the target section when clicked
scrollToSectionBtn.addEventListener('click', scrollToSection);
