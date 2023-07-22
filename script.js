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

// Function to toggle the navigation menu
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
}

// Function to toggle the arrow icon
function toggleArrowIcon() {
  $(".arrow-icon").toggleClass("open");
}

// Add a click event listener to the button
buttonCats.addEventListener('click', () => {
  // Toggle the navigation menu
  toggleNavigationMenu();

  // Toggle the arrow icon
  toggleArrowIcon();
});

// Arrow Cat down
$(".arrow-icon").click(function() {
  toggleArrowIcon();
});



// ARROW ICON MENU DOG AND SLOW DROP MENU
// Get references to the button and navigation menu
const buttonDogs = document.getElementById('buttonDogs');
const navigationDogs = document.getElementById('mobile-navigation--dogs');

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
}

// Function to toggle the arrow icon
function toggleArrowIconDogs() {
  $(".arrow-icon--dogs").toggleClass("open");
}

// Add a click event listener to the button
buttonDogs.addEventListener('click', () => {
  // Toggle the navigation menu
  toggleNavigationMenuDogs();

  // Toggle the arrow icon
  toggleArrowIconDogs();
});

// Arrow Cat down
$(".arrow-icon--dogs").click(function() {
  toggleArrowIconDogs();
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
