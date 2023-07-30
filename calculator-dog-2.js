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

    const calendarAgeYears    = document.getElementById("calendar-age-years").value  || 0;
    var humanAgeYears         = 0;
    let humanAgeYearsRounded  = 0;
   
    // human_age = 16 ln(dog_age) + 31      ------- в години

    const firstYear   = 1;
    const secondYear  = 2;


    // if(calendarAgeYears <= firstYear) {
    //   var ageInYearsLog = Math.log(calendarAgeYears);
    //   var ageInYearsLogTimes16 = 16 * ageInYearsLog;
  
    //   var humanAgeYears = ageInYearsLogTimes16 + 31;
    //   var humanAgeYearsRounded = parseInt(humanAgeYears);
    // }
    
    // else if (calendarAgeYears == secondYear) {
    //   var ageInYearsLog = Math.log(calendarAgeYears);
    //   var ageInYearsLogTimes16 = 16 * ageInYearsLog;
  
    //   var humanAgeYears = ageInYearsLogTimes16 + 31;
    //   // console.log('humanAgeYears', humanAgeYears);
  
    //   var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
    //   console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
  
    //   var breedCoefficient = humanAgeYears - humanAgeYearsLastYear - 5;
    //   console.log('breedCoefficient', breedCoefficient);
  
    //   var humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
    // }
    
    // else if (calendarAgeYears > secondYear) {
    //   var ageInYearsLog = Math.log(calendarAgeYears);
    //   var ageInYearsLogTimes16 = 16 * ageInYearsLog;
  
    //   var humanAgeYears = ageInYearsLogTimes16 + 31;
    //   // console.log('humanAgeYears', humanAgeYears);
  
    //   var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
    //   console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
  
    //   var breedCoefficient = humanAgeYears - humanAgeYearsLastYear;
    //   console.log('breedCoefficient', breedCoefficient);
  
    //   var humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
    // }

    


  function setBreed(age) {
      const dogSize = document.querySelector('input[name="dog-size"]:checked').value;
    
      switch (dogSize) {
        case "small":
                if(calendarAgeYears <= firstYear) {
                  var ageInYearsLog = Math.log(calendarAgeYears);
                  var ageInYearsLogTimes16 = 16 * ageInYearsLog;
              
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  var humanAgeYearsRounded = parseInt(humanAgeYears);
                }
                
                else if (calendarAgeYears == secondYear) {
                  var ageInYearsLog = Math.log(calendarAgeYears);
                  var ageInYearsLogTimes16 = 16 * ageInYearsLog;
              
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  // console.log('humanAgeYears', humanAgeYears);
              
                  var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                  console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
              
                  var breedCoefficient = humanAgeYears - humanAgeYearsLastYear - 5;
                  console.log('breedCoefficient', breedCoefficient);
              
                  var humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
                }
                
                else if (calendarAgeYears > secondYear) {
                  var ageInYearsLog = Math.log(calendarAgeYears);
                  var ageInYearsLogTimes16 = 16 * ageInYearsLog;
              
                  var humanAgeYears = ageInYearsLogTimes16 + 31;
                  // console.log('humanAgeYears', humanAgeYears);
              
                  var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                  console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
              
                  var breedCoefficient = humanAgeYears - humanAgeYearsLastYear;
                  console.log('breedCoefficient', breedCoefficient);
              
                  var humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
                }
          break;
    
        case "medium":
                  if(calendarAgeYears <= firstYear) {
                    var ageInYearsLog = Math.log(calendarAgeYears);
                    var ageInYearsLogTimes16 = 16 * ageInYearsLog;
                
                    var humanAgeYears = ageInYearsLogTimes16 + 31;
                    var humanAgeYearsRounded = parseInt(humanAgeYears);
                  }
                  
                  else if (calendarAgeYears == secondYear) {
                    var ageInYearsLog = Math.log(calendarAgeYears);
                    var ageInYearsLogTimes16 = 16 * ageInYearsLog;
                
                    var humanAgeYears = ageInYearsLogTimes16 + 31;
                    // console.log('humanAgeYears', humanAgeYears);
                
                    var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                    console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
                
                    var breedCoefficient = humanAgeYears - humanAgeYearsLastYear - 5;
                    console.log('breedCoefficient', breedCoefficient);
                
                    var humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
                  }
                  
                  else if (calendarAgeYears > secondYear) {
                    var ageInYearsLog = Math.log(calendarAgeYears);
                    var ageInYearsLogTimes16 = 16 * ageInYearsLog;
                
                    var humanAgeYears = ageInYearsLogTimes16 + 31;
                    // console.log('humanAgeYears', humanAgeYears);
                
                    var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                    console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
                
                    var breedCoefficient = humanAgeYears - humanAgeYearsLastYear;
                    console.log('breedCoefficient', breedCoefficient);
                
                    var humanAgeYearsRounded = parseInt(humanAgeYears - (2 * breedCoefficient));
                  }
          break;
    
        case "large":
                    var ageInYearsLog = Math.log(calendarAgeYears);
                    var ageInYearsLogTimes16 = 16 * ageInYearsLog;
                
                    var humanAgeYears = ageInYearsLogTimes16 + 31;
                    var humanAgeYearsRounded = parseInt(humanAgeYears);
          break;
    
        case "gigantic":
                  if(calendarAgeYears <= firstYear) {
                    var ageInYearsLog = Math.log(calendarAgeYears);
                    var ageInYearsLogTimes16 = 16 * ageInYearsLog;
                
                    var humanAgeYears = ageInYearsLogTimes16 + 25;
                    var humanAgeYearsRounded = parseInt(humanAgeYears);
                  }
                  
                  else if (calendarAgeYears == secondYear) {
                    var ageInYearsLog = Math.log(calendarAgeYears);
                    var ageInYearsLogTimes16 = 16 * ageInYearsLog;
                
                    var humanAgeYears = ageInYearsLogTimes16 + 31;
                    // console.log('humanAgeYears', humanAgeYears);
                
                    var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 27;
                    console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
                
                    var breedCoefficient = humanAgeYears - humanAgeYearsLastYear - 5;
                    console.log('breedCoefficient', breedCoefficient);
                
                    var humanAgeYearsRounded = parseInt(humanAgeYears - breedCoefficient);
                  }
                  
                  else if (calendarAgeYears > secondYear) {
                    var ageInYearsLog = Math.log(calendarAgeYears);
                    var ageInYearsLogTimes16 = 16 * ageInYearsLog;
                
                    var humanAgeYears = ageInYearsLogTimes16 + 31;
                    // console.log('humanAgeYears', humanAgeYears);
                
                    var humanAgeYearsLastYear = 16*(Math.log(calendarAgeYears - 1)) + 31;
                    console.log('humanAgeYearsLastYear', humanAgeYearsLastYear);
                
                    var breedCoefficient = humanAgeYears - humanAgeYearsLastYear;
                    console.log('breedCoefficient', breedCoefficient);
                
                    var humanAgeYearsRounded = parseInt(humanAgeYears + (breedCoefficient));
                  }
          break;
    
        default:
          break;
        }

          document.getElementById("humanYears").innerHTML = humanAgeYearsRounded;
          return humanAgeYearsRounded;
      }

    // Different breed type

    // 2 кг разлика = 1 месец
    // 10 кг        = 5 месеца (закръглям на 1 година)
    // 24 кг        = 12 месеца

    // малка порода (под 10 кг)             число - 2 год
    // средноголяма порода (10-15 кг)       число - 1 год
    // голяма порода (25-45 кг)             число
    // гигантска порода (над 45 кг)         число + 1 год

    // function setBreed(age) {
    //   const dogSize = document.querySelector('input[name="dog-size"]:checked').value;
    //   let humanAgeYearsRounded;
    
    //   switch (dogSize) {
    //     case "small":
    //       if (age <= 32) {
    //         humanAgeYearsRounded = age;
    //       } else if (age > 32) {
    //         humanAgeYearsRounded = age - 2;
    //       }
    //       break;
    
    //     case "medium":
    //       if (age <= 32) {
    //         humanAgeYearsRounded = age;
    //       } else if (age > 41) {
    //         humanAgeYearsRounded = age - 1;
    //       }
    //       break;
    
    //     case "large":
    //       humanAgeYearsRounded = age;
    //       break;
    
    //     case "gigantic":
    //       if (age <= 32) {
    //         humanAgeYearsRounded = age;
    //       } else if (age > 41) {
    //         humanAgeYearsRounded = age + 2;
    //       }
    //       break;
    
    //     default:
    //       break;
    //   }
    
    //   document.getElementById("humanYears").innerHTML = humanAgeYearsRounded;
    //   return humanAgeYearsRounded;
    // }
    
    setAge(humanAgeYearsRounded);
    setStage(humanAgeYearsRounded)
});


