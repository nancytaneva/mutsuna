const calculateAgeBtn = document.getElementById("calculateAgeBtn");
const yesBtn          = document.getElementById("yes-btn");

const stagePuppy      = document.getElementById('stagePuppy');
const stageYoungDog   = document.getElementById('stageYoungDog'); 
const stageMatureDog  = document.getElementById('stageMatureDog');
const stageSeniorDog  = document.getElementById('stageSeniorDog');


 // Get the arrow element
 const arrow = document.getElementById('agemeter-arrow');

// Function to set the age of the arrow
function setAge(age) {
    // Calculate the rotation angle for the arrow based on the age
    const maxAge = 80; // Change this value to adjust the maximum age
    let angle;
   
    if (age <=96) {
        angle = -90 + (age / maxAge) * 180; // Adjust the calculation here
    }
    
    else {
        // For numbers after 24, use the regular range (180 degrees)
        angle = 90; // Adjust the angle for numbers after 24
    }

    // Apply the rotation to the arrow with smooth animation
    arrow.style.transition = 'transform 0.5s ease'; // You can adjust the duration and easing here too
    arrow.style.transform = `rotate(${angle}deg)`;
  }



  function setStage(age) {
    //When DIV is HIDDEN

    document.getElementById("info-stage-button").style.display = "visible";

    if (age > 12 && age <= 25) {
      toggleVisibilityWithTransition(stageYoungDog);
        hideOtherDivs(stageYoungDog);
    }
    else if (age > 25 && age <= 50) {
      toggleVisibilityWithTransition(stageMatureDog);
        hideOtherDivs(stageMatureDog);
    }
    else {
      toggleVisibilityWithTransition(stageSeniorDog);
        hideOtherDivs(stageSeniorDog);
    }
  }

  // Function to toggle visibility of an element
function toggleVisibility(element) {
  element.classList.toggle('hidden');
}

// Function to toggle visibility of an element with transition effect
function toggleVisibilityWithTransition(element) {
  element.classList.toggle('hidden');
  element.classList.toggle('transition-effect');

  // Show or hide the arrow icon based on the visibility of the div
  const container = element.previousElementSibling;
  const arrowIcon = container.querySelector('.info-stage-button'); // Use querySelector instead of getElementById
  if (container.classList.contains('active')) {
    arrowIcon.style.visibility = element.classList.contains('hidden') ? 'hidden' : 'visible';
  }
}


  // Function to hide other div elements
function hideOtherDivs(currentDiv) {
    const allDivs = document.querySelectorAll('.stage');
    const infoStageButton = document.querySelectorAll('.info-stage-button');
    allDivs.forEach((div) => {
      if (div !== currentDiv) {
        div.classList.add('hidden');
      }
    });
    infoStageButton.forEach((container) => {
      container.classList.remove('active');
    });
  }

  yesBtn.addEventListener('click', function () {
    toggleVisibilityWithTransition(stagePuppy);
    hideOtherDivs(stagePuppy);
  });

    yesBtn.addEventListener('click', function() {
        stagePuppy.scrollIntoView({ behavior: 'smooth' });
    });

