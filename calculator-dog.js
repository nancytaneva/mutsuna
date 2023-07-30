const calculateAgeBtn = document.getElementById("calculateAgeBtn");


 // Get the arrow element
 const arrow = document.getElementById('agemeter-arrow');

// Function to set the age of the arrow
function setAge(age) {
    // Calculate the rotation angle for the arrow based on the age
    const maxAge = 78; // Change this value to adjust the maximum age
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
    // //When DIV is HIDDEN
    // const stageKitten     = document.getElementById('stageKitten');
    // const stageYoungCat   = document.getElementById('stageYoungCat'); 
    // const stageMatureCat  = document.getElementById('stageMatureCat');
    // const stageSeniorCat  = document.getElementById('stageSeniorCat');

    // if(age <= 15) {
    //     toggleVisibility(stageKitten);
    //     hideOtherDivs(stageKitten);
    // }
    // else if (age > 15 && age <= 40) {
    //     toggleVisibility(stageYoungCat);
    //     hideOtherDivs(stageYoungCat);
    // }
    // else if (age > 40 && age <= 56) {
    //     toggleVisibility(stageMatureCat);
    //     hideOtherDivs(stageMatureCat);
    // }
    // else {
    //     toggleVisibility(stageSeniorCat);
    //     hideOtherDivs(stageSeniorCat);
    // }
  }

  // Function to toggle visibility of an element
    function toggleVisibility(element) {
    element.classList.toggle('hidden');
  }

  // Function to hide other div elements
function hideOtherDivs(currentDiv) {
    const allDivs = document.querySelectorAll('.stage');
    allDivs.forEach((div) => {
      if (div !== currentDiv) {
        div.classList.add('hidden');
      }
    });
  }



calculateAgeBtn.addEventListener('click', function () {

    const calendarAgeYears  = document.getElementById("calendar-age-years").value  || 0;
    
    var humanAgeYears       = 0;
   
    // var yearsInMonths   = calendarAgeYears * 12;
    // var ageInMonths     = parseInt(yearsInMonths) + parseInt(calendarAgeMonths);
    // console.log('ageInMonths:',  ageInMonths);

    // human_age = 16 ln(dog_age) + 31      ------- в години
    // 1 wk = 0.229984 mo
    // 1 wk = 0.019165 yr
    // 1 mo = 4.348125 wk
    // 1 mo = 0.083333 yr
    // 1 yr = 52.1775 wk
    // 1 yr = 12 mo

// Смята календарни месеци в човешки години + месеци.
    //var ageInYears = ageInMonths / 12;
    // console.log('ageInYears: ', ageInYears);

    var ageInYearsLog = Math.log(calendarAgeYears);
    var ageInYearsLogTimes16 = 16 * ageInYearsLog;

    var humanAgeYears = ageInYearsLogTimes16 + 31;
    // console.log('humanAgeYears', humanAgeYears);

    var humanAgeYearsRounded = parseInt(humanAgeYears);

    //var humanAgeMonths = humanAgeYears - parseInt(humanAgeYears);             // не работи правилно
    // console.log('humanAgeMonths', humanAgeMonths);

    //var humanAgeMonthsConverted = parseInt(humanAgeMonths*12);
    //console.log('humanAgeMonthsConverted', humanAgeMonthsConverted);        // не работи правилно

    document.getElementById("humanYears").innerHTML = [humanAgeYearsRounded];



    setAge(humanAgeYearsRounded);
    setStage(humanAgeYearsRounded)
});


