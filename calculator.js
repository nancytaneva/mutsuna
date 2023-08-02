const calculateAgeBtn = document.getElementById("calculateAgeBtn");


 // Get the arrow element
 const arrow = document.getElementById('agemeter-arrow');

// Function to set the age of the arrow
function setAge(age) {
    // Calculate the rotation angle for the arrow based on the age
    const maxAge = 96; // Change this value to adjust the maximum age
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
    const stageKitten     = document.getElementById('stageKitten');
    const stageYoungCat   = document.getElementById('stageYoungCat'); 
    const stageMatureCat  = document.getElementById('stageMatureCat');
    const stageSeniorCat  = document.getElementById('stageSeniorCat');

    document.getElementById("info-stage-button").style.display = "visible";

    if(age <= 15) {
        toggleVisibilityWithTransition(stageKitten);
        hideOtherDivs(stageKitten);
    }
    else if (age > 15 && age <= 40) {
        toggleVisibilityWithTransition(stageYoungCat);
        hideOtherDivs(stageYoungCat);
    }
    else if (age > 40 && age <= 56) {
        toggleVisibilityWithTransition(stageMatureCat);
        hideOtherDivs(stageMatureCat);
    }
    else {
        toggleVisibilityWithTransition(stageSeniorCat);
        hideOtherDivs(stageSeniorCat);
    }
  }


function toggleVisibilityWithTransition(element) {
    element.classList.toggle('hidden');
    element.classList.toggle('transition-effect');
  
    // Show or hide the arrow icon based on the container class
    const container = element.previousElementSibling;
    const infoStageButton = container.getElementById('info-stage-button');
    if (container.classList.contains('active')) {
        infoStageButton.style.visibility = element.classList.contains('hidden') ? 'hidden' : 'visible';
    }
  }
  
  
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
  
  


// Function to scroll to the specific div when the icon is clicked
function scrollToDiv(divClass) {
    const element = document.querySelector(divClass);
    if (element) {
      const offset = 160; // Adjust this value based on your layout and preferences
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;
  
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
  
  
  




calculateAgeBtn.addEventListener('click', function () {

    const calendarAgeYears  = document.getElementById("calendar-age-years").value  || 0;
    const calendarAgeMonths = document.getElementById("calendar-age-months").value || 0;
    var humanAgeYears = 0;
   
    var yearsInMonths = calendarAgeYears * 12;
    var ageInMonths = parseInt(yearsInMonths) + parseInt(calendarAgeMonths);
    console.log('ageInMonths:',  ageInMonths);

    if(ageInMonths <= 24) {
        if(ageInMonths == 1) {
            humanAgeYears = humanAgeYears + 1;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths == 2) {
            humanAgeYears = humanAgeYears + 3;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths == 3) {
            humanAgeYears = humanAgeYears + 4;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths == 4) {
            humanAgeYears = humanAgeYears + 6;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths == 5) {
            humanAgeYears = humanAgeYears + 8;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths == 6) {
            humanAgeYears = humanAgeYears + 10;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths == 7) {
            humanAgeYears = humanAgeYears + 12;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths > 7 && ageInMonths < 12) {
            if(ageInMonths == 8) {
                humanAgeYears = humanAgeYears + 12;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }

            if(ageInMonths == 9) {
                humanAgeYears = humanAgeYears + 13;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }

            if(ageInMonths == 10) {
                humanAgeYears = humanAgeYears + 13;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }

            if(ageInMonths == 11) {
                humanAgeYears = humanAgeYears + 14;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }
        } 

        if(ageInMonths == 12) {
            humanAgeYears = humanAgeYears + 15;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths > 12 && ageInMonths < 18) {
            humanAgeYears = ageInMonths + 3;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
            // 12          13          14          15          16          17          18
            // 15          16          17          18          19          20          21
        }

        if(ageInMonths == 18) {
            humanAgeYears = humanAgeYears + 21;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }

        if(ageInMonths > 18 && ageInMonths < 24) {
            if(ageInMonths == 19) {
                humanAgeYears = humanAgeYears + 21;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }
            if(ageInMonths == 20) {
                humanAgeYears = humanAgeYears + 22;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }
            if(ageInMonths == 21) {
                humanAgeYears = humanAgeYears + 22;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }
            if(ageInMonths == 22) {
                humanAgeYears = humanAgeYears + 23;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }
            if(ageInMonths == 23) {
                humanAgeYears = humanAgeYears + 23;
                document.getElementById("humanYears").innerHTML = [humanAgeYears];
            }
            // 18          19          20          21          22          23          24
            // 21                      22                      23                      24
        }

        if(ageInMonths == 24) {
            humanAgeYears = humanAgeYears + 24;
            document.getElementById("humanYears").innerHTML = [humanAgeYears];
        }
    }

    if(ageInMonths > 24) {
        // 2 кал години    = 24 кал месеца;
        // 24 чов години   = 288 чов месеца;

        // 7 кал години    = 44 чов години;
        // 84 кал месеца   = 528 чов месеца;

        // 1 кал месец     = 4 чов месеца;

        // 84 - 24 = 60 (кал месеци, без първите две години)
        // 60 * 4 = 240 (кал месеци, превърнати в чов месеци)
        // 240 + 288 = 528 (чов месеци, плюс първите две години в чов месеци)
        // 528 / 12 = 44 (чов години)

        var ageInMonthsWithoutTwoYears = (ageInMonths - 24);
        var ageInMonthsWithoutTwoYearsHuman = ageInMonthsWithoutTwoYears * 4;
        var ageInMontsHumanMonths = ageInMonthsWithoutTwoYearsHuman + 288;
        // console.log('Human Months', ageInMontsHumanMonths);
        var humanAgeYears = parseInt(ageInMontsHumanMonths / 12);
        // console.log(`Human Years`, ageInHumanYears);

        document.getElementById("humanYears").innerHTML = [humanAgeYears];

    }


    const icon = document.getElementById('info-stage-button');
    icon.classList.add('show');


    setAge(humanAgeYears);
    setStage(humanAgeYears);

});