// Function to scroll to the specific div when the icon is clicked
function scrollToDiv(divClass) {
  const element = document.querySelector(divClass);
  if (element) {
    const offset = -350; // Adjust this value based on your layout and preferences
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

// Rest of your existing functions and code...






calculateAgeBtn.addEventListener('click', function () {

  const calendarAgeYears    = document.getElementById("calendar-age-years").value  || 0;
  var humanAgeYears         = 0;
  let humanAgeYearsRounded  = 0;
 
  // human_age = 16 ln(dog_age) + 31      ------- в години

  const firstYear   = 1;
  const secondYear  = 2;

  


    const dogSize = document.querySelector('input[name="dog-size"]:checked').value;
  
    var ageInYearsLog = Math.log(calendarAgeYears);
    var ageInYearsLogTimes16 = 16 * ageInYearsLog;

    switch (dogSize) {
      case "small":
              if(calendarAgeYears <= firstYear) {
                var humanAgeYears = ageInYearsLogTimes16 + 31;
                humanAgeYearsRounded = parseInt(humanAgeYears);
              }
              
              else if (calendarAgeYears == secondYear) {
            
                var humanAgeYears = ageInYearsLogTimes16 + 31;
                // console.log('humanAgeYears', humanAgeYears);
            
                var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
            
                var breedCoefficient = humanAgeYears - humanAgeYearsLastYear - 5;
                console.log('breedCoefficient', breedCoefficient);
            
                humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
              }
              
              else if (calendarAgeYears > secondYear) {
            
                var humanAgeYears = ageInYearsLogTimes16 + 31;
                // console.log('humanAgeYears', humanAgeYears);
            
                var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
            
                var breedCoefficient = humanAgeYears - humanAgeYearsLastYear;
                console.log('breedCoefficient', breedCoefficient);
            
                humanAgeYearsRounded = parseInt(humanAgeYears - (2 * breedCoefficient));
              }
        break;
  
      case "medium":
                if(calendarAgeYears <= firstYear) {
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  humanAgeYearsRounded = parseInt(humanAgeYears);
                }
                
                else if (calendarAgeYears == secondYear) {
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  // console.log('humanAgeYears', humanAgeYears);
              
                  var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                  console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
              
                  var breedCoefficient = humanAgeYears - humanAgeYearsLastYear - 5;
                  console.log('breedCoefficient', breedCoefficient);
              
                  humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
                }
                
                else if (calendarAgeYears > secondYear) {
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  // console.log('humanAgeYears', humanAgeYears);
              
                  var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 30;
                  console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
              
                  var breedCoefficient = humanAgeYears - humanAgeYearsLastYear;
                  console.log('breedCoefficient', breedCoefficient);
              
                  humanAgeYearsRounded = parseInt(humanAgeYears - (breedCoefficient));
                }
        break;
  
      case "large":
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  humanAgeYearsRounded = parseInt(humanAgeYears);
        break;
  
      case "gigantic":
                if(calendarAgeYears <= firstYear) {
                  var humanAgeYears = ageInYearsLogTimes16 + 25;
                  humanAgeYearsRounded = parseInt(humanAgeYears);
                }
                
                else if (calendarAgeYears == secondYear) {
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  // console.log('humanAgeYears', humanAgeYears);
              
                  var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 27;
                  console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
              
                  var breedCoefficient = humanAgeYears - humanAgeYearsLastYear - 5;
                  console.log('breedCoefficient', breedCoefficient);
              
                  humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
                }
                
                else if (calendarAgeYears > secondYear) {
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  // console.log('humanAgeYears', humanAgeYears);
              
                  var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                  console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
              
                  var breedCoefficient = humanAgeYears - humanAgeYearsLastYear;
                  console.log('breedCoefficient', breedCoefficient);
              
                  humanAgeYearsRounded = parseInt(humanAgeYears + (breedCoefficient));
                }
        break;
  
      default:
        break;
      }

        document.getElementById("humanYears").innerHTML = humanAgeYearsRounded;
       // return humanAgeYearsRounded;
    

       const icon = document.getElementById('info-stage-button');
       icon.classList.add('show');

  setAge(humanAgeYearsRounded);
  setStage(humanAgeYearsRounded)
});


$(".breedBox").on('click', function() {
  $(".breedBox").removeClass('selected-element')
  $(this).addClass('selected-element')
});


const radioInputs = document.querySelectorAll('input[name="dog-size"]');
radioInputs.forEach((input) => {
  input.addEventListener("change", checkInputs);
});

function checkInputs() {
  const anyInputSelected = Array.from(radioInputs).some((input) => input.checked);
  calculateAgeBtn.disabled = !anyInputSelected;
}

// Initially check inputs to set the button state correctly
checkInputs();
